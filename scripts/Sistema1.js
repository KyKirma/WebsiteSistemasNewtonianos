function calcular() {
  var massa1 = parseFloat(document.getElementById("massa1").value);
  var massa2 = parseFloat(document.getElementById("massa2").value);
  var massa3 = parseFloat(document.getElementById("massa3").value);
  var forca = parseFloat(document.getElementById("forca").value);
  var coeficiente = parseFloat(document.getElementById("atrito").value);
  var gravidade = parseFloat(document.getElementById("gravidade").value);
  var tempo = parseFloat(document.getElementById("tempo").value);
  var respostaAtrito = document.getElementById("checkAtrito");

  if (respostaAtrito.checked) {
    //com atrito
    var forcaAtrito1 = (coeficiente * massa1 * gravidade);
    var forcaAtrito2 = (coeficiente * massa2 * gravidade);
    var forcaAtrito3 = (coeficiente * massa3 * gravidade);

    var aceleracao = ((forca - (parseFloat(forcaAtrito1) + parseFloat(forcaAtrito2) + parseFloat(forcaAtrito3))) / (massa1 + massa2 + massa3));
    aceleracao = aceleracao < 0 ? 0 : aceleracao; // Define a aceleração como zero se for negativa

    var tracao1 = ((massa1 * aceleracao) + parseFloat(forcaAtrito1));
    var tracao2 = ((massa2 * aceleracao) + parseFloat(forcaAtrito2) + parseFloat(tracao1));

    var velocidade = (aceleracao * tempo);
    var distancia = ((aceleracao * Math.pow(tempo, 2)) / 2);

    document.getElementById("resultado").innerHTML = `<li><b>Atrito Bloco 1:</b> ${forcaAtrito1.toFixed(2)} <i>N</i></li><br>
    <li><b>Atrito Bloco 2:</b> ${forcaAtrito2.toFixed(2)} <i>N</i></li><br>
    <li><b>Atrito Bloco 3:</b> ${forcaAtrito3.toFixed(2)} <i>N</i></li><br>
    <li><b>Aceleração do sistema:</b> ${aceleracao.toFixed(2)} <i>m/s²</i></li><br>
    <li><b>Tensão do Fio 1:</b> ${tracao1.toFixed(2)} <i>N</i></li><br>
    <li><b>Tensão do Fio 2:</b> ${tracao2.toFixed(2)} <i>N</i></li><br>
    <li><b>Velocidade final:</b> ${velocidade.toFixed(2)} <i>m/s</i></li><br>
    <li><b>Distância percorrida:</b> ${distancia.toFixed(2)} <i>m</i></li><br>`;

  } else {
    //sem atrito

    var aceleracao = (forca / (massa1 + massa2 + massa3));
    aceleracao = aceleracao < 0 ? 0 : aceleracao; // Define a aceleração como zero se for negativa

    var tracao1 = (massa1 * aceleracao);
    var tracao2 = ((massa2 * aceleracao) + parseFloat(tracao1));

    var velocidade = (aceleracao * tempo);
    var distancia = ((aceleracao * Math.pow(tempo, 2)) / 2);

    document.getElementById("resultado").innerHTML = `
    <li><b>Aceleração do sistema:</b> ${aceleracao.toFixed(2)} <i>m/s²</i></li><br>
    <li><b>Tensão do Fio 1:</b> ${tracao1.toFixed(2)} <i>N</i></li><br>
    <li><b>Tensão do Fio 2:</b> ${tracao2.toFixed(2)} <i>N</i></li><br>
    <li><b>Velocidade final:</b> ${velocidade.toFixed(2)} <i>m/s</i></li><br>
    <li><b>Distância percorrida:</b> ${distancia.toFixed(2)} <i>m</i></li><br>`;
  }
}
  
  
  