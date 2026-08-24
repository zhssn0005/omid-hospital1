// API Configuration
const API_URL = window.location.hostname === 'localhost' 
  ? 'http://localhost:5000/api'
  : '/api';

// State Management
const state = {
  user: null,
  token: localStorage.getItem('token'),
  currentPage: 'dashboard'
};

// Utility Functions
const escapeHtml = (value) => String(value ?? '')
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/\"/g, '&quot;')
  .replace(/'/g, '&#039;');

const showLoading = () => {
  document.getElementById('loading-overlay').style.display = 'flex';
};

const hideLoading = () => {
  document.getElementById('loading-overlay').style.display = 'none';
};

const showToast = (message, type = 'success') => {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast${type === 'error' ? ' error' : ''}`;
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
};

// API Functions
const api = {
  async request(endpoint, options = {}) {
    showLoading();
    try {
      const headers = {
        'Content-Type': 'application/json',
        ...options.headers
      };

      if (state.token) {
        headers['Authorization'] = `Bearer ${state.token}`;
      }

      const response = await fetch(`${API_URL}${endpoint}`, {
        ...options,
        headers
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'خطا در ارتباط با سرور');
      }

      return data;
    } catch (error) {
      showToast(error.message, 'error');
      throw error;
    } finally {
      hideLoading();
    }
  },

  // Auth
  login: (username, password) => 
    api.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ username, password })
    }),

  getMe: () => api.request('/auth/me'),

  // Doctors
  getDoctors: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return api.request(`/doctors?${query}`);
  },

  getDoctor: (id) => api.request(`/doctors/${id}`),

  createDoctor: (data) => 
    api.request('/doctors', {
      method: 'POST',
      body: JSON.stringify(data)
    }),

  updateDoctor: (id, data) =>
    api.request(`/doctors/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data)
    }),

  deleteDoctor: (id) =>
    api.request(`/doctors/${id}`, {
      method: 'DELETE'
    }),

  // Specialties
  getSpecialties: () => api.request('/specialties'),

  createSpecialty: (data) =>
    api.request('/specialties', {
      method: 'POST',
      body: JSON.stringify(data)
    }),

  updateSpecialty: (id, data) =>
    api.request(`/specialties/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data)
    }),

  deleteSpecialty: (id) =>
    api.request(`/specialties/${id}`, {
      method: 'DELETE'
    }),

  // Appointments
  getAppointments: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return api.request(`/appointments?${query}`);
  },

  updateAppointmentStatus: (id, status) =>
    api.request(`/appointments/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ status })
    }),

  // Departments
  getDepartments: () => api.request('/departments'),

  createDepartment: (data) =>
    api.request('/departments', {
      method: 'POST',
      body: JSON.stringify(data)
    }),

  updateDepartment: (id, data) =>
    api.request(`/departments/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data)
    }),

  deleteDepartment: (id) =>
    api.request(`/departments/${id}`, {
      method: 'DELETE'
    }),

  // Reviews
  getReviews: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return api.request(`/reviews?${query}`);
  },

  approveReview: (id) =>
    api.request(`/reviews/${id}/approve`, {
      method: 'PUT'
    }),

  deleteReview: (id) =>
    api.request(`/reviews/${id}`, {
      method: 'DELETE'
    }),

  // Stats
  getDashboardStats: () => api.request('/stats/dashboard')
};

// Auth Handler
const handleLogin = async (e) => {
  e.preventDefault();
  
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;
  const errorEl = document.getElementById('login-error');

  try {
    const response = await api.login(username, password);
    
    state.token = response.data.token;
    state.user = response.data.user;
    localStorage.setItem('token', state.token);
    
    showToast('ورود موفقیت‌آمیز بود', 'success');
    showDashboard();
  } catch (error) {
    errorEl.textContent = error.message;
  }
};

const handleLogout = () => {
  state.token = null;
  state.user = null;
  localStorage.removeItem('token');
  location.reload();
};

const showDashboard = async () => {
  document.getElementById('login-page').style.display = 'none';
  document.getElementById('dashboard').style.display = 'flex';
  
  // Get user info
  try {
    const response = await api.getMe();
    state.user = response.data;
    document.getElementById('user-name').textContent = state.user.full_name;
  } catch (error) {
    handleLogout();
    return;
  }

  // Load dashboard
  loadPage('dashboard');
};

// Page Navigation
const loadPage = async (pageName) => {
  state.currentPage = pageName;
  
  // Update active nav
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.remove('active');
    if (item.dataset.page === pageName) {
      item.classList.add('active');
    }
  });

  const container = document.getElementById('page-container');
  
  switch(pageName) {
    case 'dashboard':
      await loadDashboardPage(container);
      break;
    case 'doctors':
      await loadDoctorsPage(container);
      break;
    case 'specialties':
      await loadSpecialtiesPage(container);
      break;
    case 'appointments':
      await loadAppointmentsPage(container);
      break;
    case 'departments':
      await loadDepartmentsPage(container);
      break;
    case 'reviews':
      await loadReviewsPage(container);
      break;
    default:
      container.innerHTML = '<div class="empty-state"><h2>صفحه در دست ساخت</h2></div>';
  }
};

// Dashboard Page
const loadDashboardPage = async (container) => {
  container.innerHTML = `
    <h2 style="margin-bottom:1.5rem;">📊 داشبورد مدیریت</h2>
    <div class="stats-grid">
      <div class="stat-card"><div class="num" id="d-stats-docs">--</div><div class="lbl">پزشکان</div></div>
      <div class="stat-card"><div class="num" id="d-stats-apts">--</div><div class="lbl">نوبت‌ها</div></div>
      <div class="stat-card"><div class="num" id="d-stats-specs">--</div><div class="lbl">تخصص‌ها</div></div>
      <div class="stat-card"><div class="num" id="d-stats-depts">--</div><div class="lbl">بخش‌ها</div></div>
    </div>
    <div class="card"><p style="color:var(--text2);">به پنل مدیریت بیمارستان امید خوش آمدید. از منوی کناری بخش مورد نظر را انتخاب کنید.</p></div>
  `;
  try {
    var s=await api.getDashboardStats(); var d=s.data;
    document.getElementById('d-stats-docs').textContent=d.doctors?.total||0;
    document.getElementById('d-stats-apts').textContent=d.appointments?.total||0;
    document.getElementById('d-stats-specs').textContent=d.specialties?.total||0;
    document.getElementById('d-stats-depts').textContent=d.departments?.total||0;
  } catch(e) {}
};

// Doctors Page
const loadDoctorsPage = async (container) => {
  var resp=await api.getDoctors(); var docs=resp.data;
  container.innerHTML=`
    <h2 style="margin-bottom:1.5rem;">👨‍⚕️ مدیریت پزشکان</h2>
    <div class="flex flex-between mb-2">
      <div class="search-bar"><input type="search" placeholder="جستجوی پزشک..." id="search-doctors"></div>
    </div>
    <div class="table-wrap"><table id="doctors-table"><thead><tr>
      <th>نام</th><th>تخصص</th><th>کد نظام</th><th>هزینه (تومان)</th><th>امتیاز</th><th>وضعیت</th><th>عملیات</th>
    </tr></thead><tbody id="doctors-tbody">${renderDoctorsTable(docs)}</tbody></table></div>
    <div id="doctor-modal"></div>
  `;
  document.getElementById('search-doctors').addEventListener('input',async function(e){
    var r=await api.getDoctors({search:e.target.value});
    document.getElementById('doctors-tbody').innerHTML=renderDoctorsTable(r.data);
  });
};

const renderDoctorsTable = (doctors) => {
  if (doctors.length === 0) {
    return '<tr><td colspan="7" style="text-align:center;">پزشکی یافت نشد</td></tr>';
  }

  return doctors.map(doc => `
    <tr>
      <td>${escapeHtml(doc.full_name)}</td>
      <td>${escapeHtml(doc.specialty_name)}</td>
      <td>${escapeHtml(doc.medical_code)}</td>
      <td>${(doc.consultation_fee || 0).toLocaleString()} تومان</td>
      <td>⭐ ${(doc.rating || 0).toFixed(1)}</td>
      <td><span class="badge badge-${doc.is_available ? 'success' : 'danger'}">${doc.is_available ? 'فعال' : 'غیرفعال'}</span></td>
      <td class="action-buttons">
        <button class="btn btn-sm btn-primary" onclick="editDoctor(${doc.id})">ویرایش</button>
        <button class="btn btn-sm btn-danger" onclick="deleteDoctor(${doc.id})">حذف</button>
      </td>
    </tr>
  `).join('');
};

// Helper Functions
const getStatusBadge = (status) => {
  const badges = {
    pending: 'warning',
    confirmed: 'info',
    completed: 'success',
    cancelled: 'danger'
  };
  return badges[status] || 'info';
};

const getStatusText = (status) => {
  const texts = {
    pending: 'در انتظار',
    confirmed: 'تایید شده',
    completed: 'انجام شده',
    cancelled: 'لغو شده'
  };
  return texts[status] || status;
};

// Modal Functions
window.showDoctorModal = async (doctorId = null) => {
  const specialties = await api.getSpecialties();
  const doctor = doctorId ? await api.getDoctor(doctorId) : null;

  const modal = document.getElementById('doctor-modal');
  modal.innerHTML = `
    <div class="modal-overlay" onclick="closeDoctorModal(event)">
      <div class="modal" onclick="event.stopPropagation()">
        <div class="modal-header">
          <h2>${doctorId ? 'ویرایش پزشک' : 'افزودن پزشک جدید'}</h2>
          <button class="modal-close" onclick="closeDoctorModal()">×</button>
        </div>
        <form id="doctor-form" class="modal-body">
          <div class="form-group">
            <label>کد نظام پزشکی *</label>
            <input type="text" name="medical_code" value="${escapeHtml(doctor?.medical_code || '')}" required>
          </div>
          <div class="form-group">
            <label>تخصص *</label>
            <select name="specialty_id" required>
              <option value="">انتخاب کنید</option>
              ${specialties.data.map(s => `
                <option value="${escapeHtml(s.id)}" ${doctor?.specialty_id === s.id ? 'selected' : ''}>${escapeHtml(s.name_fa)}</option>
              `).join('')}
            </select>
          </div>
          <div class="form-group">
            <label>بیوگرافی</label>
            <textarea name="bio">${escapeHtml(doctor?.bio || '')}</textarea>
          </div>
          <div class="form-group">
            <label>تحصیلات</label>
            <textarea name="education">${escapeHtml(doctor?.education || '')}</textarea>
          </div>
          <div class="form-group">
            <label>سابقه کار (سال)</label>
            <input type="number" name="experience_years" value="${escapeHtml(doctor?.experience_years || 0)}">
          </div>
          <div class="form-group">
            <label>هزینه ویزیت (تومان)</label>
            <input type="number" name="consultation_fee" value="${escapeHtml(doctor?.consultation_fee || 0)}">
          </div>
          <div class="form-group">
            <label>آدرس مطب</label>
            <textarea name="office_address">${escapeHtml(doctor?.office_address || '')}</textarea>
          </div>
          <div class="form-group">
            <label>تلفن مطب</label>
            <input type="text" name="office_phone" value="${escapeHtml(doctor?.office_phone || '')}">
          </div>
        </form>
        <div class="modal-footer">
          <button class="btn btn-secondary" onclick="closeDoctorModal()">انصراف</button>
          <button class="btn btn-primary" onclick="saveDoctorForm(${doctorId})">ذخیره</button>
        </div>
      </div>
    </div>
  `;
};

window.closeDoctorModal = (event) => {
  if (!event || event.target.classList.contains('modal-overlay')) {
    document.getElementById('doctor-modal').innerHTML = '';
  }
};

window.saveDoctorForm = async (doctorId) => {
  const form = document.getElementById('doctor-form');
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  try {
    if (doctorId) {
      await api.updateDoctor(doctorId, data);
      showToast('پزشک با موفقیت به‌روزرسانی شد', 'success');
    } else {
      await api.createDoctor(data);
      showToast('پزشک با موفقیت اضافه شد', 'success');
    }
    closeDoctorModal();
    loadPage('doctors');
  } catch (error) {
    // Error already shown by api.request
  }
};

window.editDoctor = (id) => {
  showDoctorModal(id);
};

window.deleteDoctor = async (id) => {
  if (!confirm('آیا از حذف این پزشک اطمینان دارید؟')) return;

  try {
    await api.deleteDoctor(id);
    showToast('پزشک با موفقیت حذف شد', 'success');
    loadPage('doctors');
  } catch (error) {
    // Error already shown
  }
};

// Specialties Page
const loadSpecialtiesPage = async (container) => {
  const response = await api.getSpecialties();
  const specialties = response.data;

  container.innerHTML = `
    <div class="page-header">
      <h1>مدیریت تخصص‌ها</h1>
    </div>

    <div class="table-container">
      <div class="table-header">
        <h2>لیست تخصص‌ها</h2>
        <button class="btn btn-primary btn-sm" onclick="showSpecialtyModal()">+ افزودن تخصص</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>نام فارسی</th>
            <th>نام انگلیسی</th>
            <th>تعداد پزشکان</th>
            <th>وضعیت</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          ${specialties.map(spec => `
            <tr>
              <td>${escapeHtml(spec.name_fa)}</td>
              <td>${escapeHtml(spec.name_en)}</td>
              <td>${escapeHtml(spec.doctor_count)}</td>
              <td><span class="badge badge-${spec.is_active ? 'success' : 'danger'}">${spec.is_active ? 'فعال' : 'غیرفعال'}</span></td>
              <td class="action-buttons">
                <button class="btn btn-sm btn-primary" onclick="editSpecialty(${spec.id})">ویرایش</button>
                <button class="btn btn-sm btn-danger" onclick="deleteSpecialty(${spec.id})">حذف</button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>

    <div id="specialty-modal"></div>
  `;
};

// Appointments Page
const loadAppointmentsPage = async (container) => {
  const response = await api.getAppointments();
  const appointments = response.data;

  container.innerHTML = `
    <div class="page-header">
      <h1>مدیریت نوبت‌ها</h1>
    </div>

    <div class="table-container">
      <div class="table-header">
        <h2>لیست نوبت‌ها</h2>
        <select id="filter-status" class="search-input" style="width: auto;">
          <option value="">همه وضعیت‌ها</option>
          <option value="pending">در انتظار</option>
          <option value="confirmed">تایید شده</option>
          <option value="completed">انجام شده</option>
          <option value="cancelled">لغو شده</option>
        </select>
      </div>
      <table id="appointments-table">
        <thead>
          <tr>
            <th>شماره</th>
            <th>بیمار</th>
            <th>پزشک</th>
            <th>تاریخ</th>
            <th>ساعت</th>
            <th>نوع</th>
            <th>وضعیت</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          ${renderAppointmentsTable(appointments)}
        </tbody>
      </table>
    </div>
  `;

  document.getElementById('filter-status').addEventListener('change', async (e) => {
    const status = e.target.value;
    const response = await api.getAppointments(status ? { status } : {});
    document.querySelector('#appointments-table tbody').innerHTML = renderAppointmentsTable(response.data);
  });
};

const renderAppointmentsTable = (appointments) => {
  if (appointments.length === 0) {
    return '<tr><td colspan="8" style="text-align:center;">نوبتی یافت نشد</td></tr>';
  }

  return appointments.map(apt => `
    <tr>
      <td>${apt.id}</td>
      <td>${escapeHtml(apt.patient_name)}</td>
      <td>${escapeHtml(apt.doctor_name)}</td>
      <td>${escapeHtml(apt.appointment_date)}</td>
      <td>${escapeHtml(apt.appointment_time)}</td>
      <td>${escapeHtml(apt.type)}</td>
      <td><span class="badge badge-${getStatusBadge(apt.status)}">${getStatusText(apt.status)}</span></td>
      <td class="action-buttons">
        ${apt.status === 'pending' ? `
          <button class="btn btn-sm btn-success" onclick="updateAppointmentStatus(${apt.id}, 'confirmed')">تایید</button>
          <button class="btn btn-sm btn-danger" onclick="updateAppointmentStatus(${apt.id}, 'cancelled')">لغو</button>
        ` : ''}
      </td>
    </tr>
  `).join('');
};

window.updateAppointmentStatus = async (id, status) => {
  try {
    await api.updateAppointmentStatus(id, status);
    showToast('وضعیت نوبت به‌روزرسانی شد', 'success');
    loadPage('appointments');
  } catch (error) {
    // Error shown
  }
};

// Departments Page
const loadDepartmentsPage = async (container) => {
  const response = await api.getDepartments();
  const departments = response.data;

  container.innerHTML = `
    <div class="page-header">
      <h1>مدیریت بخش‌ها</h1>
    </div>

    <div class="table-container">
      <div class="table-header">
        <h2>لیست بخش‌ها</h2>
        <button class="btn btn-primary btn-sm" onclick="showDepartmentModal()">+ افزودن بخش</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>نام</th>
            <th>طبقه</th>
            <th>تلفن</th>
            <th>مسئول بخش</th>
            <th>وضعیت</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          ${departments.map(dept => `
            <tr>
              <td>${escapeHtml(dept.name_fa)}</td>
              <td>طبقه ${escapeHtml(dept.floor || '-')}</td>
              <td>${escapeHtml(dept.phone || '-')}</td>
              <td>${escapeHtml(dept.head_doctor_name || '-')}</td>
              <td><span class="badge badge-${dept.is_active ? 'success' : 'danger'}">${dept.is_active ? 'فعال' : 'غیرفعال'}</span></td>
              <td class="action-buttons">
                <button class="btn btn-sm btn-primary" onclick="editDepartment(${dept.id})">ویرایش</button>
                <button class="btn btn-sm btn-danger" onclick="deleteDepartment(${dept.id})">حذف</button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>

    <div id="department-modal"></div>
  `;
};

// Reviews Page
const loadReviewsPage = async (container) => {
  const response = await api.getReviews({ approved_only: 'false' });
  const reviews = response.data;

  container.innerHTML = `
    <div class="page-header">
      <h1>مدیریت نظرات</h1>
    </div>

    <div class="table-container">
      <div class="table-header">
        <h2>لیست نظرات</h2>
      </div>
      <table>
        <thead>
          <tr>
            <th>بیمار</th>
            <th>امتیاز</th>
            <th>نظر</th>
            <th>تاریخ</th>
            <th>وضعیت</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          ${reviews.map(review => `
            <tr>
              <td>${escapeHtml(review.patient_name)}</td>
              <td>${'⭐'.repeat(Math.max(0, Math.min(5, Number(review.rating) || 0)))}</td>
              <td>${escapeHtml(review.comment || '-')}</td>
              <td>${new Date(review.created_at).toLocaleDateString('fa-IR')}</td>
              <td><span class="badge badge-${review.is_approved ? 'success' : 'warning'}">${review.is_approved ? 'تایید شده' : 'در انتظار'}</span></td>
              <td class="action-buttons">
                ${!review.is_approved ? `
                  <button class="btn btn-sm btn-success" onclick="approveReview(${review.id})">تایید</button>
                ` : ''}
                <button class="btn btn-sm btn-danger" onclick="deleteReview(${review.id})">حذف</button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
};

window.approveReview = async (id) => {
  try {
    await api.approveReview(id);
    showToast('نظر تایید شد', 'success');
    loadPage('reviews');
  } catch (error) {
    // Error shown
  }
};

window.deleteReview = async (id) => {
  if (!confirm('آیا از حذف این نظر اطمینان دارید؟')) return;

  try {
    await api.deleteReview(id);
    showToast('نظر حذف شد', 'success');
    loadPage('reviews');
  } catch (error) {
    // Error shown
  }
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  // Login form
  document.getElementById('login-form')?.addEventListener('submit', handleLogin);
  
  // Logout button
  document.getElementById('logout-btn')?.addEventListener('click', handleLogout);

  // Navigation
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const page = item.dataset.page;
      loadPage(page);
    });
  });

  // Check if user is logged in
  if (state.token) {
    showDashboard();
  }
});
