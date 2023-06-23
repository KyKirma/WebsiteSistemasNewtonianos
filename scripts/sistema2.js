function calcular() {
  var massaA = parseFloat(document.getElementById("massaA").value);
  var massaB = parseFloat(document.getElementById("massaB").value);
  var gravidade = parseFloat(document.getElementById("gravidade").value);
  var tempo = parseFloat(document.getElementById("tempo").value);
  var respostaAtrito = document.getElementById("checkAtrito");

  var pesoB = massaB * gravidade;
  
  var explicacao = "";

  if (respostaAtrito.checked) {
    // Se houver atrito
    var coeficienteAtrito = parseFloat(document.getElementById("atrito").value);

    // Verifica se a força aplicada é menor que a força de atrito estático máximo
    if (pesoB < coeficienteAtrito * massaA * gravidade) {
      aceleracao = 0.0;
      explicacao = "Foi considerada a aceleração como zero, pois o valor da força aplicada no sistema é menor que a força de atrito estático máximo. Então os corpos permanecerão em repouso.";

    }

      // Cálculo da aceleração com atrito
      var aceleracaoComAtrito = (pesoB - coeficienteAtrito * massaA * gravidade) / (massaA + massaB);
      var tensaoFio1ComAtrito = massaA * aceleracaoComAtrito;


      if (aceleracaoComAtrito < 0) {
        aceleracaoComAtrito = 0.0;
        explicacao = "Foi considerada a aceleração como zero, pois o valor da força aplicada no sistema é menor que a força de atrito estático máximo. Então os corpos permanecerão em repouso.";
      }
      // Cálculo da velocidade e deslocamento
      var velocidadeAtrito = aceleracaoComAtrito * tempo;
      var deslocamento = 0.5 * aceleracaoComAtrito * Math.pow(tempo, 2);

      // Saída com os resultados considerando o atrito, velocidade e deslocamento
      document.getElementById("resultado").innerHTML = `<li><b>Aceleração do sistema:</b> ${aceleracaoComAtrito.toFixed(2)} <i>m/s²</i><br>${explicacao}</li><br>
      <li><b>Tensão do Fio:</b> ${tensaoFio1ComAtrito.toFixed(2)} <i>N</i></li><br>
      <li><b>Velocidade final:</b> ${velocidadeAtrito.toFixed(2)} <i>m/s</i></li><br>
      <li><b>Distância percorrida:</b> ${deslocamento.toFixed(2)} <i>m</i></li><br>`;
      
  } else {
    // Caso não haja atrito
    var aceleracao = pesoB / (massaA + massaB);
    var tensaoFio1 = massaA * aceleracao;
    var velocidadeFinal = aceleracao * tempo;
    var deslocamentoFinal = 0.5 * aceleracao * Math.pow(tempo, 2);

    if (aceleracao < 0) {
      aceleracao = 0.0;
      explicacao = "Foi considerada a aceleração como zero, pois o valor da força aplicada no sistema é menor que a força de atrito estático máximo. Então os corpos permanecerão em repouso.";
    }

    document.getElementById("resultado").innerHTML = `<li><b>Aceleração do sistema:</b> ${aceleracao.toFixed(2)} <i>m/s²</i><br>${explicacao}</li><br>
    <li><b>Tensão do Fio:</b> ${tensaoFio1.toFixed(2)} <i>N</i></li><br>
    <li><b>Velocidade final:</b> ${velocidadeFinal.toFixed(2)} <i>m/s</i></li><br>
    <li><b>Distância percorrida:</b> ${deslocamentoFinal.toFixed(2)} <i>m</i></li><br>`;
  }
}
