let carrito       = [];
let productos     = [];

let gestor;

document.addEventListener('DOMContentLoaded', () => {
    carrito = JSON.parse( localStorage.getItem('carrito') ) || [];

})

let boton = document.getElementsByClassName("botonComprar");
    for (let i = 0; i < comics.length;i++){
        boton[i].onclick = () => {console.log(comics[i].nombre + " en el carrito");
        let PrintCarrito = document.getElementsByTagName("h6");
        PrintCarrito[i].innerHTML = comics[i].nombre + " EN EL CARRITO";
        };

    }
    



