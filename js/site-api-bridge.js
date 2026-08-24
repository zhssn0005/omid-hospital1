/**
 * Omid Hospital - Site ↔ API Bridge
 * Loads dynamic data from backend API and updates UI sections
 * Falls back to local static data if API is unavailable
 */

(function() {
  'use strict';

  // Wait for OmidAPI to be ready
  function waitFor(condition, cb, tries = 0) {
    if (tries > 20) return;
    if (condition()) cb();
    else setTimeout(() => waitFor(condition, cb, tries + 1), 200);
  }

  const escapeHtml = (value) => String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\"/g, '&quot;')
    .replace(/'/g, '&#039;');

  const localImageUrl = (value) => {
    const image = String(value || '');
    if (/^\/(assets|uploads)\/[\w./-]+$/.test(image)) return image;
    if (/^(assets|uploads)\/[\w./-]+$/.test(image)) return `/${image}`;
    return '/assets/logo.png';
  };

  // ─── Dynamic Specialties / Bento Grid ────────────────────────────────────────
  async function loadSpecialtiesBento() {
    try {
      const res = await OmidAPI.getSpecialties();
      const specs = res.data;
      if (!specs || specs.length === 0) return;

      const bentoEl = document.getElementById('bentoGrid');
      if (!bentoEl) return;

      let bh = '';
      specs.forEach((s, i) => {
        bh += `
          <div class="bc${i === 0 ? ' ft' : ''}" onclick="go('doctors')">
            <div class="bci">${escapeHtml(s.icon || '🏥')}</div>
            <div class="bcn">${escapeHtml(s.name_fa)}</div>
            <div class="bcs">${escapeHtml(s.doctor_count || 0)} پزشک</div>
          </div>`;
      });
      bentoEl.innerHTML = bh;
    } catch (e) {
      // Fallback: keep existing bento content
    }
  }

  // ─── Dynamic Doctor Preview ───────────────────────────────────────────────────
  async function loadDoctorPreview() {
    try {
      const res = await OmidAPI.getDoctors({ featured: 'true', limit: 8 });
      const doctors = res.data;
      if (!doctors || doctors.length === 0) return;

      const previewEl = document.getElementById('doctorPreview');
      if (!previewEl) return;

      let ph = '';
      doctors.forEach(doc => {
        ph += `
          <div class="dc" onclick="openDoctorFromAPI(${doc.id})">
            <div class="dci">
              <img src="${localImageUrl(doc.image_url)}"
                   onerror="this.src='/assets/logo.png'" 
                   alt="${escapeHtml(doc.full_name)}"
                   style="width:100%;height:100%;object-fit:cover;">
              <div class="dcb">📅 رزرو</div>
            </div>
            <div class="dc-body">
              <div class="dcn">${escapeHtml(doc.full_name)}</div>
              <div class="dcs">${escapeHtml(doc.specialty_name)}</div>
              <button class="btn btn-p btn-sm btn-r" 
                onclick="event.stopPropagation(); window.location.href='/booking.html?doctor_id=${doc.id}'"
                style="width:100%;justify-content:center;margin-top:8px">
                📅 رزرو نوبت
              </button>
            </div>
          </div>`;
      });
      previewEl.innerHTML = ph;

      // Update doctor count label
      const countEl = document.getElementById('doctorCountLbl');
      if (countEl && res.pagination) {
        countEl.textContent = res.pagination.total + ' پزشک در بیمارستان امید';
      }
    } catch (e) {
      // Fallback: keep existing preview
    }
  }

  // ─── Open doctor detail from API ──────────────────────────────────────────────
  window.openDoctorFromAPI = async function(id) {
    try {
      const res = await OmidAPI.getDoctor(id);
      const doc = res.data;
      // Use existing modal system if available, otherwise redirect
      if (typeof showDocModal === 'function') {
        const idx = (window.DOCTORS || []).findIndex(d => d.api_id === id);
        if (idx >= 0) { showDocModal(idx); return; }
      }
      // Redirect to booking with pre-selected doctor
      window.location.href = `/pages/doctor-profile.html?id=${encodeURIComponent(id)}`;
    } catch (e) {
      window.location.href = `/pages/doctor-profile.html?id=${encodeURIComponent(id)}`;
    }
  };

  // ─── Update "book appointment" buttons to use API booking ─────────────────────
  function patchBookButtons() {
    document.querySelectorAll('[onclick*="goToBook"]').forEach(btn => {
      const match = btn.getAttribute('onclick')?.match(/goToBook\((\d+)\)/);
      if (match) {
        btn.setAttribute('onclick', `window.location.href='/booking.html?doctor_id=${encodeURIComponent(match[1])}'`);
      }
    });
  }

  // Auth button injection removed - authentication not used in main site

  // ─── Init ─────────────────────────────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', () => {
    waitFor(() => typeof OmidAPI !== 'undefined', async () => {
      // Load dynamic data (non-blocking, fallback to static)
      loadSpecialtiesBento();
      loadDoctorPreview();
      patchBookButtons();
      // Auth button removed - authentication not used in main site
    });
  });

})();
