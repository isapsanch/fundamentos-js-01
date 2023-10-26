//Ejercicio 4: Condicionales Anidados y Operador Lógico

//1. Variable hora
const hora = 15

//2. condiconales anidados para determinar el momento del día.
if (hora < 12) {
    console.log('Buenos días')
} else if (hora >= 12 && hora < 18) {
    console.log('Buenas tardes')

}else {
    console.log('Buenas noches')
}

//3. Funcion esMayorDeEdad
function esMayorDeEdad(edad) {
    return edad >= 18
}

//4. Condiconales anidados con operador lógico para verificar mayor de edad y estudiante
const esEstudiante = 20
const edadPersona = 20
if (esMayorDeEdad(edadPersona) && esEstudiante) {
    console.log('Es mayor de edad y estudiante')

}else {
    console.log('No cumple ambas condicones')
}

//5. Funcion esVocal
function esVocal(letra) {
    const vocales = 'aeiouAEIOU'
    return vocales.includes(letra)
}

//6. Utiliza la funcion esVocal

const letraCaracter = 'A'
if (esVocal(letraCaracter)) {
    console.log(letraCaracter + ' es una vocal')  
}else {
    console.log(letraCaracter + ' no es una vocal')
}