// Ejercicio 2: Operadores y Condiciones
//1. Variable puntuacion
const puntuacion = 85

//2. Condicional if/else
if (puntuacion >= 70) {
    console.log('Aprobado')

}else {
    console.log('Reprobado')
}
//3. Declara variable día
const dia = 3

//4. Swith para dias de la semana
switch (dia) {
    case 1:
        console.log('Lunes')
        break
    case 2:
        console.log('Martes')
        break
     case 3:
        console.log('Miercoles')
        break
     case 4:
        console.log('Jueves')
        break
    case 5:
        console.log('Viernes')
        break
    case 6:
        console.log('Sabado')
        break
    case 7:
        console.log('Domingo')
        break
    default:
        console.log('Dia inválido')           
}

// 5. Funcion C0nvetirFahrenheit

function convertirFahrenheit(celsius) {
    return(celsius *9) / 5 + 32
}

// 6. Utiliza la funcion convetir Fahrenheit
const temperaturaCelsius = 35
const temperaturaFahrenheit = convertirFahrenheit(temperaturaCelsius)
console.log('Temperatura en Fanhreheit: '+ temperaturaFahrenheit)

// 7. Función esPar
function esPar(numero){
    return numero % 2 === 0
}

// 8. Utiliza la función esPar

const numeroPar = 10
if (esPar(numeroPar)) {
    console.log(numeroPar + ' es par')
} else {
    console.log(numeroPar + ' es impar')
    
}