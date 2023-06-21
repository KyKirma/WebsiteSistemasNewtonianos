function calcularAceleracao() {
  var massaBloco1 = parseFloat(document.getElementById('massaBloco1').value);
  var massaBloco2 = parseFloat(document.getElementById('massaBloco2').value);
  var massaBloco3 = parseFloat(document.getElementById('massaBloco3').value);
  var gravidade = parseFloat(document.getElementById('gravidade').value);
  var coeficienteAtrito = parseFloat(document.getElementById('coeficienteAtrito').value);
  var forca = parseFloat(document.getElementById('forca').value);

  var pesoBloco1 = massaBloco1 * gravidade;
  var pesoBloco2 = massaBloco2 * gravidade;
  var pesoBloco3 = massaBloco3 * gravidade;

  console.log('Peso do Bloco 1:', pesoBloco1.toFixed(2));
  console.log('Peso do Bloco 2:', pesoBloco2.toFixed(2));
  console.log('Peso do Bloco 3:', pesoBloco3.toFixed(2));

  var forcaAtritoBloco1 = coeficienteAtrito * massaBloco1 * gravidade;
  var forcaAtritoBloco2 = coeficienteAtrito * massaBloco2 * gravidade;
  var forcaAtritoBloco3 = coeficienteAtrito * massaBloco3 * gravidade;

  console.log('Força de Atrito do Bloco 1:', forcaAtritoBloco1.toFixed(2));
  console.log('Força de Atrito do Bloco 2:', forcaAtritoBloco2.toFixed(2));
  console.log('Força de Atrito do Bloco 3:', forcaAtritoBloco3.toFixed(2));

  var somaForcasAtrito = forcaAtritoBloco1 + forcaAtritoBloco2 + forcaAtritoBloco3;
  var somaMassas = massaBloco1 + massaBloco2 + massaBloco3;
  var aceleracao = (forca - somaForcasAtrito) / somaMassas;
  aceleracao = aceleracao < 0 ? 0 : aceleracao; // Define a aceleração como zero se for negativa

  console.log('Aceleração do Sistema:', aceleracao.toFixed(2));

  var forcaAB = forca - forcaAtritoBloco1 - (massaBloco1 * aceleracao);
  var forcaBC = (massaBloco3 * aceleracao) + forcaAtritoBloco3;

  console.log('Força AB:', forcaAB.toFixed(2));
  console.log('Força BC:', forcaBC.toFixed(2));
}