function calcularGrasaCorporalHombre(cintura, cuello, altura) {
    const cinturaLog = Math.log10(cintura - cuello);
    const alturaLog = Math.log10(altura);
    const grasaCorporal = 495 / (1.0324 - 0.19077 * cinturaLog + 0.15456 * alturaLog) - 450;
    return grasaCorporal.toFixed(2); // Redondea a dos decimales
}

function calcularGrasaCorporalMujer(cintura, cuello, cadera, altura) {
    const medidaCircunferencia = cintura + cadera - cuello;
    const cinturaCaderaLog = Math.log10(medidaCircunferencia);
    const alturaLog = Math.log10(altura);
    const grasaCorporal = 495 / (1.29579 - 0.35004 * cinturaCaderaLog + 0.22100 * alturaLog) - 450;
    return grasaCorporal.toFixed(2); // Redondea a dos decimales
}

function calcular() {
    var cuello = parseFloat($("#cuello").val())
    var altura = parseFloat($("#altura").val())
    var cintura = parseFloat($("#cintura").val())
    let igc = calcularGrasaCorporalHombre(cintura, cuello, altura)
    if (igc == 'NaN') {
        $("#igc").text(`IGC: 0%`)
    } else {
        $("#igc").text(`IGC: ${igc}%`)
    }
}

$(document).ready(() => {
    calcular()
    $("#cintura").on('input', calcular)
    $("#cuello").on('input', calcular)
    $("#altura").on('input', calcular)
})