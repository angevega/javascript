//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.


document.querySelector("#calculadora").onclick = function () {
    const horasDeCadaVideo = document.querySelectorAll(".horas");
    const minutosDeCadaVideo = document.querySelectorAll(".minutos");
    const segundosDeCadaVideo = document.querySelectorAll(".segundos");

    let totalHoras = 0;
    let totalMinutos = 0;
    let totalSegundos = 0;

    for (let i = 0; i < horasDeCadaVideo.length; i++) {
        totalHoras += Number(horasDeCadaVideo[i].value);
    }

    for (let i = 0; i < minutosDeCadaVideo.length; i++) {
        if (totalMinutos + Number(minutosDeCadaVideo[i].value) <= 59) {
            totalMinutos += Number(minutosDeCadaVideo[i].value);
        } else {
            totalHoras++;
            totalMinutos = Number(minutosDeCadaVideo[i].value) - (60 - totalMinutos);
        }
    }

    for (let i = 0; i < segundosDeCadaVideo.length; i++) {
        if (totalSegundos + Number(segundosDeCadaVideo[i].value) <= 59) {
            totalSegundos += Number(segundosDeCadaVideo[i].value);
        } else {
            totalMinutos++;
            totalSegundos = Number(segundosDeCadaVideo[i].value) - (60 - totalSegundos);
        }
    }

    document.querySelector("#tiempo-total").textContent = `El tiempo total de los videos es ${totalHoras} horas, ${totalMinutos} minutos y ${totalSegundos} segundos.`;

    return false;
}

