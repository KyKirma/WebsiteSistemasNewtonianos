function calcular() {
  var massa1 = parseFloat(document.getElementById("massa1").value);
  var massa2 = parseFloat(document.getElementById("massa2").value);
  var massa3 = parseFloat(document.getElementById("massa3").value);
  var forca = parseFloat(document.getElementById("forca").value);
  var coeficiente = parseFloat(document.getElementById("coeficiente").value);
  var gravidade = parseFloat(document.getElementById("gravidade").value);
  var tempo = parseFloat(document.getElementById("tempo").value);

  var forcaAtrito1 = (coeficiente * massa1 * gravidade).toFixed(2);
  var forcaAtrito2 = (coeficiente * massa2 * gravidade).toFixed(2);
  var forcaAtrito3 = (coeficiente * massa3 * gravidade).toFixed(2);

  var aceleracao = ((forca - (parseFloat(forcaAtrito1) + parseFloat(forcaAtrito2) + parseFloat(forcaAtrito3))) / (massa1 + massa2 + massa3)).toFixed(2);
  aceleracao = aceleracao < 0 ? 0 : aceleracao; // Define a aceleração como zero se for negativa

  var tracao1 = ((massa1 * aceleracao) + parseFloat(forcaAtrito1)).toFixed(2);
  var tracao2 = ((massa2 * aceleracao) + parseFloat(forcaAtrito2) + parseFloat(tracao1)).toFixed(2);

  var velocidade = (aceleracao * tempo).toFixed(2);
  var distancia = ((aceleracao * Math.pow(tempo, 2)) / 2).toFixed(2);

  console.log("Força de Atrito 1:", forcaAtrito1);
  console.log("Força de Atrito 2:", forcaAtrito2);
  console.log("Força de Atrito 3:", forcaAtrito3);
  console.log("Aceleração (valor absoluto):", aceleracao);
  console.log("Tração 1:", tracao1);
  console.log("Tração 2:", tracao2);
  console.log("Velocidade:", velocidade);
  console.log("Distância:", distancia);
}
  
  
  