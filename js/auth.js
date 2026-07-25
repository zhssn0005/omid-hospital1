/**
 * Omid Hospital - Auth System
 * Login / Register / User Panel
 */

const Auth = {
  init() {
    this.updateNavbar();
    this.attachModalTrigger();
  },

  updateNavbar() {
    const loginBtn = document.getElementById('auth-btn');
    if (!loginBtn) return;

    if (OmidAPI.isLoggedIn()) {
      const user = OmidAPI.getUser();
      loginBtn.textContent = user?.full_name || 'پروفایل';
      loginBtn.onclick = () => Auth.showUserPanel();
    } else {
      loginBtn.textContent = 'ورود / ثبت‌نام';
      loginBtn.onclick = () => Auth.showAuthModal();
    }
  },

  attachModalTrigger() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.closeAll();
    });
  },

  // ─── Auth Modal ──────────────────────────────────────────────────────────────

  showAuthModal(tab = 'login') {
    this.closeAll();
    const overlay = document.createElement('div');
    overlay.id = 'auth-overlay';
    overlay.className = 'auth-overlay';
    overlay.innerHTML = `
      <div class="auth-modal">
        <button class="auth-close" onclick="Auth.closeAll()">×</button>
        
        <div class="auth-tabs">
          <button class="auth-tab ${tab === 'login' ? 'active' : ''}" onclick="Auth.switchTab('login')">ورود</button>
          <button class="auth-tab ${tab === 'register' ? 'active' : ''}" onclick="Auth.switchTab('register')">ثبت‌نام</button>
        </div>

        <div id="auth-tab-content">
          ${tab === 'login' ? this.renderLoginForm() : this.renderRegisterForm()}
        </div>
      </div>
    `;
    overlay.addEventListener('click', (e) => { if (e.target === overlay) this.closeAll(); });
    document.body.appendChild(overlay);
  },

  switchTab(tab) {
    document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.auth-tab').forEach(t => {
      if (t.textContent.trim() === (tab === 'login' ? 'ورود' : 'ثبت‌نام')) t.classList.add('active');
    });
    document.getElementById('auth-tab-content').innerHTML = 
      tab === 'login' ? this.renderLoginForm() : this.renderRegisterForm();
  },

  renderLoginForm() {
    return `
      <form id="login-form" class="auth-form" onsubmit="Auth.handleLogin(event)">
        <h2>خوش آمدید</h2>
        <p class="auth-sub">با حساب کاربری خود وارد شوید</p>
        <div class="form-group">
          <label>نام کاربری یا موبایل</label>
          <input type="text" id="auth-username" required autocomplete="username">
        </div>
        <div class="form-group">
          <label>رمز عبور</label>
          <input type="password" id="auth-password" required autocomplete="current-password">
        </div>
        <div id="auth-error" class="auth-error"></div>
        <button type="submit" class="wbtn wbtn-next" style="width:100%">ورود</button>
        <p class="auth-switch">حساب ندارید؟ <a href="#" onclick="Auth.switchTab('register')">ثبت‌نام کنید</a></p>
      </form>
    `;
  },

  renderRegisterForm() {
    return `
      <form id="register-form" class="auth-form" onsubmit="Auth.handleRegister(event)">
        <h2>ثبت‌نام</h2>
        <p class="auth-sub">حساب کاربری جدید بسازید</p>
        <div class="form-row">
          <div class="form-group">
            <label>نام کامل *</label>
            <input type="text" id="reg-fullname" required>
          </div>
          <div class="form-group">
            <label>شماره موبایل *</label>
            <input type="tel" id="reg-phone" required placeholder="09XXXXXXXXX">
          </div>
        </div>
        <div class="form-group">
          <label>ایمیل</label>
          <input type="email" id="reg-email">
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>نام کاربری *</label>
            <input type="text" id="reg-username" required>
          </div>
          <div class="form-group">
            <label>رمز عبور *</label>
            <input type="password" id="reg-password" required minlength="6">
          </div>
        </div>
        <div id="auth-error" class="auth-error"></div>
        <button type="submit" class="wbtn wbtn-next" style="width:100%">ثبت‌نام</button>
        <p class="auth-switch">حساب دارید؟ <a href="#" onclick="Auth.switchTab('login')">وارد شوید</a></p>
      </form>
    `;
  },

  async handleLogin(e) {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]');
    const errEl = document.getElementById('auth-error');
    btn.disabled = true; btn.textContent = 'در حال ورود...';
    try {
      const res = await OmidAPI.login(
        document.getElementById('auth-username').value,
        document.getElementById('auth-password').value
      );
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      this.closeAll();
      this.updateNavbar();
      this.showToast('ورود موفقیت‌آمیز بود ✓', 'success');
    } catch (err) {
      errEl.textContent = err.message;
      btn.disabled = false; btn.textContent = 'ورود';
    }
  },

  async handleRegister(e) {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]');
    const errEl = document.getElementById('auth-error');
    btn.disabled = true; btn.textContent = 'در حال ثبت...';
    try {
      const res = await OmidAPI.register({
        full_name: document.getElementById('reg-fullname').value,
        phone: document.getElementById('reg-phone').value,
        email: document.getElementById('reg-email').value,
        username: document.getElementById('reg-username').value,
        password: document.getElementById('reg-password').value,
      });
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      this.closeAll();
      this.updateNavbar();
      this.showToast('ثبت‌نام با موفقیت انجام شد ✓', 'success');
    } catch (err) {
      errEl.textContent = err.message;
      btn.disabled = false; btn.textContent = 'ثبت‌نام';
    }
  },

  // ─── User Panel ──────────────────────────────────────────────────────────────

  async showUserPanel() {
    this.closeAll();
    const user = OmidAPI.getUser();
    const overlay = document.createElement('div');
    overlay.id = 'auth-overlay';
    overlay.className = 'auth-overlay';
    overlay.innerHTML = `
      <div class="auth-modal user-panel">
        <button class="auth-close" onclick="Auth.closeAll()">×</button>
        <div class="up-header">
          <div class="up-avatar">${(user?.full_name || 'U')[0]}</div>
          <div>
            <h3>${user?.full_name}</h3>
            <p>${user?.phone}</p>
            <span class="up-role">${this.getRoleLabel(user?.role)}</span>
          </div>
        </div>
        <div class="up-tabs">
          <button class="up-tab active" onclick="Auth.loadPanelTab('appointments', this)">نوبت‌های من</button>
          <button class="up-tab" onclick="Auth.loadPanelTab('profile', this)">ویرایش پروفایل</button>
        </div>
        <div id="up-content" class="up-content">
          <div class="wiz-loading"><div class="wiz-spinner"></div></div>
        </div>
        <button class="up-logout" onclick="Auth.logout()">خروج از حساب</button>
      </div>
    `;
    overlay.addEventListener('click', (e) => { if (e.target === overlay) this.closeAll(); });
    document.body.appendChild(overlay);
    this.loadPanelTab('appointments');
  },

  async loadPanelTab(tab, btn) {
    if (btn) {
      document.querySelectorAll('.up-tab').forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
    }
    const content = document.getElementById('up-content');
    if (!content) return;

    if (tab === 'appointments') {
      try {
        const res = await OmidAPI.getMyAppointments();
        const apts = res.data || [];
        content.innerHTML = apts.length === 0
          ? `<div class="wiz-empty">هیچ نوبتی ثبت نکرده‌اید</div>`
          : `<div class="up-apt-list">
              ${apts.map(a => `
                <div class="up-apt-card">
                  <div class="uac-date">${a.appointment_date} | ${a.appointment_time}</div>
                  <div class="uac-doc">${a.doctor_name || '—'} | ${a.specialty_name || '—'}</div>
                  <span class="badge badge-${this.getStatusBadge(a.status)}">${this.getStatusText(a.status)}</span>
                </div>
              `).join('')}
            </div>`;
      } catch {
        content.innerHTML = `<div class="wiz-empty">خطا در بارگذاری نوبت‌ها</div>`;
      }
    }

    if (tab === 'profile') {
      const user = OmidAPI.getUser();
      content.innerHTML = `
        <form class="auth-form" onsubmit="Auth.updateProfile(event)">
          <div class="form-group">
            <label>نام کامل</label>
            <input type="text" id="prof-name" value="${user?.full_name || ''}">
          </div>
          <div class="form-group">
            <label>ایمیل</label>
            <input type="email" id="prof-email" value="${user?.email || ''}">
          </div>
          <div id="prof-msg" class="auth-error"></div>
          <button type="submit" class="wbtn wbtn-next">ذخیره تغییرات</button>
        </form>
      `;
    }
  },

  logout() {
    OmidAPI.logout();
    this.closeAll();
    this.updateNavbar();
    this.showToast('از حساب خود خارج شدید', 'info');
  },

  closeAll() {
    document.getElementById('auth-overlay')?.remove();
  },

  showToast(msg, type = 'info') {
    const t = document.createElement('div');
    t.className = `site-toast site-toast-${type}`;
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 3000);
  },

  getRoleLabel(role) {
    return { admin: 'مدیر', doctor: 'پزشک', patient: 'بیمار' }[role] || 'کاربر';
  },
  getStatusBadge(s) {
    return { pending: 'warning', confirmed: 'info', completed: 'success', cancelled: 'danger' }[s] || 'info';
  },
  getStatusText(s) {
    return { pending: 'در انتظار', confirmed: 'تأیید شده', completed: 'انجام شده', cancelled: 'لغو شده' }[s] || s;
  },
};

document.addEventListener('DOMContentLoaded', () => Auth.init());
window.Auth = Auth;
