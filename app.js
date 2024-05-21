// ITERADORES
// Iteradores son funciones que nos permiten recorrer un objeto

// For es programacion imperativa
// Inicializador ; el limite ; el incremento o decremento

for (let i = 0; i <= 10; i++) {
    console.log(`Numero : ${i}`)
}

// /* Ejercicios
//     1. Listar del 100 al 0
//     2. Listar numeros pares del 0 al 100
//     3. Listar numeros impares del 0 al 100
// */

// // 1.
console.log('Listar del 100 al 0'); 
for (let i = 100; i >= 0; i--) {
    console.log(`Numero: ${i}`);
}


// // 2.
console.log('Listar numeros pares del 0 al 100');
for (let i = 0; i <= 100; i++) {
    if(i % 2 === 0) {
        console.log(`Numero: ${i}`);
    }
}

// // 3.
console.log('Listar numeros impares del 0 al 100');
for (let i = 0; i <= 100; i++) {
    if(i % 2 !== 0) {
        console.log(`Numero: ${i}`);
    }
}

// // Recorriendo un arreglo
const arrNumbers = [1, 2, 3, 4, 5];

for (let i = 0; i < arrNumbers.length; i++) {
    console.log(`Posicion ${i}: ${arrNumbers[i]}`);
}

let sum = 0;
for (let i = 0; i < arrNumbers.length; i++) {
    sum += arrNumbers[i];
}
console.log(`La suma es ${sum} y el promedio es ${sum / arrNumbers.length}`);

// Iterador while / dowhile
let i = 0;
while(i <= 10){
    console.log(`Numero: ${i}`);
    i++;
}

// forEach y map
// forEach se utiliza para recorrer arreglos
// map se utiliza para recorrer arreglos y retornar un nuevo arreglo

/* El metodo forEach() esta pensado para recorrer colecciones, mientras que el metodo map() esta pensado para iterar sobre una coleccion dada, pero con el objetivo de tratar esa coleccion y devolver una nueva con los elementos modificados a partir de la anterior.
*/

const arrNumbers2 = [1, 2, 3, 4, 5];
arrNumbers2.forEach(function(number) {
    console.log(number);
});

arrNumbers2.forEach((number) => console.log(number));

arrNumbers2.map((number) => console.log(number));

const nuevoArregloNumber = arrNumbers2.map((number)=>{
    return number * 2;
});

console.log(nuevoArregloNumber);

// Array Methods: son metodos que nos permiten manipular arreglos

const dogs = [
    {
        id: 'dog-1',
        name: 'Poodle',
        temperament: ['Intelligent','Active','Alert','Faithful','Trainable','Instinctual'],
    },
    {
        id: 'dog-2',
        name: 'Bernese Mountain Dog',
        temperament: ['Affectionate','Intelligent','Loyal','Faithful'],
    },
    {
        id: 'dog-3',
        name: 'Labrador Retriever',
        temperament: ['Intelligent','Even Tempered','Kind','Outgoing','Trusting','Gentle'],
    },
];

// find: Devuelve el primer elemento que cumpla la condicion
const poodleDog = dogs.find((dog) => dog.name === 'Poodle');
console.log(poodleDog);

// some: Devuelve true si al menos un elemento cumple la condicion
const isAgressive = dogs.some((dog) => dog.temperament.includes('Trusting'));
console.log(isAgressive);

// every: Devuelve true si todos los elementos cumplen la condicion
const isTrusting = dogs.every((dog) => dog.temperament.includes('Intelligent'));
console.log(isTrusting);

const namesDogs = dogs.map((dog) => dog.name);
console.log(namesDogs);

// filter: Devuelve un nuevo arreglo con los elementos que cumplan la condicion
const FaithfulDogs = dogs.filter((dog) => dog.temperament.includes('Faithful'));
console.log(FaithfulDogs);