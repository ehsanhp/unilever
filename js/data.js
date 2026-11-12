// داده‌های اولیه محصولات دیلم یونیلیور
// محصولات از عکس‌های قفسه استخراج شده‌اند

const DEFAULT_CATEGORIES = [
  { id: "perfume", name: "عطر", icon: "🌸" },
  { id: "spray", name: "اسپری", icon: "💨" },
  { id: "toothpaste", name: "خمیر دندان", icon: "🦷" },
  { id: "toothbrush", name: "مسواک برقی و مسواک", icon: "🪥" },
  { id: "deodorant", name: "مام", icon: "🛡️" },
  { id: "facewash", name: "ژل شستشو صورت", icon: "✨" },
  { id: "shampoo", name: "شامپو", icon: "🧴" },
  { id: "soap", name: "صابون", icon: "🧼" },
  { id: "moisturizer", name: "آبرسان", icon: "💧" }
];

const DEFAULT_PRODUCTS = [
  // از قفسه اول
  {
    id: "p1",
    name: "Libre",
    brand: "Jessica Twain",
    category: "perfume",
    description: "عطر زنانه لوکس با رایحه گل و وانیل. الهام‌گرفته از عطر معروف لیبره.",
    image: "images/1000253459.jpg",
    featured: true
  },
  {
    id: "p2",
    name: "Alien",
    brand: "Jessica Twain",
    category: "perfume",
    description: "عطر زنانه مرموز و ماندگار با رایحه شرقی و گلی.",
    image: "images/1000253459.jpg",
    featured: true
  },
  {
    id: "p3",
    name: "Scandale",
    brand: "Jessica Twain",
    category: "perfume",
    description: "عطر زنانه جذاب و جسورانه با رایحه عسل و شکلات.",
    image: "images/1000253459.jpg",
    featured: true
  },
  {
    id: "p4",
    name: "Invictus Victory",
    brand: "Jessica Twain",
    category: "perfume",
    description: "عطر مردانه قدرتمند و ورزشی با رایحه تازه و چوبی.",
    image: "images/1000253459.jpg",
    featured: true
  },
  {
    id: "p5",
    name: "Invictus Elixir",
    brand: "Jessica Twain",
    category: "perfume",
    description: "نسخه غلیظ و لوکس سری اینویکتوس با ماندگاری بالا.",
    image: "images/1000253459.jpg",
    featured: false
  },
  {
    id: "p6",
    name: "Invictus Legend",
    brand: "Jessica Twain",
    category: "perfume",
    description: "عطر مردانه افسانه‌ای با رایحه دریایی و چوبی.",
    image: "images/1000253459.jpg",
    featured: false
  },
  {
    id: "p7",
    name: "Invictus Intense",
    brand: "Jessica Twain",
    category: "perfume",
    description: "نسخه اینتنس سری اینویکتوس برای آقایان.",
    image: "images/1000253459.jpg",
    featured: false
  },
  {
    id: "p8",
    name: "Bombshell Secret",
    brand: "Jessica Twain",
    category: "perfume",
    description: "عطر زنانه شیرین و میوه‌ای الهام‌گرفته از بمب‌شل.",
    image: "images/1000253459.jpg",
    featured: true
  },
  {
    id: "p9",
    name: "Tease Cream",
    brand: "Jessica Twain",
    category: "perfume",
    description: "عطر کرمی و ملایم با رایحه وانیل و گل.",
    image: "images/1000253459.jpg",
    featured: false
  },
  {
    id: "p10",
    name: "Sundrench",
    brand: "Jessica Twain",
    category: "perfume",
    description: "عطر تابستانی تازه با رایحه میوه‌ای و آفتابی.",
    image: "images/1000253459.jpg",
    featured: false
  },
  {
    id: "p11",
    name: "Passion",
    brand: "Jessica Twain",
    category: "perfume",
    description: "عطر زنانه پرشور با رایحه گل‌های گرمسیری.",
    image: "images/1000253459.jpg",
    featured: false
  },
  // از قفسه دوم
  {
    id: "p12",
    name: "Ephorea Intense Men",
    brand: "Jessica Twain",
    category: "perfume",
    description: "عطر مردانه اینتنس با رایحه چوبی و شرقی.",
    image: "images/1000253458.jpg",
    featured: false
  },
  {
    id: "p13",
    name: "Ephorea",
    brand: "Jessica Twain",
    category: "perfume",
    description: "عطر زنانه صورتی و شیرین با ماندگاری خوب.",
    image: "images/1000253458.jpg",
    featured: true
  },
  {
    id: "p14",
    name: "Versath Crystal Noir",
    brand: "Jessica Twain",
    category: "perfume",
    description: "عطر تیره و لوکس الهام‌گرفته از کریستال نویر.",
    image: "images/1000253458.jpg",
    featured: false
  },
  {
    id: "p15",
    name: "Versath Crystal",
    brand: "Jessica Twain",
    category: "perfume",
    description: "عطر کریستالی شفاف و گلی برای بانوان.",
    image: "images/1000253458.jpg",
    featured: false
  },
  {
    id: "p16",
    name: "Blue de Chanal",
    brand: "Jessica Twain",
    category: "perfume",
    description: "عطر مردانه کلاسیک با رایحه چوبی و مرکباتی.",
    image: "images/1000253458.jpg",
    featured: true
  },
  {
    id: "p17",
    name: "Bvlgari Aqua",
    brand: "Jessica Twain",
    category: "perfume",
    description: "عطر مردانه دریایی و تازه الهام‌گرفته از بولگاری آکوا.",
    image: "images/1000253458.jpg",
    featured: false
  },
  {
    id: "p18",
    name: "Narkis Powdered",
    brand: "Jessica Twain",
    category: "perfume",
    description: "عطر پودری ملایم و زنانه.",
    image: "images/1000253458.jpg",
    featured: false
  },
  {
    id: "p19",
    name: "Ombre Leather",
    brand: "Jessica Twain",
    category: "perfume",
    description: "عطر چرمی گرم و لوکس برای آقایان و بانوان.",
    image: "images/1000253458.jpg",
    featured: true
  },
  {
    id: "p20",
    name: "Dior Homme Intense",
    brand: "Jessica Twain",
    category: "perfume",
    description: "عطر مردانه اینتنس با رایحه عنبر و چوب.",
    image: "images/1000253458.jpg",
    featured: false
  },
  // از قفسه سوم
  {
    id: "p21",
    name: "Angel Share",
    brand: "Jessica Twain",
    category: "perfume",
    description: "عطر گرم و شیرین با رایحه ویسکی و وانیل.",
    image: "images/1000253457.jpg",
    featured: true
  },
  {
    id: "p22",
    name: "Lauro Gorge",
    brand: "Jessica Twain",
    category: "perfume",
    description: "عطر خاص با رایحه چوبی و سبز.",
    image: "images/1000253457.jpg",
    featured: false
  },
  {
    id: "p23",
    name: "Seven",
    brand: "Jessica Twain",
    category: "perfume",
    description: "عطر مردانه مدرن و جذاب.",
    image: "images/1000253457.jpg",
    featured: false
  },
  {
    id: "p24",
    name: "Hayaati Lady",
    brand: "Jessica Twain",
    category: "perfume",
    description: "عطر زنانه عربی لوکس با رایحه شرقی.",
    image: "images/1000253457.jpg",
    featured: true
  },
  {
    id: "p25",
    name: "Eskondeil By Night",
    brand: "Jessica Twain",
    category: "perfume",
    description: "نسخه شبانه اسکاندال با رایحه عمیق‌تر.",
    image: "images/1000253457.jpg",
    featured: false
  },
  {
    id: "p26",
    name: "Casomorati Mefisto",
    brand: "Jessica Twain",
    category: "perfume",
    description: "عطر مردانه کلاسیک ایتالیایی با رایحه مرکبات و چوب.",
    image: "images/1000253457.jpg",
    featured: false
  },
  {
    id: "p27",
    name: "Cusomo",
    brand: "Jessica Twain",
    category: "perfume",
    description: "عطر طلایی لوکس با رایحه گرم.",
    image: "images/1000253457.jpg",
    featured: false
  },
  {
    id: "p28",
    name: "May Away",
    brand: "Jessica Twain",
    category: "perfume",
    description: "عطر زنانه گلی و مدرن.",
    image: "images/1000253457.jpg",
    featured: false
  },
  {
    id: "p29",
    name: "Midnight Rose",
    brand: "Jessica Twain",
    category: "perfume",
    description: "عطر رز نیمه‌شب با رایحه رمانتیک.",
    image: "images/1000253457.jpg",
    featured: true
  },
  {
    id: "p30",
    name: "Zeelinsky Roze",
    brand: "Jessica Twain",
    category: "perfume",
    description: "عطر رزی خاص با ماندگاری عالی.",
    image: "images/1000253457.jpg",
    featured: false
  },
  {
    id: "p31",
    name: "Suegi",
    brand: "Jessica Twain",
    category: "perfume",
    description: "عطر مردانه تاریک و جذاب.",
    image: "images/1000253457.jpg",
    featured: false
  }
];

const DEFAULT_SHOP_INFO = {
  name: "دیلم یونیلیور",
  about: "فروشگاه دیلم یونیلیور در بندر دیلم، ارائه‌دهنده بهترین محصولات بهداشتی، مراقبتی و عطرهای لوکس با کیفیت بالا است. ما با تمرکز بر رضایت مشتریان، مجموعه‌ای متنوع از عطرهای الهام‌گرفته از برندهای معتبر جهانی، محصولات مراقبت پوست و مو و لوازم بهداشتی روزمره را با قیمت مناسب در اختیار شما قرار می‌دهیم. هدف ما ایجاد تجربه‌ای لوکس و قابل اعتماد برای خانواده‌های بندر دیلم و اطراف است.",
  address: "بندر دیلم، بلوار پاسداران",
  phone: "09171789950",
  whatsapp: "989171789950",
  instagram: ""
};
