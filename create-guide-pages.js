const fs = require('fs');
const path = require('path');

const guidePages = {
  'guide-emergency.html': {
    title: 'راهنمای بخش اورژانس',
    icon: '🚑',
    content: `
      <h2>بخش اورژانس بیمارستان امید</h2>
      <p class="lead">بخش اورژانس بیمارستان امید به صورت ۲۴ ساعته و شبانه‌روزی آماده ارائه خدمات فوری پزشکی می‌باشد.</p>
      
      <div class="info-box">
        <h3>☎️ تماس اورژانس</h3>
        <p style="font-size: 1.5rem; font-weight: 700; color: #dc3545;">۰۲۱-۴۴۴۸۰۱۸۵</p>
        <p>داخلی: ۱۰۰</p>
      </div>

      <h3>خدمات اورژانس</h3>
      <ul class="feature-list">
        <li>پذیرش و تریاژ فوری بیماران</li>
        <li>تیم پزشکی مجرب حاضر در محل</li>
        <li>تجهیزات پیشرفته احیا و مراقبت</li>
        <li>آمبولانس مجهز</li>
        <li>اتاق عمل اورژانس</li>
      </ul>

      <h3>موارد نیازمند مراجعه فوری</h3>
      <div class="alert-grid">
        <div class="alert-item danger">درد قفسه سینه</div>
        <div class="alert-item danger">تنگی نفس شدید</div>
        <div class="alert-item danger">خونریزی شدید</div>
        <div class="alert-item danger">سکته مغزی</div>
        <div class="alert-item warning">تب بالا و تشنج</div>
        <div class="alert-item warning">شکستگی‌های استخوانی</div>
      </div>
    `
  },
  'guide-directions.html': {
    title: 'مسیرهای منتهی به بیمارستان',
    icon: '🗺️',
    content: `
      <h2>راهنمای دسترسی به بیمارستان</h2>
      <p class="lead">بیمارستان امید در منطقه جنت‌آباد مرکزی، خیابان شاهین شمالی واقع شده است.</p>

      <div class="address-box">
        <h3>📍 آدرس کامل</h3>
        <p>تهران، جنت‌آباد مرکزی، خیابان شاهین شمالی، پلاک ۲۵</p>
      </div>

      <h3>🚗 مسیرهای دسترسی</h3>
      
      <div class="route-card">
        <h4>از میدان آزادی</h4>
        <p>بزرگراه آزادی → خروجی جنت‌آباد → خیابان شاهین شمالی</p>
      </div>

      <div class="route-card">
        <h4>از میدان ونک</h4>
        <p>همت غربی → جنت‌آباد مرکزی → شاهین شمالی</p>
      </div>

      <div class="route-card">
        <h4>از اتوبان تهران - کرج</h4>
        <p>خروجی جنت‌آباد → بلوار فردوس → شاهین شمالی</p>
      </div>

      <h3>🚌 حمل و نقل عمومی</h3>
      <ul class="transit-list">
        <li><strong>مترو:</strong> ایستگاه شهید همت (خط ۵) + تاکسی</li>
        <li><strong>اتوبوس:</strong> خطوط ۱۳۲، ۲۴۵، ۳۱۸</li>
        <li><strong>تاکسی:</strong> از میدان جنت‌آباد مرکزی</li>
      </ul>

      <div class="map-placeholder" style="background: #f8f9fa; border-radius: 12px; padding: 3rem; text-align: center; margin: 2rem 0;">
        <p style="color: #6c757d;">🗺️ نقشه تعاملی</p>
        <a href="https://goo.gl/maps/omid-hospital" target="_blank" class="btn btn-primary">مشاهده در Google Maps</a>
      </div>
    `
  },
  'guide-admission.html': {
    title: 'راهنمای پذیرش بیمارستان',
    icon: '📝',
    content: `
      <h2>فرآیند پذیرش بیمار</h2>
      <p class="lead">پذیرش بیماران در طبقه همکف بیمارستان انجام می‌شود.</p>

      <h3>📄 مدارک مورد نیاز</h3>
      <div class="doc-grid">
        <div class="doc-item">
          <div class="doc-icon">🆔</div>
          <h4>کارت ملی</h4>
          <p>اصل کارت ملی بیمار و همراه</p>
        </div>
        <div class="doc-item">
          <div class="doc-icon">🏥</div>
          <h4>دفترچه بیمه</h4>
          <p>بیمه‌های پایه و تکمیلی</p>
        </div>
        <div class="doc-item">
          <div class="doc-icon">📋</div>
          <h4>نامه پزشک</h4>
          <p>نامه یا نسخه پزشک معالج</p>
        </div>
        <div class="doc-item">
          <div class="doc-icon">🩺</div>
          <h4>سوابق پزشکی</h4>
          <p>آزمایشات و مدارک قبلی</p>
        </div>
      </div>

      <h3>🔢 مراحل پذیرش</h3>
      <div class="steps-timeline">
        <div class="step">
          <div class="step-num">۱</div>
          <div class="step-content">
            <h4>مراجعه به پذیرش</h4>
            <p>واحد پذیرش طبقه همکف</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">۲</div>
          <div class="step-content">
            <h4>ارائه مدارک</h4>
            <p>تحویل مدارک به کارشناس پذیرش</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">۳</div>
          <div class="step-content">
            <h4>تکمیل فرم‌ها</h4>
            <p>پر کردن فرم‌های پذیرش</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">۴</div>
          <div class="step-content">
            <h4>پرداخت بیعانه</h4>
            <p>واریز مبلغ بیعانه</p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">۵</div>
          <div class="step-content">
            <h4>اعزام به بخش</h4>
            <p>هدایت به بخش مربوطه</p>
          </div>
        </div>
      </div>

      <div class="info-box">
        <h3>⏰ ساعات پذیرش</h3>
        <p><strong>پذیرش عمومی:</strong> ۲۴ ساعته</p>
        <p><strong>پذیرش بیمه:</strong> ۸ صبح تا ۸ شب</p>
      </div>
    `
  },
  'guide-floors.html': {
    title: 'راهنمای طبقات بیمارستان',
    icon: '🏥',
    content: `
      <h2>راهنمای طبقات و بخش‌ها</h2>
      <p class="lead">مسیریابی آسان برای دسترسی به بخش‌های مختلف بیمارستان</p>

      <div class="floor-list">
        <div class="floor-item">
          <div class="floor-header">
            <div class="floor-number">همکف</div>
            <h3>طبقه همکف</h3>
          </div>
          <ul>
            <li>پذیرش و ترخیص</li>
            <li>بخش اورژانس</li>
            <li>داروخانه</li>
            <li>آزمایشگاه</li>
            <li>رادیولوژی و سونوگرافی</li>
            <li>امور بیماران</li>
          </ul>
        </div>

        <div class="floor-item">
          <div class="floor-header">
            <div class="floor-number">۱</div>
            <h3>طبقه اول</h3>
          </div>
          <ul>
            <li>بخش زنان و زایمان</li>
            <li>اتاق عمل زنان</li>
            <li>NICU (بخش مراقبت نوزادان)</li>
            <li>کلینیک‌های تخصصی</li>
          </ul>
        </div>

        <div class="floor-item">
          <div class="floor-header">
            <div class="floor-number">۲</div>
            <h3>طبقه دوم</h3>
          </div>
          <ul>
            <li>بخش داخلی</li>
            <li>CCU (مراقبت‌های ویژه قلبی)</li>
            <li>ICU (مراقبت‌های ویژه)</li>
            <li>بخش دیالیز</li>
          </ul>
        </div>

        <div class="floor-item">
          <div class="floor-header">
            <div class="floor-number">۳</div>
            <h3>طبقه سوم</h3>
          </div>
          <ul>
            <li>بخش جراحی عمومی</li>
            <li>بخش ارتوپدی</li>
            <li>اتاق‌های عمل جنرال</li>
            <li>ریکاوری</li>
          </ul>
        </div>

        <div class="floor-item">
          <div class="floor-header">
            <div class="floor-number">۴</div>
            <h3>طبقه چهارم</h3>
          </div>
          <ul>
            <li>بخش VIP</li>
            <li>سوئیت‌های ویژه</li>
            <li>بخش مراقبت ویژه</li>
          </ul>
        </div>
      </div>

      <div class="facilities-grid">
        <div class="facility">
          <span class="facility-icon">🛗</span>
          <p>آسانسورهای سریع</p>
        </div>
        <div class="facility">
          <span class="facility-icon">♿</span>
          <p>دسترسی معلولین</p>
        </div>
        <div class="facility">
          <span class="facility-icon">🚻</span>
          <p>سرویس بهداشتی</p>
        </div>
        <div class="facility">
          <span class="facility-icon">☕</span>
          <p>کافی‌شاپ</p>
        </div>
      </div>
    `
  },
  'guide-discharge.html': {
    title: 'راهنمای ترخیص و دریافت مدارک',
    icon: '🚪',
    content: `
      <h2>فرآیند ترخیص بیمار</h2>
      <p class="lead">مراحل ترخیص و دریافت مدارک پزشکی</p>

      <h3>مراحل ترخیص</h3>
      <div class="discharge-steps">
        <div class="discharge-step">
          <span class="step-icon">📋</span>
          <h4>۱. دریافت برگه ترخیص</h4>
          <p>از پزشک معالج یا پرستار بخش</p>
        </div>
        <div class="discharge-step">
          <span class="step-icon">💰</span>
          <h4>۲. تسویه حساب</h4>
          <p>مراجعه به واحد مالی طبقه همکف</p>
        </div>
        <div class="discharge-step">
          <span class="step-icon">💊</span>
          <h4>۳. دریافت نسخه و دارو</h4>
          <p>نسخه‌های پزشکی و داروهای تجویزی</p>
        </div>
        <div class="discharge-step">
          <span class="step-icon">📄</span>
          <h4>۴. دریافت مدارک</h4>
          <p>خلاصه پرونده و توصیه‌های پزشکی</p>
        </div>
      </div>

      <h3>📁 مدارک قابل دریافت</h3>
      <ul class="doc-checklist">
        <li>خلاصه پرونده پزشکی</li>
        <li>نتایج آزمایشات و تصویربرداری</li>
        <li>نسخه‌های دارویی</li>
        <li>برگه ترخیص</li>
        <li>فاکتور و قبوض پرداختی</li>
        <li>گواهی پزشکی (در صورت نیاز)</li>
      </ul>

      <div class="info-box warning">
        <h3>⚠️ نکات مهم</h3>
        <ul>
          <li>حتماً رسید پرداخت را نگهداری کنید</li>
          <li>برای دریافت بیمه تکمیلی به مدارک کامل نیاز دارید</li>
          <li>در صورت نیاز به گواهی حضور در بیمارستان، از واحد امور بیماران درخواست کنید</li>
        </ul>
      </div>

      <div class="contact-box">
        <h3>تماس با واحد ترخیص</h3>
        <p>📞 ۰۲۱-۴۴۴۸۰۱۸۵ داخلی ۲۵۰</p>
        <p>⏰ همه روزه: ۸ صبح تا ۸ شب</p>
      </div>
    `
  },
  'guide-international.html': {
    title: 'بیماران بین‌المللی (IPD)',
    icon: '🌍',
    content: `
      <h2>خدمات بیماران بین‌المللی</h2>
      <p class="lead">بیمارستان امید آماده ارائه خدمات درمانی به بیماران خارجی و توریسم درمانی می‌باشد.</p>

      <h3>🌐 خدمات ویژه IPD</h3>
      <div class="service-grid">
        <div class="service-card">
          <span class="service-icon">🛂</span>
          <h4>پذیرش اختصاصی</h4>
          <p>واحد پذیرش ویژه بیماران خارجی</p>
        </div>
        <div class="service-card">
          <span class="service-icon">🗣️</span>
          <h4>مترجم همراه</h4>
          <p>خدمات ترجمه به زبان‌های مختلف</p>
        </div>
        <div class="service-card">
          <span class="service-icon">🏨</span>
          <h4>سوئیت‌های VIP</h4>
          <p>اتاق‌های مجهز و لوکس</p>
        </div>
        <div class="service-card">
          <span class="service-icon">🚗</span>
          <h4>ترانسفر فرودگاه</h4>
          <p>ایاب و ذهاب رایگان</p>
        </div>
        <div class="service-card">
          <span class="service-icon">📋</span>
          <h4>تسهیلات ویزا</h4>
          <p>همکاری در اخذ ویزای درمانی</p>
        </div>
        <div class="service-card">
          <span class="service-icon">💳</span>
          <h4>پرداخت ارزی</h4>
          <p>امکان پرداخت با ارز خارجی</p>
        </div>
      </div>

      <h3>زبان‌های پشتیبانی شده</h3>
      <div class="lang-badges">
        <span class="lang-badge">🇬🇧 English</span>
        <span class="lang-badge">🇸🇦 العربية</span>
        <span class="lang-badge">🇹🇷 Türkçe</span>
        <span class="lang-badge">🇷🇺 Русский</span>
      </div>

      <div class="contact-box primary">
        <h3>تماس با واحد IPD</h3>
        <p>📞 +98-21-44480185 (Ext: 300)</p>
        <p>📧 international@omid.hospital</p>
        <p>⏰ 24/7 Support Available</p>
      </div>
    `
  },
  'guide-visiting.html': {
    title: 'راهنمای ملاقات بیمارستان',
    icon: '👥',
    content: `
      <h2>قوانین و ساعات ملاقات</h2>
      <p class="lead">برای راحتی بیماران و حفظ آرامش، لطفاً ضوابط ملاقات را رعایت فرمایید.</p>

      <h3>⏰ ساعات ملاقات</h3>
      <div class="visiting-hours">
        <div class="visit-time">
          <div class="time-icon">🌅</div>
          <h4>ملاقات صبح</h4>
          <p class="time">۱۰:۰۰ - ۱۲:۰۰</p>
        </div>
        <div class="visit-time">
          <div class="time-icon">🌆</div>
          <h4>ملاقات عصر</h4>
          <p class="time">۱۶:۰۰ - ۱۸:۰۰</p>
        </div>
        <div class="visit-time">
          <div class="time-icon">🌙</div>
          <h4>ملاقات شب</h4>
          <p class="time">۲۰:۰۰ - ۲۱:۰۰</p>
        </div>
      </div>

      <h3>📋 ضوابط ملاقات</h3>
      <div class="rules-grid">
        <div class="rule-box">
          <span class="rule-icon">👤</span>
          <h4>تعداد ملاقات‌کننده</h4>
          <p>حداکثر ۲ نفر به صورت همزمان</p>
        </div>
        <div class="rule-box">
          <span class="rule-icon">⏱️</span>
          <h4>مدت ملاقات</h4>
          <p>حداکثر ۳۰ دقیقه در هر نوبت</p>
        </div>
        <div class="rule-box">
          <span class="rule-icon">🆔</span>
          <h4>مدرک شناسایی</h4>
          <p>همراه داشتن کارت ملی الزامی</p>
        </div>
        <div class="rule-box">
          <span class="rule-icon">👶</span>
          <h4>سن ملاقات‌کننده</h4>
          <p>کودکان زیر ۱۲ سال ممنوع</p>
        </div>
      </div>

      <h3>🚫 ممنوعیت‌ها</h3>
      <ul class="prohibited-list">
        <li>استعمال دخانیات و سیگار</li>
        <li>گل و گیاهان طبیعی</li>
        <li>عکس و فیلمبرداری</li>
        <li>ایجاد سر و صدا</li>
        <li>استفاده از تلفن همراه در بخش‌های ویژه</li>
        <li>همراه داشتن حیوانات</li>
      </ul>

      <div class="special-note">
        <h3>🏥 نکات ویژه بخش‌های ICU و CCU</h3>
        <p>ملاقات در این بخش‌ها فقط با هماهنگی پرستار مسئول و با رعایت کامل پروتکل‌های بهداشتی مجاز است.</p>
      </div>
    `
  },
  'guide-clinic-schedule.html': {
    title: 'برنامه کلینیک بیمارستان',
    icon: '📅',
    content: `
      <h2>برنامه حضور پزشکان در کلینیک</h2>
      <p class="lead">برای اطلاع از برنامه دقیق حضور پزشکان در کلینیک‌های تخصصی با شماره ۰۲۱-۴۵۸۳۹۵۰۹ تماس بگیرید.</p>

      <h3>کلینیک‌های فعال</h3>
      <div class="clinic-list">
        <div class="clinic-item">
          <div class="clinic-icon">👶</div>
          <h4>کلینیک کودکان</h4>
          <p><strong>روزها:</strong> شنبه تا پنجشنبه</p>
          <p><strong>ساعت:</strong> ۱۴-۱۸</p>
        </div>

        <div class="clinic-item">
          <div class="clinic-icon">🤰</div>
          <h4>کلینیک زنان</h4>
          <p><strong>روزها:</strong> شنبه، دوشنبه، چهارشنبه</p>
          <p><strong>ساعت:</strong> ۱۵-۱۹</p>
        </div>

        <div class="clinic-item">
          <div class="clinic-icon">❤️</div>
          <h4>کلینیک قلب و عروق</h4>
          <p><strong>روزها:</strong> یکشنبه، سه‌شنبه</p>
          <p><strong>ساعت:</strong> ۱۶-۲۰</p>
        </div>

        <div class="clinic-item">
          <div class="clinic-icon">🫁</div>
          <h4>کلینیک ریه</h4>
          <p><strong>روزها:</strong> شنبه، دوشنبه</p>
          <p><strong>ساعت:</strong> ۱۴-۱۷</p>
        </div>

        <div class="clinic-item">
          <div class="clinic-icon">🦴</div>
          <h4>کلینیک ارتوپدی</h4>
          <p><strong>روزها:</strong> یکشنبه، چهارشنبه</p>
          <p><strong>ساعت:</strong> ۱۵-۱۸</p>
        </div>

        <div class="clinic-item">
          <div class="clinic-icon">👁️</div>
          <h4>کلینیک چشم</h4>
          <p><strong>روزها:</strong> دوشنبه، پنجشنبه</p>
          <p><strong>ساعت:</strong> ۱۴-۱۷</p>
        </div>
      </div>

      <div class="booking-box">
        <h3>📞 رزرو نوبت کلینیک</h3>
        <p>برای رزرو نوبت کلینیک‌های تخصصی:</p>
        <div class="booking-options">
          <a href="tel:02145839509" class="btn btn-primary">تماس: ۰۲۱-۴۵۸۳۹۵۰۹</a>
          <a href="/booking.html" class="btn btn-outline">رزرو آنلاین</a>
        </div>
      </div>

      <div class="info-box">
        <h3>ℹ️ نکات مهم</h3>
        <ul>
          <li>لطفاً ۱۵ دقیقه قبل از نوبت حضور داشته باشید</li>
          <li>کارت ملی و دفترچه بیمه همراه داشته باشید</li>
          <li>در صورت عدم حضور، حتماً قبلاً اطلاع دهید</li>
        </ul>
      </div>
    `
  },
  'guide-birth-certificate.html': {
    title: 'راهنمای صدور گواهی ولادت',
    icon: '👶',
    content: `
      <h2>راهنمای صدور شناسنامه نوزاد</h2>
      <p class="lead">مراحل اخذ گواهی تولد و ثبت نام نوزاد متولد شده در بیمارستان امید</p>

      <h3>📋 مدارک مورد نیاز</h3>
      <div class="doc-grid">
        <div class="doc-item">
          <div class="doc-icon">💍</div>
          <h4>سند ازدواج</h4>
          <p>اصل و کپی سند ازدواج والدین</p>
        </div>
        <div class="doc-item">
          <div class="doc-icon">🆔</div>
          <h4>شناسنامه والدین</h4>
          <p>اصل و کپی شناسنامه پدر و مادر</p>
        </div>
        <div class="doc-item">
          <div class="doc-icon">🏥</div>
          <h4>گواهی پزشکی</h4>
          <p>گواهی تولد از پزشک متخصص</p>
        </div>
        <div class="doc-item">
          <div class="doc-icon">📸</div>
          <h4>عکس والدین</h4>
          <p>۲ قطعه عکس ۳×۴ پدر و مادر</p>
        </div>
      </div>

      <h3>مراحل اخذ شناسنامه</h3>
      <div class="birth-steps">
        <div class="birth-step">
          <span class="step-number">۱</span>
          <h4>دریافت گواهی تولد</h4>
          <p>از واحد زایشگاه بیمارستان</p>
        </div>
        <div class="birth-step">
          <span class="step-number">۲</span>
          <h4>مراجعه به ثبت احوال</h4>
          <p>با مدارک کامل به اداره ثبت احوال</p>
        </div>
        <div class="birth-step">
          <span class="step-number">۳</span>
          <h4>تکمیل فرم‌ها</h4>
          <p>پر کردن فرم درخواست شناسنامه</p>
        </div>
        <div class="birth-step">
          <span class="step-number">۴</span>
          <h4>دریافت شناسنامه</h4>
          <p>تحویل شناسنامه نوزاد</p>
        </div>
      </div>

      <div class="info-box warning">
        <h3>⏰ مهلت ثبت نام</h3>
        <p>ثبت نام نوزاد باید حداکثر تا ۱۵ روز پس از تولد انجام شود. در غیر این صورت نیاز به ارائه مدارک تکمیلی خواهد بود.</p>
      </div>

      <div class="contact-box">
        <h3>تماس با بخش زایشگاه</h3>
        <p>📞 ۰۲۱-۴۴۴۸۰۱۸۵ داخلی ۳۰۰</p>
        <p>📍 طبقه اول، بخش زنان و زایمان</p>
      </div>

      <h3>اداره ثبت احوال منطقه</h3>
      <div class="registry-info">
        <p><strong>آدرس:</strong> تهران، جنت‌آباد، اداره ثبت احوال منطقه ۵</p>
        <p><strong>تلفن:</strong> ۰۲۱-۴۴۳۵۲۰۰۰</p>
        <p><strong>ساعت کار:</strong> شنبه تا چهارشنبه ۸-۱۴</p>
      </div>
    `
  },
  'guide-laboratory.html': {
    title: 'آزمایشگاه و پاتولوژی',
    icon: '🔬',
    content: `
      <h2>خدمات آزمایشگاهی بیمارستان امید</h2>
      <p class="lead">آزمایشگاه مجهز با دستگاه‌های پیشرفته و کادر متخصص</p>

      <h3>🧪 خدمات آزمایشگاه</h3>
      <div class="lab-services">
        <div class="lab-service">
          <span class="service-icon">🩸</span>
          <h4>آزمایشات خون</h4>
          <ul>
            <li>آزمایشات بیوشیمی</li>
            <li>شمارش کامل خون</li>
            <li>انعقاد خون</li>
            <li>گروه خونی</li>
          </ul>
        </div>

        <div class="lab-service">
          <span class="service-icon">🧬</span>
          <h4>آزمایشات تخصصی</h4>
          <ul>
            <li>هورمون‌ها</li>
            <li>تست‌های ژنتیک</li>
            <li>آزمایش تومور مارکر</li>
            <li>سرولوژی</li>
          </ul>
        </div>

        <div class="lab-service">
          <span class="service-icon">🔬</span>
          <h4>میکروب‌شناسی</h4>
          <ul>
            <li>کشت و آنتی‌بیوگرام</li>
            <li>تست PCR</li>
            <li>کشت ادرار و خون</li>
          </ul>
        </div>

        <div class="lab-service">
          <span class="service-icon">🧫</span>
          <h4>پاتولوژی</h4>
          <ul>
            <li>بیوپسی</li>
            <li>پاپ اسمیر</li>
            <li>سیتولوژی</li>
          </ul>
        </div>
      </div>

      <h3>⏰ ساعات پذیرش نمونه</h3>
      <div class="schedule-box">
        <p><strong>روزهای عادی:</strong> ۷ صبح تا ۲۰ شب</p>
        <p><strong>پنجشنبه و تعطیلات:</strong> ۷ صبح تا ۱۴</p>
        <p><strong>آزمایشات اورژانس:</strong> ۲۴ ساعته</p>
      </div>

      <h3>📱 دریافت جواب آزمایش</h3>
      <div class="result-options">
        <div class="result-option">
          <span class="option-icon">🌐</span>
          <h4>آنلاین</h4>
          <p>از طریق سایت با کد پیگیری</p>
          <a href="/pages/online-results.html" class="btn btn-sm btn-primary">دریافت آنلاین</a>
        </div>
        <div class="result-option">
          <span class="option-icon">📞</span>
          <h4>تلفنی</h4>
          <p>تماس با آزمایشگاه</p>
          <p><strong>۰۲۱-۴۴۴۸۰۱۸۵ داخلی ۲۰۰</strong></p>
        </div>
        <div class="result-option">
          <span class="option-icon">🏥</span>
          <h4>حضوری</h4>
          <p>مراجعه به آزمایشگاه</p>
          <p>طبقه همکف</p>
        </div>
      </div>

      <div class="info-box">
        <h3>📋 نکات مهم</h3>
        <ul>
          <li>برای آزمایشات ناشتا، ۸-۱۲ ساعت از آخرین وعده غذایی فاصله داشته باشید</li>
          <li>کد پیگیری و رسید را نگهداری کنید</li>
          <li>زمان آماده شدن جواب بسته به نوع آزمایش متفاوت است</li>
          <li>برای آزمایشات تخصصی ممکن است نیاز به هماهنگی قبلی باشد</li>
        </ul>
      </div>
    `
  },
  'guide-home-care.html': {
    title: 'درمان با آرامش / مراقبت در منزل',
    icon: '🏠',
    content: `
      <h2>خدمات مراقبت بیمار در منزل</h2>
      <p class="lead">پرستاری و مراقبت حرفه‌ای در منزل توسط کادر مجرب بیمارستان امید</p>

      <h3>🏠 خدمات مراقبت منزل</h3>
      <div class="homecare-services">
        <div class="homecare-item">
          <span class="service-icon">👩‍⚕️</span>
          <h4>پرستاری در منزل</h4>
          <ul>
            <li>پرستار بالینی ۲۴ ساعته</li>
            <li>تزریقات و سرم‌تراپی</li>
            <li>مراقبت از بیماران بستری</li>
            <li>مراقبت پس از جراحی</li>
          </ul>
        </div>

        <div class="homecare-item">
          <span class="service-icon">🩺</span>
          <h4>خدمات پزشکی</h4>
          <ul>
            <li>ویزیت پزشک در منزل</li>
            <li>تعویض پانسمان</li>
            <li>خدمات فیزیوتراپی</li>
            <li>گفتاردرمانی و کاردرمانی</li>
          </ul>
        </div>

        <div class="homecare-item">
          <span class="service-icon">🧓</span>
          <h4>مراقبت سالمندان</h4>
          <ul>
            <li>مراقبت‌های روزانه</li>
            <li>همراهی و پشتیبانی</li>
            <li>کمک به تحرک</li>
            <li>تغذیه و دارودرمانی</li>
          </ul>
        </div>

        <div class="homecare-item">
          <span class="service-icon">🔬</span>
          <h4>آزمایشات در منزل</h4>
          <ul>
            <li>نمونه‌گیری خون</li>
            <li>آزمایشات تشخیصی</li>
            <li>ECG در منزل</li>
          </ul>
        </div>
      </div>

      <h3>💰 تعرفه خدمات</h3>
      <div class="pricing-info">
        <p>تعرفه خدمات بسته به نوع خدمت، مدت زمان و تعداد ساعات متغیر است.</p>
        <p>برای دریافت اطلاعات دقیق با واحد مراقبت منزل تماس بگیرید.</p>
      </div>

      <h3>📞 درخواست خدمات</h3>
      <div class="request-box">
        <div class="request-method">
          <h4>تماس تلفنی</h4>
          <p class="phone-number">۰۲۱-۴۴۴۸۰۱۸۵ داخلی ۴۰۰</p>
          <p>پاسخگویی: شنبه تا پنجشنبه ۸-۲۰</p>
        </div>
        <div class="request-method">
          <h4>درخواست آنلاین</h4>
          <a href="/pages/contact.html" class="btn btn-primary">فرم درخواست</a>
        </div>
      </div>

      <div class="info-box success">
        <h3>✅ مزایای خدمات منزل</h3>
        <ul>
          <li>آرامش و راحتی بیشتر در محیط خانه</li>
          <li>کاهش هزینه‌های بستری</li>
          <li>کاهش خطر عفونت‌های بیمارستانی</li>
          <li>توجه اختصاصی به بیمار</li>
          <li>کیفیت بهتر زندگی برای بیمار و خانواده</li>
        </ul>
      </div>

      <div class="coverage-box">
        <h3>🗺️ پوشش جغرافیایی</h3>
        <p>خدمات مراقبت در منزل در تمامی مناطق تهران و حومه ارائه می‌شود.</p>
      </div>
    `
  }
};

