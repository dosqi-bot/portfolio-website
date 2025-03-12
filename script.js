const navLinks = document.querySelectorAll(".nav-link");
const menuToggle = document.getElementById("menu-toggle");
const navLinksContainer = document.getElementById("nav-links");

// Fungsi untuk menetapkan tautan aktif berdasarkan posisi scroll
function setActiveLink() {
    const scrollPosition = window.scrollY;

    navLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute("href"));

        if (section) {
            const sectionTop = section.offsetTop - 100;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                navLinks.forEach(l => l.classList.remove("active"));
                link.classList.add("active");
            }
        }
    });
}

// Event Listener untuk scroll dan load
window.addEventListener("scroll", setActiveLink);
window.addEventListener("load", setActiveLink);

// Event Listener untuk smooth scroll saat klik link
navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href");
        document.querySelector(targetId).scrollIntoView({ behavior: "smooth" });
    });
});

// Event Listener untuk toggle menu di mobile
menuToggle.addEventListener("click", () => {
    navLinksContainer.classList.toggle("hidden");
});
