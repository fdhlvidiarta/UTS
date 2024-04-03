// Function untuk toggle menu
function toggleMenu() {
  var menu = document.querySelector("nav ul");
  menu.classList.toggle("show");

  var toggle = document.querySelector(".menu-toggle");
  toggle.classList.toggle("open");
}

// Select elemen nav
const nav = document.querySelector("nav");

// Handler untuk event scroll
window.addEventListener("scroll", function () {
  // Periksa apakah posisi scroll lebih besar dari 0
  if (window.scrollY > 0) {
    // Jika di-scroll, tambahkan class ke nav
    nav.classList.add("scrolled");
  } else {
    // Jika tidak di-scroll, hapus class dari nav
    nav.classList.remove("scrolled");
  }
});

// Fungsi untuk scroll ke bagian yang sesuai saat tautan diklik
function scrollToSection(elementId) {
  const element = document.getElementById(elementId);
  element.scrollIntoView({ behavior: "smooth" });
}

// Handler untuk event scroll untuk memperbarui class active saat menggulir halaman
window.addEventListener("scroll", function () {
  const sections = document.querySelectorAll("section");
  let currentSectionId = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      currentSectionId = section.id;
    }
  });

  const menuLinks = document.querySelectorAll("nav ul li a");
  menuLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSectionId}`) {
      link.classList.add("active");
    }
  });
});

// Function untuk menampilkan pesan sukses
function showSuccessMessage() {
  const successMessage = document.createElement("div");
  successMessage.classList.add("success-message");
  successMessage.textContent = "Selamat Anda Berhasil Mendaftar!";
  document.body.appendChild(successMessage);

  // Hilangkan pesan sukses setelah beberapa detik
  setTimeout(() => {
    successMessage.remove();
  }, 3000); // Hapus pesan setelah 3 detik (3000 milidetik)
}

// Tangkap elemen formulir
const form = document.querySelector("form");

// Event listener untuk submit formulir
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Mencegah pengiriman formulir secara default

  // Tampilkan pesan sukses
  showSuccessMessage();

  // Reset formulir
  form.reset();
});

window.onscroll = function () {
  scrollFunction();
};

// JavaScript untuk mengatur perilaku footer
function scrollFunction() {
  // Periksa posisi scroll, jika sudah melewati 20px dari atas halaman atau tidak
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    // Jika sudah melewati 20px, atur posisi bottom footer menjadi 0 sehingga footer muncul
    document.getElementById("footer").style.bottom = "0";
  } else {
    // Jika belum melewati 20px, atur posisi bottom footer menjadi -58px sehingga footer akan tenggelam
    document.getElementById("footer").style.bottom = "-58px";
  }
}
