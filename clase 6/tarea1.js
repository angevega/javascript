/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/
//const cantidadMiembros = prompt("¿Cuánta gente hay en el grupo familiar?");


document.querySelector("#aceptar").onclick = function(){
    const cantidadMiembros = document.querySelector("#cantidad-integrantes").value;

    for(i=1; i <= cantidadMiembros; i++){
        let nuevoInput = document.createElement("input");
        let br = document.createElement('br')
        br.setAttribute('class', 'espacio')
        nuevoInput.setAttribute('type', 'number');
        nuevoInput.setAttribute('class', 'edad');
        nuevoInput.setAttribute('min', '0')
        nuevoInput.setAttribute('placeholder', `Edad del integrante ${i}`)
        let parent = document.getElementById("formulario");
        parent.appendChild(nuevoInput);
        parent.appendChild(br);
    }

    return false;

}


document.querySelector("#calcular").onclick = function(){
    const edades = document.querySelectorAll(".edad");

    document.querySelector("#resultado").textContent = `La mayor edad es ${calcularMayorEdad(edades)}, la menor es ${calcularMenorEdad(edades)} y el promedio de todas las edades es ${calcularPromedioEdad(edades)}.`
    return false;
}

document.querySelector("#reset").onclick = function(){
    const cantidadMiembros = document.querySelector("#cantidad-integrantes").value;
    document.getElementById("formulario").reset();
    let parent = document.getElementById('formulario');
    
    for(let i=0; i < cantidadMiembros; i++ ){   
        let child = document.getElementsByClassName('edad')[0];
        let child2 = document.getElementsByClassName('espacio')[0];
        parent.removeChild(child);
        parent.removeChild(child2);
    }

    document.querySelector("#resultado").textContent = ""

    return false;
}



function calcularMayorEdad(edades){
    let mayor = edades[0].value;
    for (let i = 0; i < edades.length; i++){
        if (mayor < edades[i].value){
            mayor = edades[i].value;
        }
    }
    return mayor;
}

function calcularMenorEdad(edades){
    let menor = edades[0].value;
    for (let i = 0; i < edades.length; i++){
        if (menor > edades[i].value){
            menor = edades[i].value;
        }
    }
    return menor;
}

function calcularPromedioEdad(edades){
    let sumaEdades = 0;
    for(let i = 0; i < edades.length; i++){
        sumaEdades += Number(edades[i].value);
    }

    return sumaEdades / edades.length;
}