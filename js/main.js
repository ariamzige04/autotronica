const hamburguesa = document.querySelector("#hamburguesa");
const navegacion = document.querySelector(".nav");
hamburguesa.addEventListener("click", () => {
    navegacion.classList.toggle("muestra");
    navegacion.style.transition = "transform .7s ease";

    hamburguesa.classList.toggle("hamburguesaAnimacion");
});

window.addEventListener("load", () => {
    const cargador = document.querySelector(".loader");
    cargador.style.opacity = 0;
    cargador.style.visibility = "hidden";
})