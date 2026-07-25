# 🏥 بیمارستان تخصصی و فوق‌تخصصی امید

## 📋 خلاصه پروژه

سایت جامع بیمارستان امید با تمام امکانات مدرن، طراحی شده با الهام از بهترین سایت‌های بیمارستانی ایران و جهان.

### ویژگی‌های کلیدی
- ✅ رزرو نوبت آنلاین (4 مرحله‌ای)
- ✅ نتایج آزمایش و تصویربرداری آنلاین
- ✅ تله‌مدیسین (ویدیو کال + چت + تلفنی)
- ✅ پروفایل کامل 199 پزشک
- ✅ بخش بین‌الملل IPD
- ✅ گالری ویدیوهای آموزشی
- ✅ سیستم اخبار و رویدادها
- ✅ پنل ادمین حرفه‌ای
- ✅ Dark Mode مدرن
- ✅ Fully Responsive
- ✅ SEO Optimized

## 📁 ساختار پروژه

```
omid.hospital/
├── index.html                 # صفحه اصلی (طراحی مجدد)
├── booking.html              # رزرو نوبت
├── admin/                    # پنل مدیریت
│   ├── index.html
│   ├── style.css
│   └── app.js
├── pages/                    # صفحات جدید
│   ├── online-results.html   # نتایج آنلاین
│   ├── telemedicine.html     # تله‌مدیسین
│   ├── doctor-profile.html   # پروفایل پزشک
│   ├── news-events.html      # اخبار و رویدادها
│   ├── video-gallery.html    # گالری ویدیو
│   └── departments/          # صفحات بخش‌ها
│       ├── nicu.html
│       ├── royal.html
│       ├── ipd.html
│       └── ...
├── js/
│   ├── api.js               # API client
│   ├── booking.js           # منطق رزرو
│   └── site-api-bridge.js   # اتصال سایت به API
├── assets/                   # تصاویر و فایل‌ها
├── server/                   # Backend
│   ├── server.js
│   ├── routes/
│   ├── controllers/
│   └── scripts/
├── data/                     # داده‌های استخراج شده
├── doctors-data.js          # اطلاعات پزشکان
├── hospitals-data.js        # اطلاعات بخش‌ها
├── sitemap.xml              # نقشه سایت
├── robots.txt               # دستورات کرالر
└── manifest.json            # PWA Manifest

📄 مستندات:
├── COMPETITOR_ANALYSIS.md    # تحلیل رقبا
├── IMPLEMENTATION_PLAN.md    # نقشه راه
├── MISSING_CONTENT.csv       # محتوای ناقص
└── DATABASE_SCHEMA.md        # ساختار دیتابیس
```

## 🚀 راه‌اندازی

### نصب و اجرا
```bash
# 1. کلون پروژه
git clone https://github.com/hssn3/omid-hospital.git
cd omid-hospital

# 2. نصب dependencies
cd server
npm install

# 3. راه‌اندازی database
node scripts/seed.js

# 4. اجرای سرور
npm start

# 5. باز کردن در مرورگر
# http://localhost:3000
```

### تست محلی
```bash
# سرور development
npm run dev

# لینتینگ
npm run lint

# تست
npm test
```

## 🎨 طراحی

### Color Palette
```css
--c1: #070E1A  /* Dark Background */
--c5: #0284C7  /* Primary Blue */
--c6: #06B6D4  /* Cyan */
--c7: #22D3EE  /* Light Cyan */
--gold: #D4A843 /* Gold Accent */
```

### Typography
```css
font-family: 'Vazirmatn', system-ui, sans-serif;
```

### Breakpoints
```css
Mobile: < 850px
Tablet: 850px - 1100px
Desktop: > 1100px
```

## 📊 آمار

- **تخت فعال:** 115
- **پزشکان:** 199
- **تخصص‌ها:** 32
- **بخش‌های درمانی:** 19
- **سال تأسیس:** 1395

## 🔒 امنیت

- JWT Authentication
- Password Hashing (bcrypt)
- SQL Injection Prevention
- XSS Protection
- CORS Configuration
- Rate Limiting

## 🌐 SEO

- Semantic HTML5
- Meta Tags کامل
- Structured Data (Schema.org)
- Open Graph
- Twitter Cards
- Sitemap.xml
- Robots.txt
- Fast Loading (<2s)
- Mobile-First

## 📱 PWA

- Service Worker
- Offline Support
- Install Prompt
- Push Notifications
- App-like Experience

## 🤝 مشارکت

برای گزارش باگ یا پیشنهاد: [GitHub Issues](https://github.com/hssn3/omid-hospital/issues)

## 📞 تماس

- **تلفن:** 021-44480185
- **نوبت‌دهی:** 021-45839509
- **ایمیل:** info@omid.hospital
- **آدرس:** تهران، جنت‌آباد مرکزی، خیابان شاهین شمالی

## 📄 لایسنس

© 2024 بیمارستان تخصصی و فوق‌تخصصی امید - تمامی حقوق محفوظ است

---

**نسخه:** 2.0.0  
**آخرین بروزرسانی:** 25 تیر 1404  
**وضعیت:** در حال توسعه 🚧
