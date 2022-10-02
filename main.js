let nombre = prompt("Hola ¿Cual es tu nombre?: ");

let precio = 0

function calcularPrecio(producto) {
    if (producto == 1) {
        precio = precio + 2810;
    }else if (producto == 2) {
        precio = precio + 8750;
    }else if (producto == 3) {
        precio = precio + 4200;
    }else if (producto == 4) {
        precio = precio + 5600;
    }else if (producto == 5) {
        precio = precio + 7350;
    }
}

function agregarCarrito(){
    let seguir = "S";
    let agregar;
    while(seguir !="N"){
        let opcion = parseInt(prompt("Hola " + nombre + " ¿Que desea comprar?\n1- All Star Batman Vol 01: Yo, Mi Peor Enemigo.\n2- All Star Superman Absolute.\n3- Green Arrow Vol 01: Hunters Moon.\n4- Astonishing opcion-Men Vol 10: Northstar TPB.\n5- Capitana Marvel Vol 01: La Heroína Más Poderosa De La Tierra."))
        if (opcion == 1){
            console.log("EL precio de All Star Batman Vol 01: Yo, Mi Peor Enemigo es: $2,810.00");
            agregar = prompt("¿Desea agregarlo al carrito? S/N");
            if (agregar.toUpperCase() == "S") {
                calcularPrecio(opcion);
                seguir = prompt("¿Desea ver algo mas? S/N");
                if (seguir.toUpperCase() == "S") {
                    continue;
                }
                else if (seguir.toUpperCase() == "N") {
                    break;
                }
            }else if (agregar.toUpperCase() == "N") {
                continue;
            }
        }else if (opcion == 2){
            console.log("EL precio de All Star Superman Absolute es: $8,750.00");
            agregar = prompt("¿Desea agregarlo al carrito? S/N");
            if (agregar.toUpperCase() == "S") {
                calcularPrecio(opcion);
                seguir = prompt("¿Desea ver algo mas? S/N");
                if (seguir.toUpperCase() == "S") {
                    continue;
                }
                else if (seguir.toUpperCase() == "N") {
                    break;
                }
            }else if (agregar.toUpperCase() == "N") {
                continue;
            }
        }else if(opcion == 3){
            console.log("EL precio de Green Arrow Vol 01: Hunters Moon es: $4,200.00");
            agregar = prompt("¿Desea agregarlo al carrito? S/N");
            if (agregar.toUpperCase() == "S") {
                calcularPrecio(opcion);
                seguir = prompt("¿Desea ver algo mas? S/N");
                if (seguir.toUpperCase() == "S") {
                    continue;
                }
                else if (seguir.toUpperCase() == "N") {
                    break;
                }
            }else if (agregar.toUpperCase() == "N") {
                continue;
            }
        }else if(opcion == 4){
            console.log("EL precio de Astonishing opcion-Men Vol 10: Northstar TPB: $5,600.00");
            agregar = prompt("¿Desea agregarlo al carrito? S/N");
            if (agregar.toUpperCase() == "S") {
                calcularPrecio(opcion);
                seguir = prompt("¿Desea ver algo mas? S/N");
                if (seguir.toUpperCase() == "S") {
                    continue;
                }
                else if (seguir.toUpperCase() == "N") {
                    break;
                }
            }else if (agregar.toUpperCase() == "N") {
                continue;
            }
        }else if(opcion == 5){
            console.log("EL precio de Capitana Marvel Vol 01: La Heroína Más Poderosa De La Tierra: $7,350.00");
            agregar = prompt("¿Desea agregarlo al carrito? S/N");
            if (agregar.toUpperCase() == "S") {
                calcularPrecio(opcion);
                seguir = prompt("¿Desea ver algo mas? S/N");
                if (seguir.toUpperCase() == "S") {
                    continue;
                }
                else if (seguir.toUpperCase() == "N") {
                    break;
                }
            }else if (agregar.toUpperCase() == "N") {
                continue;
            }
        }
}}

function calcularPrecioFinal(x){
    let envio = parseInt(prompt('Si desea que su pedido incluya envio presione "S"'))
    const precioEnvio = 1000
    const iva = 21
    let precioFinal = 0
    if (envio == "S"){
        precioFinal = (precio + precioEnvio) + ((precio + precioEnvio)*((iva)/100));
        return "Su precio final incluyendo envio e iva es de: " + precioFinal;
    }else {
        precioFinal = precio + (precio *((iva)/100));
        return "Su precio final incluyendo iva es de: " + precioFinal;
    };
}

agregarCarrito();
console.log(calcularPrecioFinal(precio));