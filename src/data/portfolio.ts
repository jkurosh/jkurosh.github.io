export const personalInfo = {
  name: 'کورش جلیلیان',
  title: 'توسعه دهنده وب و نرم افزار ',
  bio: 'توسعه‌دهنده نرم‌افزار با تمرکز بر ساخت برنامه‌های وب مدرن، مقیاس‌پذیر و تمیز. علاقه‌مند به حل مسائل فنی، طراحی معماری داده و پیاده‌سازی رابط‌های کاربری کارآمد.',
  email: 'kuroshjalilian@gmail.com',
  github: 'https://github.com/jkurosh',
  linkedin: 'https://www.linkedin.com/in/kourosh-jalilian-129170338/',
  avatar: '/avatar.jpg', 
};

export const skills = [
  { 
    category: 'Frontend', 
    items: ['React.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML / CSS'] 
  },
  { 
    category: 'Backend', 
    items: ['Python', 'Django / FastAPI', 'RESTful API Design', 'PostgreSQL / SQLite' , 'Flask'] 
  },
  { 
    category: 'DevOps', 
    items: ['Git / GitHub', 'Vite', 'Docker', 'Linux / Bash'] 
  }
];

export const projects = [
  {
    title: 'سیستم ردیاب قیمت دیجی‌کالا (Digikala Price Tracker)',
    description: 'خط لوله خودکار استخراج داده (Web Scraping) با Scrapy و توسعه API با جنگو رست برای پایش و ذخیره تاریخچه تغییرات قیمت و مصورسازی روندها.',
    technologies: ['Python', 'Django', 'Django REST Framework', 'Scrapy', 'PostgreSQL', 'JavaScript'],
    github: 'https://github.com/jkurosh/digikala-price-tracking',
    demo: '#'
  },
  {
    title: 'سامانه آموزشی و تشخیصی دامپزشکی (VetLMS)',
    description: 'پلتفرم جامع یادگیری و کیس‌های بالینی تعاملی با معماری ماژولار، سیستم کنترل دسترسی سطوح کاربری (RBAC) و کانتینرسازی با داکر.',
    technologies: ['Python', 'Django', 'PostgreSQL', 'Docker', 'REST API', 'JavaScript'],
    github: 'https://github.com/jkurosh',
    demo: 'https://vetlms-frontend.vercel.app/'
  },
  {
    title: 'بات نوبت‌دهی و آزمون روزانه بله (Bale Bot Platform)',
    description: 'توسعه بات ناهمگام (Asynchronous) پیام‌رسان بله برای اتوماسیون نوبت‌دهی، آزمون‌های روزانه با تقویم جلالی و ذخیره‌سازی داده‌های تعاملی کاربران.',
    technologies: ['Python', 'Balethon API', 'SQLite', 'Khayyam', 'AsyncIO'],
    github: 'https://github.com/jkurosh',
    demo: '#'
  }
];

export const experience = [
  {
    role: 'توسعه‌دهنده نرم‌افزار و وب',
    company: 'پروژه‌های فریلنس و شخصی',
    period: '۱۴۰۱ - تا کنون',
    description: 'طراحی و پیاده‌سازی برنامه‌های کاربردی وب، ساخت APIها و بهینه‌سازی کارایی پروژه‌های نرم‌افزاری.'
  }
];
