//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."


const numeros = document.querySelectorAll('li');
document.querySelector("#promedio").innerText = `El promedio es ${calcularPromedio(numeros)}`;
document.querySelector("#numero-mas-chico").innerText = `El número más chico es ${obtenerNumeroMasChico(numeros)}`;
document.querySelector("#numero-mas-grande").innerText = `El número más grande es ${obtenerNumeroMasGrande(numeros)}`;
document.querySelector("#numero-mas-frecuente").innerText = `El número más frecuente es ${obtenerNumeroMasFrecuente(numeros)}`;

function calcularPromedio(numeros) {
    let total = 0;
    for (let i = 0; i < numeros.length; i++) {
        total += Number(numeros[i].innerText);
    }
    return total / numeros.length;
}

function obtenerNumeroMasChico(numeros) {
    let masChicoPorAhora = Number(numeros[0].innerText);
    for (let i = 0; i < numeros.length; i++) {
        if (Number(numeros[i].innerText) < masChicoPorAhora) {
            masChicoPorAhora = Number(numeros[i].innerText);
        }
    }
    return masChicoPorAhora;
}

function obtenerNumeroMasGrande(numeros) {
    let masGrandePorAhora = Number(numeros[0].innerText);
    for (let i = 0; i < numeros.length; i++) {
        if (Number(numeros[i].innerText) > masGrandePorAhora) {
            masGrandePorAhora = Number(numeros[i].innerText);
        }
    }

    return masGrandePorAhora;
}

function obtenerNumeroMasFrecuente(numeros) { 
    let masRepetido = Number(numeros[0].innerText); 
    let mayorFrecuencia = 0;
    
    for ( let i = 0 ; i < numeros.length ; i++){
        let numero = Number(numeros[i].innerText);
        let apariciones = 0;
        
        for (let i = 0; i < numeros.length; i++){
            if (Number(numeros[i].innerText) == numero){
                apariciones++;
            }
        }
        if (apariciones > mayorFrecuencia){
            mayorFrecuencia = apariciones;
            masRepetido = numero;
        }
    }

    return masRepetido;
}
