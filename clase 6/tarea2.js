
/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar 
el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, 
menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

let i = 0;

document.querySelector("#agregar").onclick = function () {
    let salarioAnualInput = document.createElement("input");

    salarioAnualInput.setAttribute('type', 'number');
    salarioAnualInput.setAttribute('class', 'salarioAnual');
    salarioAnualInput.setAttribute('placeholder', `Salario anual del integrante ${i + 1}`);
    parent = document.getElementById("salario");
    parent.appendChild(salarioAnualInput);
    i++;


    return false;
}

document.querySelector("#quitar").onclick = function () {
    parent = document.getElementById("salario");
    child = document.getElementsByClassName("salarioAnual")[0]
    parent.removeChild(child);

    return false;
}

document.querySelector("#calcular").onclick = function () {
    const salarios = document.querySelectorAll(".salarioAnual");

    document.querySelector("#resultado").textContent = `Mayor salario anual: ${calcularMayorSalario(salarios)}.
    Menor salario anual: ${calcularMenorSalario(salarios)}.
    Salario anual promedio: ${calcularSalarioAnualPromedio(salarios)}.
    Salario mensual promedio: ${calcularSalarioMensualPromedio(salarios)}.`



    return false;
}

function calcularMayorSalario(salarios) {
    let mayor = salarios[0].value;

    for (let i = 0; i < salarios.length; i++) {
        if (salarios[i].value != "") {
            if (mayor < salarios[i].value) {
                mayor = salarios[i].value;
            }
        }
    }

    return mayor;
}

function calcularMenorSalario(salarios) {
    let menor = salarios[0].value;


    for (let i = 0; i < salarios.length; i++) {
        if (salarios[i].value != "") {


            if (menor > salarios[i].value) {
                menor = salarios[i].value;
            }
        }
    }

    return menor;
}

function calcularSalarioAnualPromedio(salarios) {
    let sumaSalarios = 0;
    let cantidadSalarios = salarios.length;

    for (let i = 0; i < salarios.length; i++) {
        if (salarios[i].value != "") {
            sumaSalarios += Number(salarios[i].value);
        } else {
            cantidadSalarios--;
        }
    }

    return sumaSalarios / cantidadSalarios;

}

function calcularSalarioMensualPromedio(salarios) {
    let sumaSalariosMensuales = 0;
    let mesesEnUnAnio = 12;
    let cantidadSalarios = salarios.length;

    for (let i = 0; i < salarios.length; i++) {
        if (salarios[i].value != "") {
            sumaSalariosMensuales += (Number(salarios[i].value) / mesesEnUnAnio);
        } else {
            cantidadSalarios--;
        }
    }

    return sumaSalariosMensuales / cantidadSalarios;

}
