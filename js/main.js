const hamburguesa = document.querySelector("#hamburguesa");
navegacion = document.querySelector(".nav");
hamburguesa.addEventListener("click", () => {
    navegacion.classList.toggle("muestra");
    navegacion.style.transition = "transform .7s ease";
    hamburguesa.classList.toggle("open");
});

const menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
        menuBtn.classList.add("open");
        menuOpen = true;
    } else {
        menuBtn.classList.remove("open");
        menuOpen = false;
    }
})

window.addEventListener("load", () => {
    const e = document.querySelector(".loader");
    e.style.opacity = 0;
    e.style.visibility = "hidden";
});