// اپلیکیشن اصلی سایت دیلم یونیلیور

const STORAGE_KEYS = {
  products: "dilem_products",
  categories: "dilem_categories",
  shopInfo: "dilem_shop_info"
};

// بارگذاری داده‌ها (اولویت با localStorage)
function loadProducts() {
  const stored = localStorage.getItem(STORAGE_KEYS.products);
  return stored ? JSON.parse(stored) : DEFAULT_PRODUCTS;
}

function loadCategories() {
  const stored = localStorage.getItem(STORAGE_KEYS.categories);
  return stored ? JSON.parse(stored) : DEFAULT_CATEGORIES;
}

function loadShopInfo() {
  const stored = localStorage.getItem(STORAGE_KEYS.shopInfo);
  return stored ? JSON.parse(stored) : DEFAULT_SHOP_INFO;
}

let products = loadProducts();
let categories = loadCategories();
let shopInfo = loadShopInfo();

// ذخیره
function saveProducts() {
  localStorage.setItem(STORAGE_KEYS.products, JSON.stringify(products));
}

function saveCategories() {
  localStorage.setItem(STORAGE_KEYS.categories, JSON.stringify(categories));
}

function saveShopInfo() {
  localStorage.setItem(STORAGE_KEYS.shopInfo, JSON.stringify(shopInfo));
}

// رندر هدر و فوتر
function renderHeader() {
  const header = document.getElementById("header");
  if (!header) return;
  
  header.innerHTML = `
    <div class="header-inner">
      <a href="index.html" class="logo">دیلم <span>یونیلیور</span></a>
      <button class="menu-toggle" id="menuToggle" aria-label="منو">☰</button>
      <nav class="nav" id="mainNav">
        <a href="index.html" class="${isActive('index')}">خانه</a>
        <a href="products.html" class="${isActive('products')}">محصولات</a>
        <a href="about.html" class="${isActive('about')}">درباره ما</a>
        <a href="contact.html" class="${isActive('contact')}">تماس</a>
      </nav>
    </div>
  `;
  
  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("mainNav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => nav.classList.toggle("open"));
  }
}

function isActive(page) {
  const path = window.location.pathname;
  if (page === "index" && (path.endsWith("/") || path.endsWith("index.html"))) return "active";
  if (path.includes(page)) return "active";
  return "";
}

function renderFooter() {
  const footer = document.getElementById("footer");
  if (!footer) return;
  
  footer.innerHTML = `
    <div class="footer-inner">
      <div>
        <h4>${shopInfo.name}</h4>
        <p>${shopInfo.about.substring(0, 120)}...</p>
      </div>
      <div>
        <h4>دسترسی سریع</h4>
        <p><a href="index.html">خانه</a></p>
        <p><a href="products.html">محصولات</a></p>
        <p><a href="about.html">درباره ما</a></p>
        <p><a href="contact.html">تماس با ما</a></p>
      </div>
      <div>
        <h4>اطلاعات تماس</h4>
        <p>📍 ${shopInfo.address}</p>
        <p>📞 <a href="tel:${shopInfo.phone}">${shopInfo.phone}</a></p>
        <p>💬 <a href="https://wa.me/${shopInfo.whatsapp}" target="_blank">واتساپ</a></p>
        ${shopInfo.instagram ? `<p>📷 <a href="https://instagram.com/${shopInfo.instagram}" target="_blank">اینستاگرام</a></p>` : ""}
      </div>
    </div>
    <div class="footer-bottom">
      © ${new Date().getFullYear()} ${shopInfo.name} — تمامی حقوق محفوظ است
    </div>
  `;
}

