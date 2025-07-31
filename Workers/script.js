const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggleBtn");
const activeBar = document.getElementById("activeBar");
const activeBox = document.getElementById("activeBox");
const navItems = document.querySelectorAll(".nav-item");
const pages = document.querySelectorAll(".page");

function toggleSidebar() {
  const toggleIcon = document.getElementById("toggleIcon");

  sidebar.classList.toggle("closed");
  toggleBtn.classList.toggle("collapsed-style"); // 🔁 toggle button color

  // Toggle icon: bars (≡) for expanded, X for collapsed
  if (sidebar.classList.contains("closed")) {
    toggleIcon.classList.remove("uil-bars");
    toggleIcon.classList.add("uil-times");
  } else {
    toggleIcon.classList.remove("uil-times");
    toggleIcon.classList.add("uil-bars");
  }

  updateActivePosition(document.querySelector(".nav-item.active"));
}

function switchPage(id, el) {
  navItems.forEach((item) => item.classList.remove("active"));
  el.classList.add("active");

  const offsetTop = el.offsetTop;
  activeBar.style.transform = `translateY(${offsetTop}px)`;
  activeBox.style.transform = `translateY(${offsetTop}px)`;

  pages.forEach((page) => page.classList.remove("active"));
  document.getElementById(id).classList.add("active");

  el.querySelector("i").classList.add("icon-bounce");
  setTimeout(() => {
    el.querySelector("i").classList.remove("icon-bounce");
  }, 400);
}

// ✅ Set active position on load
window.addEventListener("DOMContentLoaded", () => {
  const activeItem = document.querySelector(".nav-item.active");
  const offsetTop = activeItem.offsetTop;
  activeBar.style.transform = `translateY(${offsetTop}px)`;
  activeBox.style.transform = `translateY(${offsetTop}px)`;

  // Set initial icon to bars (≡)
  document.getElementById("toggleIcon").classList.remove("uil-times");
  document.getElementById("toggleIcon").classList.add("uil-bars");
});



function toggleTheme() {
  const body = document.body;
  const icon = document.getElementById('themeIcon');
  const topbar = document.querySelector('.topbar');

  if (body.classList.contains('dark')) {
    body.classList.remove('dark');
    body.classList.add('light');
    topbar.classList.remove('dark');
    topbar.classList.add('light');
    icon.classList.remove('uil-sun');
    icon.classList.add('uil-moon');
    localStorage.setItem('theme', 'light');
  } else {
    body.classList.remove('light');
    body.classList.add('dark');
    topbar.classList.remove('light');
    topbar.classList.add('dark');
    icon.classList.remove('uil-moon');
    icon.classList.add('uil-sun');
    localStorage.setItem('theme', 'dark');
  }
}

// Load theme from localStorage
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  const body = document.body;
  const icon = document.getElementById('themeIcon');
  const topbar = document.querySelector('.topbar');

  body.classList.add(savedTheme);
  topbar.classList.add(savedTheme);

  if (savedTheme === 'dark') {
    icon.classList.remove('uil-moon');
    icon.classList.add('uil-sun');
  } else {
    icon.classList.remove('uil-sun');
    icon.classList.add('uil-moon');
  }
});


 const searchInput = document.getElementById('jobSearch');
    const jobCards = document.querySelectorAll('.job-card');

   searchInput.addEventListener('input', () => {
  const query = searchInput.value.trim().toLowerCase();
  let anyVisible = false;

  jobCards.forEach(card => {
    const title = card.dataset.title.trim().toLowerCase();
    const company = card.dataset.company.trim().toLowerCase();
    const isVisible = title.includes(query) || company.includes(query);
    card.style.display = isVisible ? 'block' : 'none';
    if (isVisible) anyVisible = true;
  });

  document.getElementById('noResults').style.display = anyVisible ? 'none' : 'block';
});
