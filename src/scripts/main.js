AOS.init();

const dataDoEvento = new Date("mar 20, 2024 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval( () => {
    const agora = new Date();
    const timeStamp = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStamp;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;
    const segundoEmMS = 1000;
    
    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) /horaEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / minutoEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % segundoEmMS) / segundoEmMS);


    console.log(horasAteOEvento);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`

    if(distanciaAteOEvento < 0){
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = "Expirado"
    }

},1000 )