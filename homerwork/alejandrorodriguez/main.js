/* tarea 1 ==================================================================================================================================

 1Crearemos un objeto llamado Serie cuyos atributos son:

titulo string
numero de temporadas number
genero string
creador string
 año de lanzamiento number */


// const series= {
//     titulo:"Los peaky blindres",
//     numeroDeTrmporadas:4,
//     genero:"drama criminal",
//     Creador:"Steven Knight",
//     añoDeLanzamiento:2013,

// }

// tarea 2 ====================================================================================================================================

/* Crearemos un objeto llamado Persona cuyos atributos son:

nombre string
edad number
peso string
altura string
calcularImc función que retorne el IMC recuerda que IMC = peso / (altura*altura)
esMayorDeEdad función que retorna true / false dependiendo de si la edad de la persona es mayor a 18 años o no  */


const person= {
    name:"Alejandro Rodriguez",
    age:43,
    peso:65,
    altura:170,
    añoDeLanzamiento:2013,
    imc2:(peso, altura) => {
        altura=altura / 100;
        let result= peso / (altura*altura);
        console.log("Tu indice de masa corporal es ", result.toFixed(2))
     },
     esMayorDeEdad:(age) => {
     if(age >=18){
        console.log("Eres mayor de edad y tienes ", age)
     }else{
        console.log("Eres menor de edad y tienes", age)
     }        
    }
}
person.imc2(person.peso,person.altura);
person.esMayorDeEdad(person.age);

// ========================================================================================================================================

// Crear un objeto llamado libro, y que tiene las siguientes propiedades
/*
Nombre string
Fecha de publicacion string
Price number
Autores array string (minimo 3 autores)
Numero de paginas number
Categoria string "only_adults"
isAvailableForUser( userAge ) funcion que recibe como argumento la edad de la persona que quiere comprar el libro,
 y debe retornar true o false dependiendo de si el usuario es mayor de edad y si la categoría es "only_adults"; 
 si la categoria no es "only_adults" entonces cualquier persona puede leer el libro.
*/

const libro= {
    nombre:"El señor de los anillos",
    fechaDePublicacion:"año 2001",
    precio:120000,
    autores:["Carlos Peraz", "Gabriel Garcia", "Miguel de Cervantes"],
    paginas:180,
    categoria:"adultos",
    isAvailableForUser:(userAge) => {
        if(userAge >=18 && libro.categoria===("adultos")){
            console.log("Tienes acceso a todos los libros")
        }else if(libro.categoria !== "adultos"){
            console.log("cualquier persona puede leer este libro")
        
    }else{
        console.log(" ");
    }
}
}
libro.isAvailableForUser(person.age);

person.age= 12;

libro.isAvailableForUser(person.age);