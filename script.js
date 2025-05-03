// Navbar toggle
const icon = document.querySelector('i.navbar-toggler');
/*Esto es perfecto para crear un botón de cambio o toggle entre dos estados. En este caso, parecerá que muestra u oculta contenido.
La clase bx-x probablemente mostrará un ícono de cruz, y bx-menu mostrará un ícono de menú, representando esos dos estados.*/
icon.addEventListener('click', function ()
{
	this.classList.contains('collapsed') ? this.classList.replace('bx-x', 'bx-menu') : this.classList.replace('bx-menu', 'bx-x');
});


// Active Menu
const allMenu = document.querySelectorAll('nav .navbar-nav a'); /*Selecciona todos los vínculos (<a>) dentro de la navegación (nav) con la clase .navbar-nav. Presumiblemente para crear el menú de navegación.*/ 
const sections = document.querySelectorAll('section:not(#contact)');/*Selecciona todas las secciones (<section>) excepto la con ID contact. Presumiblemente para las secciones del contenido.*/

/**Ese bloque de JavaScript añadirá un evento de desplazamiento a la ventana para actualizar la navegación según la posición de desplazamiento. En concreto: */
window.addEventListener('scroll', function() { /*Agrega un evento de desplazamiento a la ventana. La función anónima se ejecutará al desplazarse la ventana. */
	let current = ''; /*Declara una variable current vacía. Se utilizará para almacenar el ID de la sección actualmente visible. */
	sections.forEach( function(sect) { /*Itera sobre cada sección en la colección sections.*/
		if (this.pageYOffset + 50 > sect.offsetTop) {
			current = sect.getAttribute('id');
		} /*Comprueba si la posición desplazada más 50 es mayor que la posición superior de la sección. Si es así, obtiene el ID de la sección actual y lo almacena en current.*/
	});

	allMenu.forEach(function(nav) { /*Itera sobre cada elemento de navegación en la colección allMenu. */
		nav.classList.remove('active');/* Elimina active de todos los elementos de navegación.*/
		if (nav.classList.contains(current)) {
			nav.classList.add('active');
		}
		/* Comprueba si el ID del elemento coincide con la sección actual (current). Si es así, añade la clase active.*/
	
	});
});


/* Ese código jQuery cargará un indicador de carga y lo ocultará una vez cargada la página.*/
// Loading
const loader = $('.loading'); /*Selecciona cualquier elemento con la clase loading, probablemente nuestro indicador de carga. Lo almacena en una constante loader.*/
$(window).on('load', function() {  /*Agrega un evento load (una vez cargada la página) a la ventana. La función anónima se ejecutará una vez cargada la página.*/
	loader.fadeOut(); /*Oculta el indicador de carga loader mediante una transición fadeOut de jQuery.*/
});
/*Esto hará que nuestro indicador de carga se muestre y luego se oculte una vez completada la carga inicial de la página.*/


/*Dos cadenas de subtítulos que se alternarán. Velocidades de 70ms para escribir el texto y 50ms para borrarlo.
Sin eliminación inteligente, lo que significa que solo parpadeará.Un retardo de 2 segundos entre borrados y reinicios.
Y se ejecutará en un bucle continuo. */

/* Estas opciones se utilizarán para inicializar elpaquete Typed y crear subtítulos animados en la página.*/
// Typed js
let options = { /*Crea un objeto de opción vacío. */
  strings: ['Diseñador Web', 'Desarrollador Web'], /*Establece las cadenas de subtítulos. En este caso, dos opciones de carrera.*/
  typeSpeed: 70, /*Establece la velocidad de tipografía en 70ms (milisegundos). Determina la velocidad a la que aparece el texto. */
  backSpeed: 50,/*Establece la velocidad de retroceso en 50ms. Determina la velocidad a la que se elimina el texto. */
  smartBackspace: false, /*Establece la eliminación inteligente en false. Determina si el paquete eliminará todo el texto al retroceder o solo hará que aparezca. En este caso, solo hará parpadear. */
  backDelay: 2000, /*Establece una demora de retroceso de 2 segundos. Determina el retraso entre la eliminación de todo el texto y el comienzo. */
  loop: true, /*Establece el bucle en true. Determina si el subtítulo se ejecutará de forma continua (en bucle). En este caso, sí. */
};

let typed = new Typed('.typed', options);
/*Esa línea invocará el paquete Typed.js y creará subtítulos animados. En concreto:
let typed = new Typed('.typed', options);
    Crea una nueva instancia de Typed y la almacena en la constante typed.
Typed('.typed', ...)
    Selecciona el elemento con clase typed y lo pasa al constructor Typed. Presumiblemente un elemento que contendrá nuestros subtítulos.
options
    Pasa el objeto de opciones que configuramos anteriormente.
*/