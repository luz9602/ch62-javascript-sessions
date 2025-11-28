// Convertir la función printFullName a función flecha

let firstName="Sabroso";
let secondName="62"

const userFullName=`Hola! mi nombre es ${firstName} ${secondName},
soy estudiante de la cohorte de GENERATION.`;

console.log(userFullName);



// TODO: generar una función que calcule el área de un rectángulo
// usando parámetros por defecto para largo y ancho.

let base=20
let high=10

const areaTriangle=(base*high/2)
console.log(areaTriangle);


// Crear una función que sume dos números
// Aplicar a la función calculate la función suma
const calculate=(a,b, operationFunction)=>{
    return operationFunction(a,b)
}
const add=(a,b)=>a+b;
console.log(`La suma de los numeros es: ${calculate(20, 10, add)}`);


