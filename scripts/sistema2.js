const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Insira o valor da primeira massa (mA): ", function(massaA) {
  rl.question("Insira o valor da segunda massa (mB): ", function(massaB) {
    rl.question("Insira o valor da gravidade (g): ", function(gravidade) {
      massaA = parseFloat(massaA);
      massaB = parseFloat(massaB);
      gravidade = parseFloat(gravidade);

      let pesoB = massaB * gravidade;
      let aceleracao = pesoB / (massaA + massaB);
      let tensaoFio1 = massaA * aceleracao;
      

      console.log("Aceleração do sistema: ", aceleracao, "m/s²");
      console.log("Tensão do Fio 1: ", tensaoFio1, "N");
     

      rl.close();
    });
  });
});
