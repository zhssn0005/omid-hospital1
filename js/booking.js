/**
 * Omid Hospital - Booking System
 * Full appointment booking flow with calendar + time slots
 */

const Booking = {
  state: {
    step: 1,
    selectedSpecialty: null,
    selectedDoctor: null,
    selectedDate: null,
    selectedTime: null,
    patientInfo: null,
    availableSlots: [],
    doctors: [],
    specialties: [],
  },

  // Persian days & months
  persianDays: ['شنبه','یکشنبه','دوشنبه','سه‌شنبه','چهارشنبه','پنجشنبه','جمعه'],
  persianMonths: ['فروردین','اردیبهشت','خرداد','تیر','مرداد','شهریور','مهر','آبان','آذر','دی','بهمن','اسفند'],
  
  // Map Gregorian day index to Persian
  dayMap: { 0:'یکشنبه', 1:'دوشنبه', 2:'سه‌شنبه', 3:'چهارشنبه', 4:'پنجشنبه', 5:'جمعه', 6:'شنبه' },

  init() {
    const container = document.getElementById('booking-wizard');
    if (!container) return;
    this.render();
  },

  render() {
    const container = document.getElementById('booking-wizard');
    if (!container) return;

    container.innerHTML = `
      <div class="wizard-wrap">
        <!-- Progress -->
        <div class="wizard-progress">
          ${[1,2,3,4].map(i => `
            <div class="wp-step ${this.state.step >= i ? 'active' : ''} ${this.state.step > i ? 'done' : ''}">
              <div class="wp-circle">${this.state.step > i ? '✓' : i}</div>
              <span>${['انتخاب پزشک','انتخاب زمان','اطلاعات بیمار','تأیید نهایی'][i-1]}</span>
            </div>
            ${i < 4 ? '<div class="wp-line ' + (this.state.step > i ? 'active' : '') + '"></div>' : ''}
          `).join('')}
        </div>

        <!-- Step Content -->
        <div class="wizard-body" id="wizard-body">
          ${this.renderStep()}
        </div>

        <!-- Navigation -->
        <div class="wizard-nav">
          ${this.state.step > 1 ? `<button class="wbtn wbtn-back" id="wiz-back">← مرحله قبل</button>` : `<span></span>`}
          ${this.state.step < 4
            ? `<button class="wbtn wbtn-next" id="wiz-next" ${!this.canProceed() ? 'disabled' : ''}>مرحله بعد ←</button>`
            : `<button class="wbtn wbtn-submit" id="wiz-submit">تأیید و ثبت نوبت ✓</button>`
          }
        </div>
      </div>
    `;

    this.attachEvents();
  },

  renderStep() {
    switch(this.state.step) {
      case 1: return this.renderStep1();
      case 2: return this.renderStep2();
      case 3: return this.renderStep3();
      case 4: return this.renderStep4();
    }
  },

  // Step 1: Select Doctor
  renderStep1() {
    if (!this.state.specialties.length) {
      this.loadSpecialties();
      return `<div class="wiz-loading"><div class="wiz-spinner"></div><p>در حال بارگذاری...</p></div>`;
    }

    return `
      <div class="wiz-step1">
        <h2 class="wiz-title">پزشک مورد نظر خود را انتخاب کنید</h2>

        <!-- Specialty Filter -->
        <div class="spec-filter">
          <button class="spec-btn ${!this.state.selectedSpecialty ? 'active' : ''}" data-spec="">همه تخصص‌ها</button>
          ${this.state.specialties.map(s => `
            <button class="spec-btn ${this.state.selectedSpecialty === s.slug ? 'active' : ''}" data-spec="${this.escapeHtml(s.slug)}">
              ${this.escapeHtml(s.name_fa)}
            </button>
          `).join('')}
        </div>

        <!-- Search -->
        <div class="wiz-search">
          <input type="search" id="doc-search" placeholder="جستجوی نام پزشک..." value="">
        </div>

        <!-- Doctor Cards -->
        <div class="doc-grid" id="doc-grid">
          ${this.state.doctors.length
            ? this.state.doctors.map(doc => this.renderDoctorCard(doc)).join('')
            : `<div class="wiz-empty">پزشکی یافت نشد</div>`
          }
        </div>
      </div>
    `;
  },

  renderDoctorCard(doc) {
    const selected = this.state.selectedDoctor?.id === doc.id;
    return `
      <div class="doc-card ${selected ? 'selected' : ''}" data-docid="${doc.id}">
        <div class="doc-card-img">
          <img src="${this.localImageUrl(doc.image_url)}"
               onerror="this.src='/assets/logo.png'" 
               alt="${this.escapeHtml(doc.full_name)}">
        </div>
        <div class="doc-card-info">
          <h3>${this.escapeHtml(doc.full_name)}</h3>
          <p class="doc-spec">${this.escapeHtml(doc.specialty_name)}</p>
          <div class="doc-meta">
            <span>⭐ ${parseFloat(doc.rating || 0).toFixed(1)}</span>
            <span>🕐 ${doc.experience_years} سال</span>
            <span>💰 ${(doc.consultation_fee || 0).toLocaleString('fa-IR')} تومان</span>
          </div>
          ${selected ? `<div class="doc-selected-badge">✓ انتخاب شده</div>` : ''}
        </div>
      </div>
    `;
  },

  // Step 2: Select Date & Time
  renderStep2() {
    const today = new Date();
    const dates = this.getNext30Days();

    return `
      <div class="wiz-step2">
        <h2 class="wiz-title">تاریخ و ساعت مناسب خود را انتخاب کنید</h2>
        <p class="wiz-subtitle">پزشک: <strong>${this.escapeHtml(this.state.selectedDoctor?.full_name)}</strong></p>

        <!-- Calendar Strip -->
        <div class="date-strip" id="date-strip">
          ${dates.map(d => `
            <div class="date-cell ${this.state.selectedDate === d.iso ? 'selected' : ''}" data-date="${d.iso}">
              <span class="dc-day">${d.dayName}</span>
              <span class="dc-num">${d.day}</span>
              <span class="dc-month">${d.month}</span>
            </div>
          `).join('')}
        </div>

        <!-- Time Slots -->
        <div class="slots-section" id="slots-section">
          ${this.state.selectedDate
            ? this.renderTimeSlots()
            : `<div class="slots-placeholder">ابتدا تاریخ را انتخاب کنید</div>`
          }
        </div>
      </div>
    `;
  },

  renderTimeSlots() {
    if (this.state.availableSlots === null) {
      return `<div class="wiz-loading"><div class="wiz-spinner"></div><p>در حال بارگذاری ساعت‌ها...</p></div>`;
    }
    if (!this.state.availableSlots.length) {
      return `<div class="wiz-empty">در این تاریخ ساعت خالی وجود ندارد</div>`;
    }
    return `
      <div class="slots-grid">
        ${this.state.availableSlots.map(slot => `
          <button class="slot-btn ${this.state.selectedTime === slot ? 'selected' : ''}" data-slot="${this.escapeHtml(slot)}">
            ${this.escapeHtml(slot)}
          </button>
        `).join('')}
      </div>
    `;
  },

  // Step 3: Patient Info
  renderStep3() {
    const user = typeof OmidAPI !== 'undefined' ? OmidAPI.getUser() : null;
    return `
      <div class="wiz-step3">
        <h2 class="wiz-title">اطلاعات بیمار</h2>

        <!-- Visit Type -->
        <div class="form-group">
          <label>نوع مراجعه</label>
          <div class="visit-types">
            ${[
              { val: 'in-person', icon: '🏥', label: 'حضوری' },
              { val: 'online-video', icon: '📹', label: 'ویدیو کال' },
              { val: 'phone', icon: '📞', label: 'تلفنی' },
            ].map(t => `
              <label class="visit-type-opt ${this.state.patientInfo?.type === t.val ? 'selected' : ''}">
                <input type="radio" name="visit_type" value="${t.val}" 
                  ${this.state.patientInfo?.type === t.val ? 'checked' : ''}>
                <span>${t.icon} ${t.label}</span>
              </label>
            `).join('')}
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label>نام و نام‌خانوادگی *</label>
            <input type="text" id="pt-name" value="${this.escapeHtml(user?.full_name || this.state.patientInfo?.name || '')}"
              placeholder="نام کامل بیمار">
          </div>
          <div class="form-group">
            <label>شماره موبایل *</label>
            <input type="tel" id="pt-phone" value="${this.escapeHtml(user?.phone || this.state.patientInfo?.phone || '')}"
              placeholder="09XXXXXXXXX">
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label>سن</label>
            <input type="number" id="pt-age" value="${this.escapeHtml(this.state.patientInfo?.age || '')}"
              placeholder="سن بیمار" min="1" max="120">
          </div>
          <div class="form-group">
            <label>علت مراجعه</label>
            <input type="text" id="pt-reason" value="${this.escapeHtml(this.state.patientInfo?.reason || '')}"
              placeholder="علت مراجعه را بنویسید">
          </div>
        </div>

        <div class="form-group">
          <label>توضیحات بیشتر</label>
          <textarea id="pt-notes" placeholder="اگر توضیح خاصی دارید اینجا بنویسید...">${this.escapeHtml(this.state.patientInfo?.notes || '')}</textarea>
        </div>
      </div>
    `;
  },

  // Step 4: Confirm
  renderStep4() {
    const d = this.state;
    const dateLabel = d.selectedDate ? new Date(d.selectedDate).toLocaleDateString('fa-IR') : '';
    return `
      <div class="wiz-step4">
        <h2 class="wiz-title">تأیید نهایی اطلاعات نوبت</h2>

        <div class="confirm-card">
          <div class="confirm-row">
            <span class="confirm-label">پزشک</span>
            <span class="confirm-value">${this.escapeHtml(d.selectedDoctor?.full_name)}</span>
          </div>
          <div class="confirm-row">
            <span class="confirm-label">تخصص</span>
            <span class="confirm-value">${this.escapeHtml(d.selectedDoctor?.specialty_name)}</span>
          </div>
          <div class="confirm-row">
            <span class="confirm-label">تاریخ</span>
            <span class="confirm-value">${this.escapeHtml(dateLabel)}</span>
          </div>
          <div class="confirm-row">
            <span class="confirm-label">ساعت</span>
            <span class="confirm-value">${this.escapeHtml(d.selectedTime)}</span>
          </div>
          <div class="confirm-row">
            <span class="confirm-label">نوع مراجعه</span>
            <span class="confirm-value">${this.escapeHtml(this.getVisitTypeLabel(d.patientInfo?.type))}</span>
          </div>
          <div class="confirm-row">
            <span class="confirm-label">بیمار</span>
            <span class="confirm-value">${this.escapeHtml(d.patientInfo?.name)}</span>
          </div>
          <div class="confirm-row">
            <span class="confirm-label">موبایل</span>
            <span class="confirm-value">${this.escapeHtml(d.patientInfo?.phone)}</span>
          </div>
          <div class="confirm-row highlight">
            <span class="confirm-label">هزینه ویزیت</span>
            <span class="confirm-value">${(d.selectedDoctor?.consultation_fee || 0).toLocaleString('fa-IR')} تومان</span>
          </div>
        </div>

        <p class="confirm-note">
          ⚠️ پس از ثبت نوبت، کد پیگیری برای شما ارسال می‌شود.
        </p>
      </div>
    `;
  },

  // ─── Data Loading ────────────────────────────────────────────────────────────

  async loadSpecialties() {
    try {
      const res = await OmidAPI.getSpecialties();
      this.state.specialties = res.data || [];
      await this.loadDoctors();
    } catch (e) {
      this.state.specialties = [];
      this.render();
    }
  },

  async loadDoctors(specialty = null, search = null) {
    try {
      const params = { available: 'true' };
      if (specialty) params.specialty = specialty;
      if (search) params.search = search;
      const res = await OmidAPI.getDoctors(params);
      this.state.doctors = res.data || [];
      this.render();
    } catch (e) {
      this.state.doctors = [];
      this.render();
    }
  },

  async loadSlots(doctorId, date) {
    this.state.availableSlots = null; // null = loading
    this.updateSlotsUI();
    try {
      const res = await OmidAPI.getDoctorSlots(doctorId, date);
      this.state.availableSlots = res.data?.available_slots || [];
      this.updateSlotsUI();
    } catch (e) {
      this.state.availableSlots = [];
      this.updateSlotsUI();
    }
  },

  updateSlotsUI() {
    const el = document.getElementById('slots-section');
    if (el) el.innerHTML = this.renderTimeSlots();
    this.attachSlotEvents();
  },

  // ─── Events ──────────────────────────────────────────────────────────────────

  attachEvents() {
    // Back / Next
    document.getElementById('wiz-back')?.addEventListener('click', () => this.prevStep());
    document.getElementById('wiz-next')?.addEventListener('click', () => this.nextStep());
    document.getElementById('wiz-submit')?.addEventListener('click', () => this.submit());

    if (this.state.step === 1) {
      // Specialty filter
      document.querySelectorAll('.spec-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          this.state.selectedSpecialty = btn.dataset.spec || null;
          this.state.selectedDoctor = null;
          this.loadDoctors(this.state.selectedSpecialty);
        });
      });

      // Doctor search
      document.getElementById('doc-search')?.addEventListener('input', (e) => {
        this.loadDoctors(this.state.selectedSpecialty, e.target.value);
      });

      // Doctor select
      document.querySelectorAll('.doc-card').forEach(card => {
        card.addEventListener('click', () => {
          const id = parseInt(card.dataset.docid);
          this.state.selectedDoctor = this.state.doctors.find(d => d.id === id) || null;
          document.querySelectorAll('.doc-card').forEach(c => c.classList.remove('selected'));
          card.classList.add('selected');
          card.innerHTML = card.innerHTML.replace(/<div class="doc-selected-badge">.*?<\/div>/g, '') + 
            `<div class="doc-selected-badge">✓ انتخاب شده</div>`;
          this.updateNextBtn();
        });
      });
    }

    if (this.state.step === 2) {
      // Date selection
      document.querySelectorAll('.date-cell').forEach(cell => {
        cell.addEventListener('click', () => {
          this.state.selectedDate = cell.dataset.date;
          this.state.selectedTime = null;
          document.querySelectorAll('.date-cell').forEach(c => c.classList.remove('selected'));
          cell.classList.add('selected');
          this.loadSlots(this.state.selectedDoctor.id, this.state.selectedDate);
        });
      });

      this.attachSlotEvents();
    }
  },

  attachSlotEvents() {
    document.querySelectorAll('.slot-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.state.selectedTime = btn.dataset.slot;
        document.querySelectorAll('.slot-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        this.updateNextBtn();
      });
    });
  },

  updateNextBtn() {
    const btn = document.getElementById('wiz-next');
    if (btn) btn.disabled = !this.canProceed();
  },

  canProceed() {
    switch(this.state.step) {
      case 1: return !!this.state.selectedDoctor;
      case 2: return !!this.state.selectedDate && !!this.state.selectedTime;
      case 3: return true;
      case 4: return true;
    }
  },

  // ─── Navigation ──────────────────────────────────────────────────────────────

  nextStep() {
    if (this.state.step === 3) {
      const name = document.getElementById('pt-name')?.value?.trim();
      const phone = document.getElementById('pt-phone')?.value?.trim();
      if (!name || !phone) {
        alert('لطفاً نام و شماره موبایل را وارد کنید');
        return;
      }
      this.state.patientInfo = {
        name,
        phone,
        age: document.getElementById('pt-age')?.value || null,
        reason: document.getElementById('pt-reason')?.value || '',
        notes: document.getElementById('pt-notes')?.value || '',
        type: document.querySelector('input[name="visit_type"]:checked')?.value || 'in-person',
      };
    }
    if (this.canProceed()) {
      this.state.step++;
      this.render();
    }
  },

  prevStep() {
    if (this.state.step > 1) {
      this.state.step--;
      this.render();
    }
  },

  // ─── Submit ──────────────────────────────────────────────────────────────────

  async submit() {
    const btn = document.getElementById('wiz-submit');
    if (btn) { btn.disabled = true; btn.textContent = 'در حال ثبت...'; }

    try {
      const payload = {
        doctor_id: this.state.selectedDoctor.id,
        appointment_date: this.state.selectedDate,
        appointment_time: this.state.selectedTime,
        type: this.state.patientInfo.type,
        patient_name: this.state.patientInfo.name,
        patient_phone: this.state.patientInfo.phone,
        patient_age: this.state.patientInfo.age,
        reason: this.state.patientInfo.reason,
        notes: this.state.patientInfo.notes,
      };

      const res = await OmidAPI.bookAppointment(payload);

      document.getElementById('booking-wizard').innerHTML = `
        <div class="booking-success">
          <div class="bs-icon">✅</div>
          <h2>نوبت شما با موفقیت ثبت شد!</h2>
          <p>کد پیگیری: <strong>#${this.escapeHtml(res.data.id)}</strong></p>
          <p>پزشک: <strong>${this.escapeHtml(this.state.selectedDoctor.full_name)}</strong></p>
          <p>تاریخ: <strong>${this.escapeHtml(new Date(this.state.selectedDate).toLocaleDateString('fa-IR'))}</strong> | ساعت: <strong>${this.escapeHtml(this.state.selectedTime)}</strong></p>
          <button onclick="location.reload()" class="wbtn wbtn-next" style="margin-top:1.5rem;">بازگشت به صفحه اصلی</button>
        </div>
      `;
    } catch (e) {
      if (btn) { btn.disabled = false; btn.textContent = 'تأیید و ثبت نوبت ✓'; }
      alert('خطا در ثبت نوبت: ' + e.message);
    }
  },

  // ─── Helpers ─────────────────────────────────────────────────────────────────

  escapeHtml(value) {
    return String(value ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\"/g, '&quot;')
      .replace(/'/g, '&#039;');
  },

  localImageUrl(value) {
    const image = String(value || '');
    return /^\/(assets|uploads)\/[\w./-]+$/.test(image) ? image : '/assets/logo.png';
  },

  getNext30Days() {
    const days = [];
    const today = new Date();
    for (let i = 0; i < 30; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      const iso = d.toISOString().split('T')[0];
      days.push({
        iso,
        day: d.toLocaleDateString('fa-IR-u-ca-persian', { day: 'numeric' }),
        month: d.toLocaleDateString('fa-IR-u-ca-persian', { month: 'short' }),
        dayName: this.dayMap[d.getDay()],
      });
    }
    return days;
  },

  getVisitTypeLabel(type) {
    const map = { 'in-person': 'حضوری', 'online-video': 'ویدیو کال', 'online-chat': 'چت آنلاین', phone: 'تلفنی' };
    return map[type] || type;
  },
};

// Auto-init on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => Booking.init());
window.Booking = Booking;
