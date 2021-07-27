const hamburguesa = document.querySelector("#hamburguesa"),
    navegacion = document.querySelector(".nav");
hamburguesa.addEventListener("click", () => { navegacion.classList.toggle("muestra"), navegacion.style.transition = "transform .7s ease", hamburguesa.classList.toggle("hamburguesaAnimacion") }), window.addEventListener("load", () => {
    const e = document.querySelector(".loader");
    e.style.opacity = 0, e.style.visibility = "hidden"
});