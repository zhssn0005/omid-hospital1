/* Shared Omid Hospital header/footer for all public pages. */
(function () {
  'use strict';

  var logoUrl = '/assets/Logo-scaled-e1754348924179.png';

  function headerMarkup() {
    return '<header class="header site-header" id="site-header">' +
      '<div class="site-header-inner">' +
        '<a class="site-brand" href="/" aria-label="صفحه اصلی بیمارستان امید">' +
          '<img class="site-brand-image" src="' + logoUrl + '" alt="لوگوی بیمارستان امید" width="112" height="79">' +
          '<span class="site-brand-copy"><strong>بیمارستان امید</strong><small>تخصصی و فوق‌تخصصی</small></span>' +
        '</a>' +
        '<nav class="site-nav" aria-label="منوی اصلی">' +
          '<a href="/">خانه</a>' +
          '<a href="/pages/doctors-list.html">پزشکان</a>' +
          '<a href="/booking.html">رزرو نوبت</a>' +
          '<a href="/pages/departments/nicu.html">بخش‌های درمانی</a>' +
          '<a href="/pages/magazine.html">مجله سلامت</a>' +
          '<a href="/about.html">درباره ما</a>' +
          '<a href="/#contact">تماس با ما</a>' +
        '</nav>' +
        '<div class="site-header-actions">' +
          '<a href="/booking.html" class="btn btn-primary site-booking-link">رزرو نوبت</a>' +
          '<button class="site-menu-toggle" type="button" aria-label="باز کردن منو" aria-expanded="false"><svg class="ui-icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg></button>' +
        '</div>' +
      '</div>' +
    '</header>';
  }

  function footerMarkup() {
    return '<footer class="footer site-footer">' +
      '<div class="site-footer-grid">' +
        '<div class="site-footer-brand">' +
          '<a class="site-footer-logo" href="/" aria-label="بیمارستان امید">' +
            '<img src="' + logoUrl + '" alt="لوگوی بیمارستان امید" width="112" height="79">' +
          '</a>' +
          '<p>بیمارستان تخصصی و فوق‌تخصصی امید تهران<br>همراه شما برای درمانی ایمن و شایسته</p>' +
        '</div>' +
        '<div><h4>دسترسی سریع</h4><a href="/booking.html">رزرو نوبت آنلاین</a><a href="/pages/doctors-list.html">پزشکان</a><a href="/pages/virtual-tour.html">تور مجازی</a><a href="/pages/magazine.html">مجله سلامت</a></div>' +
        '<div><h4>راهنمای مراجعین</h4><a href="/pages/online-results.html">نتایج آزمایش و تصویربرداری</a><a href="/pages/departments/nicu.html">بخش‌های درمانی</a><a href="/about.html#memorial">یادبود پزشکان</a><a href="/#faq">سوالات متداول</a></div>' +
        '<div><h4>ارتباط با ما</h4><a href="tel:02144480185">۰۲۱-۴۴۴۸۰۱۸۵</a><a href="mailto:info@omid-hospital.ir">info@omid-hospital.ir</a><span>تهران، جنت‌آباد مرکزی</span></div>' +
      '</div>' +
      '<div class="site-footer-bottom">© ۱۴۰۴ بیمارستان تخصصی و فوق‌تخصصی امید تهران — کلیه حقوق محفوظ است.</div>' +
    '</footer>';
  }

  function enhanceExistingShell() {
    var existingHeader = document.querySelector('header#header');
    if (existingHeader) {
      existingHeader.classList.add('site-header');
      var logo = existingHeader.querySelector('.logo');
      if (logo && !logo.querySelector('.site-brand-image')) {
        logo.innerHTML = '<img class="site-brand-image" src="' + logoUrl + '" alt="لوگوی بیمارستان امید" width="112" height="79"><span class="site-brand-copy"><strong>بیمارستان امید</strong><small>تخصصی و فوق‌تخصصی</small></span>';
        logo.classList.add('site-brand');
      }
      var nav = existingHeader.querySelector('.nav');
      if (nav && !nav.querySelector('a[href="/about.html"]')) {
        var about = document.createElement('a');
        about.href = '/about.html';
        about.textContent = 'درباره ما';
        nav.appendChild(about);
      }
    } else if (!document.querySelector('.site-header')) {
      document.body.insertAdjacentHTML('afterbegin', headerMarkup());
    }

    var footer = document.querySelector('footer.footer');
    if (footer) {
      footer.classList.add('site-footer');
      var brand = footer.querySelector('.brand-logo');
      if (brand && !brand.querySelector('.site-footer-logo')) {
        brand.innerHTML = '<img class="site-footer-logo" src="' + logoUrl + '" alt="لوگوی بیمارستان امید" width="112" height="79"><span>بیمارستان امید</span>';
      }
      if (!footer.querySelector('a[href="/about.html#memorial"]')) {
        var memorial = document.createElement('a');
        memorial.href = '/about.html#memorial';
        memorial.textContent = 'یادبود پزشکان';
        var guide = Array.prototype.find.call(footer.querySelectorAll('div'), function (el) { return el.querySelector('h4') && el.querySelector('h4').textContent.indexOf('راهنما') !== -1; });
        if (guide) guide.appendChild(memorial);
      }
    } else if (!document.querySelector('.site-footer')) {
      document.body.insertAdjacentHTML('beforeend', footerMarkup());
    }
  }

  function wireMenu() {
    var header = document.querySelector('.site-header');
    if (!header) return;
    var toggle = header.querySelector('.site-menu-toggle, #menuToggle');
    var nav = header.querySelector('.site-nav, #nav');
    if (!toggle || !nav || toggle.dataset.shellWired) return;
    toggle.dataset.shellWired = '1';
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); });
    });
  }

  function init() {
    if (!document.body || document.body.classList.contains('admin-page')) return;
    enhanceExistingShell();
    wireMenu();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
