function calcular() {
  var massaA = parseFloat(document.getElementById("massaA").value);
  var massaB = parseFloat(document.getElementById("massaB").value);
  var gravidade = parseFloat(document.getElementById("gravidade").value);

  var pesoB = massaB * gravidade;
  var aceleracao = pesoB / (massaA + massaB);
  var tensaoFio1 = massaA * aceleracao;

  document.getElementById("resultado").innerHTML = `<b>Aceleração do sistema:</b> ${aceleracao.toFixed(2)} <i>m/s²</i><br>
  <b> Tensão do Fio 1:</b> ${tensaoFio1.toFixed(2)} <i>N</i>`;
}
