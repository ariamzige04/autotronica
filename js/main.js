const hamburguesa = document.querySelector("#hamburguesa"),
    navegacion = document.querySelector(".nav");
hamburguesa.addEventListener("click", () => { navegacion.classList.toggle("muestra"), navegacion.style.transition = "transform .7s ease", hamburguesa.classList.toggle("hamburguesaAnimacion") }), window.addEventListener("load", () => {
    const e = document.querySelector(".loader");
    e.style.opacity = 0, e.style.visibility = "hidden"
});

document.addEventListener('DOMContentLoaded', function() {


    navegacionFija();
});

function navegacionFija() {

    const barra = document.querySelector('.nav-site');

    // Registrar el Intersection Observer
    const observer = new IntersectionObserver(function(entries) {
        if (entries[0].isIntersecting) {
            barra.classList.remove('fijo');
        } else {
            barra.classList.add('fijo');
        }
    });

    // Elemento a observar
    observer.observe(document.querySelector('.visualizar-aqui'));
}