// ساخت فایل‌ها
const template = (data) => `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${data.title} | بیمارستان امید</title>
<link rel="icon" href="/assets/logo-no-bg.png">
<link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/css/theme.css">
<link rel="stylesheet" href="/css/guide-pages.css">
</head>
<body>

<header class="header">
  <div class="header-inner">
    <a href="/" class="logo">
      <img src="/assets/logo-main-original.png" alt="لوگو بیمارستان امید" style="height: 60px; width: auto;">
    </a>
    <nav class="nav">
      <a href="/">خانه</a>
      <a href="/pages/patient-guide.html">راهنمای مراجعین</a>
      <a href="/booking.html" class="btn btn-primary btn-sm">رزرو نوبت</a>
    </nav>
  </div>
</header>

<div class="page-header">
  <div class="container">
    <div class="breadcrumb">
      <a href="/">خانه</a>
      <span>/</span>
      <a href="/pages/patient-guide.html">راهنمای مراجعین</a>
      <span>/</span>
      <span>${data.title}</span>
    </div>
    <div class="page-header-content">
      <div class="page-icon">${data.icon}</div>
      <h1>${data.title}</h1>
    </div>
  </div>
</div>

<main class="page-content">
  <div class="container">
    <div class="content-wrapper">
      ${data.content}
    </div>
    
    <div class="back-to-guide">
      <a href="/pages/patient-guide.html" class="btn btn-outline">← بازگشت به راهنمای مراجعین</a>
    </div>
  </div>
</main>

<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-col">
        <h4>بیمارستان امید</h4>
        <p>📍 تهران، جنت‌آباد مرکزی</p>
        <p>📞 ۰۲۱-۴۴۴۸۰۱۸۵</p>
      </div>
      <div class="footer-col">
        <h4>دسترسی سریع</h4>
        <a href="/booking.html">رزرو نوبت</a>
        <a href="/pages/patient-guide.html">راهنمای مراجعین</a>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; ۱۴۰۴ بیمارستان امید</p>
    </div>
  </div>
</footer>

<script src="/js/site-shell.js"></script>
</body>
</html>`;

let created = 0;
for (const [filename, data] of Object.entries(guidePages)) {
  fs.writeFileSync(
    path.join(__dirname, 'pages', filename),
    template(data),
    'utf8'
  );
  created++;
}

console.log(`✅ ${created} صفحه راهنما ایجاد شد`);
