function calcular() {
  var massaBloco1 = parseFloat(document.getElementById('massa1').value);
  var massaBloco2 = parseFloat(document.getElementById('massa2').value);
  var massaBloco3 = parseFloat(document.getElementById('massa3').value);
  var gravidade = parseFloat(document.getElementById('gravidade').value);
  var coeficienteAtrito = parseFloat(document.getElementById('atrito').value);
  var forca = parseFloat(document.getElementById('forca').value);
  var respostaAtrito = document.getElementById("checkAtrito");

  var pesoBloco1 = massaBloco1 * gravidade;
  var pesoBloco2 = massaBloco2 * gravidade;
  var pesoBloco3 = massaBloco3 * gravidade;

  var somaMassas = massaBloco1 + massaBloco2 + massaBloco3;

  if (respostaAtrito.checked) {
    //com atrito
    var forcaAtritoBloco1 = coeficienteAtrito * massaBloco1 * gravidade;
    var forcaAtritoBloco2 = coeficienteAtrito * massaBloco2 * gravidade;
    var forcaAtritoBloco3 = coeficienteAtrito * massaBloco3 * gravidade;

    var somaForcasAtrito = forcaAtritoBloco1 + forcaAtritoBloco2 + forcaAtritoBloco3;

    var aceleracao = (forca - somaForcasAtrito) / somaMassas;
  aceleracao = aceleracao < 0 ? 0 : aceleracao; // Define a aceleração como zero se for negativa

    var forcaAB = forca - forcaAtritoBloco1 - (massaBloco1 * aceleracao);
    var forcaBC = (massaBloco3 * aceleracao) + forcaAtritoBloco3;

    document.getElementById("resultado").innerHTML = `
    <li><b>Peso Bloco 1:</b> ${pesoBloco1.toFixed(2)} <i>N</i></li><br>
    <li><b>Peso Bloco 2:</b> ${pesoBloco2.toFixed(2)} <i>N</i></li><br>
    <li><b>Peso Bloco 3:</b> ${pesoBloco3.toFixed(2)} <i>N</i></li><br>
    <li><b>Aceleração do sistema:</b> ${aceleracao.toFixed(2)} <i>m/s²</i></li><br>
    <li><b>Força de Atrito no Bloco 1:</b> ${forcaAtritoBloco1.toFixed(2)} <i>N</i></li><br>
    <li><b>Força de Atrito no Bloco 2:</b> ${forcaAtritoBloco2.toFixed(2)} <i>N</i></li><br>
    <li><b>Força de Atrito no Bloco 3:</b> ${forcaAtritoBloco3.toFixed(2)} <i>N</i></li><br>
    <li><b>Força de 1 sobre 2:</b> ${forcaAB.toFixed(2)} <i>m/s</i></li><br>
    <li><b>Força de 2 sobre 3:</b> ${forcaBC.toFixed(2)} <i>m/s</i></li><br>`;

  } else {
    //sem atrito

    var aceleracao = forca / somaMassas;
  aceleracao = aceleracao < 0 ? 0 : aceleracao; // Define a aceleração como zero se for negativa
    var forcaAB = forca - (massaBloco1 * aceleracao);
    var forcaBC = (massaBloco3 * aceleracao);

    document.getElementById("resultado").innerHTML = `
    <li><b>Peso Bloco 1:</b> ${pesoBloco1.toFixed(2)} <i>N</i></li><br>
    <li><b>Peso Bloco 2:</b> ${pesoBloco2.toFixed(2)} <i>N</i></li><br>
    <li><b>Peso Bloco 3:</b> ${pesoBloco3.toFixed(2)} <i>N</i></li><br>
    <li><b>Aceleração do sistema:</b> ${aceleracao.toFixed(2)} <i>m/s²</i></li><br>
    <li><b>Força de 1 sobre 2:</b> ${forcaAB.toFixed(2)} <i>m/s</i></li><br>
    <li><b>Força de 2 sobre 3:</b> ${forcaBC.toFixed(2)} <i>m/s</i></li><br>`;
  }
}