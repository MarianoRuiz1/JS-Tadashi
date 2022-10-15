class Comics { 
    constructor(id, nombre, precio, editorial, img, cantidad){
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.editorial = editorial;
    this.cantidad = cantidad;
    this.img = img;
    this.cantidad = cantidad;
}

    mostrarTodo(){
        return this.nombre + " $ "+ this.precio ; 
    }
    mostrarPrecios(){
        return "$" + this.precio;
    }
    mostrarEditoriales(){
        return this.nombre + ": " + this.editorial;
    }
}