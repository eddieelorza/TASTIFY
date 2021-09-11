//Barra de navegacion
// document.querySelectorAll('.navbar .nav-link').forEach(enlace => {
//     enlace.addEventListener('click', function (e) {
//         e.preventDefault();

//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth',
//             block: 'start'
//         });
//     });
// });
//scroll Navbr
window.onscroll = function () {
    let scroll = window.scrollY;

    const headerScroll = document.querySelector('#navegacion-principal');
    if(scroll > 300) {
        headerScroll.classList.add('bg-success');
    } else {
        headerScroll.classList.remove('bg-success');
    }
};


//
$(document).ready(function(){
    $('#Sushi').click(function(){
       $("#contenido-menu").load("../views/menus/sushi.html");
    });

    $('#Hamburguesas').click(function(){
       $("#contenido-menu").load("../views/menus/Hamburguesas.html");
    });

    $('#Pizzas').click(function(){
       $("#contenido-menu").load("../views/menus/Pizzas.html");
    });
});