// let nombrecliente = prompt("Hola! Ingresá tu nombre");

// let pregunta = prompt("Hola " + nombrecliente + ", querés comprar algo? (si/no)");



const productos = [
    { id: 1, nombre: "iphone 11 64 GB", precio: 695, img: "./Imagenes/notebook.png", description: "Hola 1" },
    { id: 2, nombre: "iPhone 12 64 GB", precio: 825, img: "./Imagenes/notebook.png", description: "Hola 2" },
    { id: 3, nombre: "iPhone 13 125 GB", precio: 1020, img: "./Imagenes/notebook.png", description: "Hola 3" }
]

let carrito = []
let costo_total = 0


const contenido = document.querySelector("#contenido")

let i  = 0

productos.forEach(
    (producto) => {

        let div_prod = document.createElement("div")
        div_prod.classList.add("card2")
        div_prod.classList.add("animate__animated")
        if (i % 2 == 0) {
            div_prod.classList.add("animate__bounceInRight")
        } else {
            div_prod.classList.add("animate__bounceInLeft")
        }
        
        div_prod.innerHTML = `
            <div class="card__main">
                <div class="container__card__img__main">
                    <img class="card__img__main" src="${producto.img}" alt="...">
                </div>
                <div class="container__card__text">
                    <h3 class="container__card__text__titulo">
                    ${producto.nombre}
                    </h3>
                    <p class="container__card__text__parrafo">
                    ${producto.description}
                    </p>
                    <p class="container__card__text__parrafo">
                    Precio: $ ${producto.precio}
                    </p>
                    <button type="button" onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
                </div>
            </div>
            `
        contenido.append(div_prod);
        i += 1
    }
)

const agregarAlCarrito = (id) => {

    let producto = productos.find((x) => x.id == id);

    carrito.push(producto)
    costo_total += producto.precio

    console.log(producto)
    console.log(costo_total)
}




// for (let i = 0; i < productos.length; i++) {

//     let prod_img = document.createElement("img")
//     prod_img.classList.add("card__img__main")
//     prod_img.src = productos[0].img
//     prod_img.alt = "..."

//     let div_img = document.createElement("div")
//     div_img.classList.add("container__card__img__main")
//     div_img.append(prod_img)

//     let div_decription = document.createElement("div")
//     div_decription.classList.add("container__card__text")
//     div_decription.innerHTML = '<h3 class="container__card__text__titulo">' + productos[i].nombre + '</h3>'
//     div_decription.innerHTML += '<p class="container__card__text__parrafo">' + productos[i].description + '</p>'

//     let add_button = document.createElement("button")
//     add_button.type = "button"
//     add_button.innerHTML = "Agregar al carrito"

//     let div_card = document.createElement("div")
//     div_card.classList.add("card__main")
//     div_card.append(div_img)
//     div_card.append(div_decription)
//     div_card.append(add_button)

//     let div_prod = document.createElement("div")
//     div_prod.classList.add("card2")
//     div_prod.classList.add("animate__animated")
//     div_prod.classList.add("animate__bounceInLeft")
//     div_prod.append(div_card)

//     contenido.append(div_prod)
// }

// console.log(document);
// console.log(contenido);





// //con el while mi intención es que vuelva hacer la pregunta y siga sumando productos hasta que el usuario ponga salir, me hubiese gustado que vaya sumando el valor de los precios pero no supe como hacerlo
// while (pregunta.toLowerCase() === "si") {

//     const pregunta2 = prompt("Cuál producto querés?" +
//                              "1 - iPhone 11 64 GB $695 //" +
//                              "2 - iPhone 12 64 GB $825 //" +
//                              "3 - iPhone 13 125 GB $1020 //" +
//                              "4 - Salir (Ingresa la opción deseada 1, 2, 3 o 4)");

//     // Chequear si hay que salir
//     if (pregunta2 == "4") {
//         alert("Esperamos volver a verte")
//         break;
//     }

//     // Chequear que la opción sea válida
//     let opcion_valida = productos.find((producto) => producto.id == pregunta2);

//     if (opcion_valida == undefined) {
//         alert("No es una opción válida")
//         continue;
//     }

//     // Procesar el producto
//     let agregarAlCarrito = productos.find((producto) => producto.id == pregunta2);

//     costo_total += agregarAlCarrito.precio

//     carrito.push(agregarAlCarrito);

//     console.log(carrito);
//     console.log(costo_total);

// }



// alert("El costo total de tus productos es $" + costo_total + ".");