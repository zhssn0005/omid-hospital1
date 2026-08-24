const fs = require('fs');
const path = require('path');

const pages = {
  'about.html': {
    title: 'درباره ما',
    hero: 'linear-gradient(135deg, var(--teal) 0%, var(--green) 100%)',
    content: `<section class="content-section">
        <h2>بیمارستان تخصصی و فوق‌تخصصی امید</h2>
        <p class="lead">بیمارستان امید در پاییز ۱۳۹۵ با هدف ارائه خدمات درمانی با کیفیت بالا در غرب تهران افتتاح شد.</p>
        <div class="stats-row">
          <div class="stat-box"><span class="num">۱۱۵</span><span class="label">تخت فعال</span></div>
          <div class="stat-box"><span class="num">۱۹۹</span><span class="label">پزشک</span></div>
          <div class="stat-box"><span class="num">۳۲</span><span class="label">تخصص</span></div>
        </div>
      </section>`
  },
  'visitor-guide.html': {
    title: 'راهنمای ملاقات',
    hero: 'linear-gradient(135deg, var(--purple) 0%, var(--pink) 100%)',
    content: `<section class="content-section"><h2>⏰ ساعات ملاقات</h2><div class="time-table"><div class="time-row"><span>صبح:</span><strong>۱۰:۰۰ تا ۱۲:۰۰</strong></div></div></section>`
  },
  'floor-guide.html': {
    title: 'راهنمای طبقات',
    hero: 'linear-gradient(135deg, var(--orange) 0%, var(--gold) 100%)',
    content: `<section class="content-section"><h2>🏥 راهنمای طبقات</h2><div class="floor-grid"><div class="floor-card"><h3>طبقه همکف</h3><p>پذیرش، اورژانس</p></div></div></section>`
  },
  'employee-dress.html': {
    title: 'لباس فرم کارکنان',
    hero: 'linear-gradient(135deg, var(--primary) 0%, var(--teal) 100%)',
    content: `<section class="content-section"><h2>👔 راهنمای لباس فرم</h2></section>`
  },
  'patient-affairs.html': {
    title: 'امور بیماران',
    hero: 'linear-gradient(135deg, var(--green) 0%, var(--teal) 100%)',
    content: `<section class="content-section"><h2>📞 واحد امور بیماران</h2><p>تلفن: ۰۲۱-۴۴۴۸۰۱۸۵ داخلی ۲۰۰</p></section>`
  },
  'patient-admission.html': {
    title: 'پذیرش بیمار',
    hero: 'linear-gradient(135deg, var(--pink) 0%, var(--purple) 100%)',
    content: `<section class="content-section"><h2>🏥 فرآیند پذیرش</h2></section>`
  },
  'clinic-calendar.html': {
    title: 'تقویم کلینیک',
    hero: 'linear-gradient(135deg, var(--gold) 0%, var(--orange) 100%)',
    content: `<section class="content-section"><h2>📅 برنامه کلینیک‌ها</h2></section>`
  }
};

for (const [filename, data] of Object.entries(pages)) {
  const html = `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${data.title} | بیمارستان امید</title>
<link rel="icon" href="/assets/logo-no-bg.png">
<link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/css/theme.css">
</head>
<body>
<svg class="icon-sprite" aria-hidden="true"><symbol id="icon-home" viewBox="0 0 24 24"><path d="m3 11 9-7 9 7v9H3zM9 20v-5h6v5"/></symbol></svg>
<header class="header"><div class="header-inner"><a href="/" class="logo"><div class="logo-icon">+</div><div><div class="logo-text">بیمارستان <span>امید</span></div></div></a><nav class="nav"><a href="/">خانه</a><a href="/pages/doctors-list.html">پزشکان</a><a href="/booking.html" class="btn btn-primary btn-sm">رزرو نوبت</a></nav></div></header>
<main class="page-main"><div class="page-hero" style="background:${data.hero}"><div class="container"><div class="breadcrumb"><a href="/"><svg class="ui-icon"><use href="#icon-home"></use></svg> خانه</a><span>/</span><span>${data.title}</span></div><h1 class="page-title">${data.title}</h1></div></div><div class="container page-content">${data.content}</div></main>
<footer class="footer"><div class="container"><div class="footer-bottom"><p>&copy; ۱۴۰۴ بیمارستان امید</p></div></div></footer>
<script src="/js/site-shell.js"></script>
</body>
</html>`;
  
  fs.writeFileSync(path.join(__dirname, 'pages', filename), html, 'utf8');
}

console.log('✅ ' + Object.keys(pages).length + ' صفحه ایجاد شد');
