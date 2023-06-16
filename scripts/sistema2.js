function calcular() {
  var massaA = parseFloat(document.getElementById("massaA").value);
  var massaB = parseFloat(document.getElementById("massaB").value);
  var gravidade = parseFloat(document.getElementById("gravidade").value);

  var pesoB = massaB * gravidade;
  var aceleracao = pesoB / (massaA + massaB);
  var tensaoFio1 = massaA * aceleracao;

  document.getElementById("aceleracao").innerHTML = "Aceleração do sistema: " + aceleracao + " m/s²";
  document.getElementById("tensaoFio1").innerHTML = "Tensão do Fio 1: " + tensaoFio1 + " N";
}
