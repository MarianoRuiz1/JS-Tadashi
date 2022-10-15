function elegirComic(){
    if(opcion == "1"){
        alert("Compraste All Star Batman Vol 01: Yo, Mi Peor Enemigo.");
        let precioBatman = document.getElementById("precioBatman");
        precioBatman.innerHTML='EN EL CARRITO';
    }else if(opcion == "2"){
        alert("Compraste All Star Superman Absolute.");
        let precioSuperman = document.getElementById("precioSuperman");
        precioSuperman.innerHTML='EN EL CARRITO';
    }else if(opcion == "3"){
        alert("Astonishing opcion-Men Vol 10: Northstar TPB.");
        let precioNorthstar = document.getElementById("precioNorthstar");
        precioNorthstar.innerHTML='EN EL CARRITO';
    }else if(opcion == "4"){
        alert("Capitana Marvel Vol 01: La Heroína Más Poderosa De La Tierra.");
        let precioCapitanaMarvel = document.getElementById("precioCapitanaMarvel");
        precioCapitanaMarvel.innerHTML='EN EL CARRITO';
    }else if(opcion == "5"){
        alert("Green Arrow Vol 01: Hunters Moon");
        let precioGreenArrow = document.getElementById("precioGreenArrow");
        precioGreenArrow.innerHTML='EN EL CARRITO';
    }
}

function mostrarComics(){
    let stock = "";
    for(let i = 0; i < comics.length 
        ;i++){
        stock += "\n"+comics[i].mostrarTodo();
    }
    return stock ; 
    } 
    
    function mostrarSoloPrecios(){
        let precios = "";
        for (let i = 0; i <comics.length;i++){
            precios += "\n"+comics[i].mostrarPrecios();
        }
    return precios;
    }
    
    function mostrarEditoriales(){
        let editorial = "";
        for (let i = 0; i < comics.length;i++){
            editorial += "\n" + comics[i].mostrarEditoriales();
        }
        return editorial;
    }
    

const comics = [];
comics.push(new Comics (1, "All Star Batman Vol 01: Yo, Mi Peor Enemigo.", 2810, "OVNI Press"));
comics.push(new Comics (2, "All Star Superman Absolute.", 8750, "Planeta DeAgostini"));
comics.push(new Comics(3, "Astonishing opcion-Men Vol 10: Northstar TPB.", 5600 , "Marvel" ));
comics.push(new Comics(4, "Capitana Marvel Vol 01: La Heroína Más Poderosa De La Tierra.", 7350 , "Panini Comics" ));
comics.push(new Comics (5, "Green Arrow Vol 01: Hunters Moon", 4200 , "DC Comics" ));


let opcion = prompt("Hola ¿Que deseas comprar? \n1-All Star Batman Vol 01: Yo, Mi Peor Enemigo\n2-All Star Superman Absolute.\n3-Astonishing opcion-Men Vol 10: Northstar TPB.\n4-Capitana Marvel Vol 01: La Heroína Más Poderosa De La Tierra.\n5-Green Arrow Vol 01: Hunters Moon")
console.log(elegirComic(opcion));
