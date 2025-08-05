// Funciones en JavaScript
// Definición de una función
function miFuncion(a,b){
    return a + b;// return devuelve el resultado
}
// Llamada a la función
let resultado= miFuncion(3,2);
alert(resultado); // Muestra una alerta con el resultado


//funciones autoinvocadas
(function (num1,num2) {
    console.log(num1 * num2);
})(5,2);


//funciones de tipo expresión

let resta = function(x,y){ return x-y}

let result= resta(5,2)
console.log(result)

//funciones de tipo flecha
//sintaxis de función flecha
const nombreFuncion = (parametros) => console.log(parametros);
llamarfelcha = nombreFuncion(1);

const dividir=(n1,n2) => n1/n2;
respuesta= dividir(10,2)
console.log(respuesta)

//ejemplo 
let matriz =  [[0, 1], [2, 3]];

function imprimirMatriz(matriz){
    for(let fila=0;fila<matriz.length;fila++){
        for (let columna=0;columna<matriz[fila].length;columna++){
            console.log("Elemento en fila " + fila + ", columna " + columna + ": " + matriz[fila][columna]);
        }
    }
}
 imprimirMatriz(matriz);


 (function recorermatriz(matriz){
    for(let i =0;i<matriz.length;i++){
        for(let j=0;j<matriz[i].length; j++){
            console.log(matriz[i][j])
        }

    }
 })(matriz)

console.log("-----------------------");
const imprimirElementos = matriz => matriz.forEach(fila => fila.forEach(valor => console.log(valor)));

imprimirElementos(matriz);
