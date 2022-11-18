let nombrecliente = prompt("Hola! Ingresá tu nombre");

let pregunta = prompt("Hola " + nombrecliente + ", querés comprar algo? (si/no)");

const productos = [
    { id: 1, nombre: "iphone 11 64 GB", precio: 695 },
    { id: 2, nombre: "iPhone 12 64 GB", precio: 825 },
    { id: 3, nombre: "iPhone 13 125 GB", precio: 1020 }
]

let carrito = []
let costo_total = 0

//con el while mi intención es que vuelva hacer la pregunta y siga sumando productos hasta que el usuario ponga salir, me hubiese gustado que vaya sumando el valor de los precios pero no supe como hacerlo
while (pregunta.toLowerCase() === "si") {
    
    const pregunta2 = prompt("Cuál producto querés?" +
                             "1 - iPhone 11 64 GB $695 //" +
                             "2 - iPhone 12 64 GB $825 //" +
                             "3 - iPhone 13 125 GB $1020 //" +
                             "4 - Salir (Ingresa la opción deseada 1, 2, 3 o 4)");

    // Chequear si hay que salir
    if (pregunta2 == "4") {
        alert("Esperamos volver a verte")
        break;
    }

    // Chequear que la opción sea válida
    let opcion_valida = productos.find((producto) => producto.id == pregunta2);
    
    if (opcion_valida == undefined) {
        alert("No es una opción válida")
        continue;
    }

    // Procesar el producto
    let agregarAlCarrito = productos.find((producto) => producto.id == pregunta2);

    costo_total += agregarAlCarrito.precio

    carrito.push(agregarAlCarrito);

    console.log(carrito);
    console.log(costo_total);
    
}



alert("El costo total de tus productos es $" + costo_total + ".");
