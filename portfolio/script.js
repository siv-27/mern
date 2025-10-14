
const links = document.querySelectorAll("header nav ul li a");
links.forEach(link => {
    link.addEventListener("click", () => {
        document.querySelector("header").classList.remove("active");
    });
});
