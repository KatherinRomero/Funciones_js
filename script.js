// Funciones en JavaScript

// Definición de una función
function miFuncion(a, b) {
    return a + b; // 'return' devuelve el resultado
}

// Llamada a la función
let resultado = miFuncion(3, 2);
alert(resultado); // Muestra una alerta con el resultado: 5


// Funciones autoinvocadas (IIFE)
(function (num1, num2) {
    console.log(num1 * num2); // Imprime 10
})(5, 2);


// Funciones de tipo expresión
let resta = function (x, y) {
    return x - y;
};

let resultadoResta = resta(5, 2);
console.log(resultadoResta); // Imprime 3


// Funciones de tipo flecha
// Sintaxis de función flecha
const nombreFuncion = (parametros) => console.log(parametros);
nombreFuncion(1); // Imprime 1

const dividir = (n1, n2) => n1 / n2;
let respuesta = dividir(10, 2);
console.log(respuesta); // Imprime 5


// Ejemplo con matrices
let matriz = [[0, 1], [2, 3]];

// Función tradicional para imprimir matriz
function imprimirMatriz(matriz) {
    for (let fila = 0; fila < matriz.length; fila++) {
        for (let columna = 0; columna < matriz[fila].length; columna++) {
            console.log("Elemento en fila " + fila + ", columna " + columna + ": " + matriz[fila][columna]);
        }
    }
}
imprimirMatriz(matriz);


// Función autoinvocada para recorrer matriz
(function recorrerMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            console.log(matriz[i][j]);
        }
    }
})(matriz);


// Función flecha para imprimir todos los elementos
console.log("-----------------------");
const imprimirElementos = matriz =>
    matriz.forEach(fila =>
        fila.forEach(valor =>
            console.log(valor)
        )
    );

imprimirElementos(matriz);