// رندر محصولات
function renderProducts(containerId, options = {}) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  let filtered = [...products];
  
  if (options.featured) {
    filtered = filtered.filter(p => p.featured);
  }
  
  if (options.category && options.category !== "all") {
    filtered = filtered.filter(p => p.category === options.category);
  }
  
  if (options.search) {
    const q = options.search.toLowerCase();
    filtered = filtered.filter(p => 
      p.name.toLowerCase().includes(q) || 
      (p.brand && p.brand.toLowerCase().includes(q)) ||
      (p.description && p.description.toLowerCase().includes(q))
    );
  }
  
  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="icon">🔍</div>
        <p>محصولی یافت نشد</p>
      </div>
    `;
    return;
  }
  
  container.innerHTML = filtered.map(p => {
    const cat = categories.find(c => c.id === p.category);
    return `
      <article class="product-card">
        <div class="product-image">
          <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.src='images/1000253459.jpg'">
        </div>
        <div class="product-body">
          <div class="product-category">${cat ? cat.name : p.category}</div>
          <h3 class="product-title">${p.name}${p.brand ? ` - ${p.brand}` : ""}</h3>
          <p class="product-desc">${p.description || ""}</p>
          <div class="product-actions">
            <button class="btn btn-primary btn-sm" onclick="openInquiryModal('${p.id}')">
              استعلام قیمت
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

// رندر دسته‌بندی‌ها
function renderCategories(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  container.innerHTML = categories.map(c => `
    <a href="products.html?category=${c.id}" class="category-card">
      <span class="icon">${c.icon || "📦"}</span>
      <h3>${c.name}</h3>
    </a>
  `).join("");
}

// مودال استعلام
function openInquiryModal(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  const overlay = document.getElementById("inquiryModal");
  if (!overlay) return;
  
  document.getElementById("inquiryProductName").textContent = product.name;
  document.getElementById("inquiryProductId").value = productId;
  document.getElementById("customerName").value = "";
  overlay.classList.add("active");
  document.getElementById("customerName").focus();
}

function closeInquiryModal() {
  const overlay = document.getElementById("inquiryModal");
  if (overlay) overlay.classList.remove("active");
}

function submitInquiry(e) {
  e.preventDefault();
  const name = document.getElementById("customerName").value.trim();
  const productId = document.getElementById("inquiryProductId").value;
  const product = products.find(p => p.id === productId);
  
  if (!name) {
    alert("لطفاً نام خود را وارد کنید");
    return;
  }
  
  const message = `سلام، من ${name} هستم.\nقیمت محصول «${product.name}» را می‌خواهم استعلام بگیرم.\nاز سایت دیلم یونیلیور`;
  const encoded = encodeURIComponent(message);
  const url = `https://wa.me/${shopInfo.whatsapp}?text=${encoded}`;
  
  window.open(url, "_blank");
  closeInquiryModal();
}

// فیلتر و جستجو در صفحه محصولات
function initProductsPage() {
  const urlParams = new URLSearchParams(window.location.search);
  let currentCategory = urlParams.get("category") || "all";
  let currentSearch = "";
  
  // رندر پیل‌های فیلتر
  const pillsContainer = document.getElementById("filterPills");
  if (pillsContainer) {
    pillsContainer.innerHTML = `
      <button class="pill ${currentCategory === 'all' ? 'active' : ''}" data-cat="all">همه</button>
      ${categories.map(c => `
        <button class="pill ${currentCategory === c.id ? 'active' : ''}" data-cat="${c.id}">${c.name}</button>
      `).join("")}
    `;
    
    pillsContainer.querySelectorAll(".pill").forEach(btn => {
      btn.addEventListener("click", () => {
        currentCategory = btn.dataset.cat;
        pillsContainer.querySelectorAll(".pill").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderProducts("productsGrid", { category: currentCategory, search: currentSearch });
      });
    });
  }
  
  // جستجو
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearch = e.target.value;
      renderProducts("productsGrid", { category: currentCategory, search: currentSearch });
    });
  }
  
  renderProducts("productsGrid", { category: currentCategory, search: currentSearch });
}

// مقداردهی اولیه
document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
  
  // صفحه خانه
  if (document.getElementById("featuredProducts")) {
    renderProducts("featuredProducts", { featured: true });
  }
  if (document.getElementById("categoriesGrid")) {
    renderCategories("categoriesGrid");
  }
  
  // صفحه محصولات
  if (document.getElementById("productsGrid")) {
    initProductsPage();
  }
  
  // مودال
  const inquiryForm = document.getElementById("inquiryForm");
  if (inquiryForm) {
    inquiryForm.addEventListener("submit", submitInquiry);
  }
  
  // بستن مودال با کلیک بیرون
  const overlay = document.getElementById("inquiryModal");
  if (overlay) {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeInquiryModal();
    });
  }
});

// ثبت Service Worker برای PWA
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(err => console.log("SW registration failed:", err));
  });
}
