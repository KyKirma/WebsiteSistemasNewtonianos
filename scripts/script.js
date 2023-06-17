function calcular() {
    // Solicitar os valores de entrada ao usuário
    var massaInput = parseFloat(document.getElementById("Massa").value);
    var forcaInput = parseFloat(document.getElementById("Forca").value);
    var razaoInput = parseFloat(document.getElementById("Razao").value);
    var qntBlocosInput = parseFloat(document.getElementById("qntBlocos").value);
    var tracaoInput = parseFloat(document.getElementById("TracaoN").value);
    
    // Calcular a massa total com base nos valores de entrada
    const massaN = massaInput + (qntBlocosInput - 1) * razaoInput;
    const massaTotal = (qntBlocosInput * (massaInput + massaN)) / 2;
  
    var tensao = NaN;
    var aceleracao = 0;
  
    if (tracaoInput < qntBlocosInput) {
      // Calcular a massa da tensão e a massa total da tensão se a tração for menor que a quantidade de blocos
      const massaDaTensao = massaInput + (tracaoInput - 1) * razaoInput;
      const massaTotalTensao = (tracaoInput * (massaDaTensao + massaInput)) / 2;
      
      // Calcular a aceleração e a tensão com base nas massas calculadas
      aceleracao = forcaInput / massaTotal;
      tensao = massaTotalTensao * aceleracao;
    } else if (tracaoInput === qntBlocosInput) {
      // Calcular a aceleração e a tensão diretamente se a tração for igual à quantidade de blocos
      aceleracao = forcaInput / massaTotal;
      tensao = forcaInput;
    }
  
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "<br>Força de aceleração: " + aceleracao.toFixed(2) + " m/s²<br>Força de tensão no Bloco escolhido: " + tensao.toFixed(2) + " N";

}
