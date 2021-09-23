window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel__lista'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: '.carousel__indicadores',
		arrows: {
			prev: '.carousel__anterior',
			next: '.carousel__siguiente'
		},
		responsive: [
			{
			  // screens greater than >= 775px
			  breakpoint: 450,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},{
			  // screens greater than >= 1024px
			  breakpoint: 800,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 4
			  }
			}
		]
	});
});

window.onscroll = function () {
    let scroll = window.scrollY;

    const headerScroll = document.querySelector('#navegacion-principal');
    if(scroll > 300) {
        headerScroll.classList.add('bg-success');
    } else {
        headerScroll.classList.remove('bg-success');
    }

	if(document.documentElement.scrollTop>100){
		document.querySelector('.go--top-container').classList.add('show')
	}else{
		document.querySelector('.go--top-container').classList.remove('show')
	}

};
document.querySelector('.go--top-container').addEventListener('click', () =>{
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	})
})


//
$(document).ready(function(){
    $('#Sushi').click(function(){
       $("#contenido-menu").load("/hamburguesas.html");
    });

    $('#Hamburguesas').click(function(){
       $("#contenido-menu").load("/hamburguesas.html");
    });

    $('#Pizzas').click(function(){
       $("#contenido-menu").load("/hamburguesas.html");
    });
});