const selectElement = (s) => document.querySelector(s);
const navLinks = document.querySelectorAll(".nav-link");

selectElement(".icon").addEventListener("click", () => {
    selectElement(".nav-list").classList.toggle("active");
    selectElement(".icon").classList.toggle("toggle");
});

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        selectElement(".nav-list").classList.toggle("active");
        selectElement(".icon").classList.toggle("toggle");
    })
})