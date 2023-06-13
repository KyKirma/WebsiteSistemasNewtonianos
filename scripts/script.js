function calcular() {
  const massaInput = parseFloat(document.getElementById("Massa").value);
  const forcaInput = parseFloat(document.getElementById("Forca").value);
  const razaoInput = parseFloat(document.getElementById("Razao").value);
  const qntBlocosInput = parseFloat(document.getElementById("qntBlocos").value);
  const tracaoInput = parseFloat(document.getElementById("TracaoN").value);

  const massaN = massaInput + (qntBlocosInput - 1) * razaoInput;
  const massaTotal = (qntBlocosInput * (massaInput + massaN)) / 2;

  let tensao;
  let aceleracao;

  if (tracaoInput < qntBlocosInput) {
    const massaDaTensao = massaInput + (tracaoInput - 1) * razaoInput;
    const massaTotalTensao = (tracaoInput * (massaDaTensao + massaInput)) / 2;
    aceleracao = forcaInput / massaTotal;
    tensao = massaTotalTensao * aceleracao;
  } else if (tracaoInput === qntBlocosInput) {
    aceleracao = forcaInput / massaTotal;
    tensao = forcaInput;
  } else {
    // Tratar algum caso de erro ou condição inválida
    // Neste exemplo, definirei a tensão como NaN
    tensao = NaN;
    aceleracao = NaN;
  }

  console.log("Força de aceleração:", aceleracao.toFixed(2), "m/s²");
  console.log("Força de tensão no Bloco escolhido:", tensao.toFixed(2), "N");

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<br>Força de aceleração: ${aceleracao.toFixed(
    2
  )} m/s²<br>Força de tensão no Bloco escolhido: ${tensao.toFixed(2)} N`;
}
