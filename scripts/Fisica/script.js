const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Insira o valor da primeira massa (mA): ", function(massaA) {
  rl.question("Insira o valor da segunda massa (mB): ", function(massaB) {
    rl.question("Insira o valor da gravidade (g): ", function(gravidade) {
      rl.question("Insira o tempo: ", function(tempo) {
        massaA = parseFloat(massaA);
        massaB = parseFloat(massaB);
        gravidade = parseFloat(gravidade);

        let pesoB = massaB * gravidade;

        // Cálculos sem atrito 
        let aceleracao = pesoB / (massaA + massaB);
        let tensaoFio1 = massaA * aceleracao;
        let velocidadeFinal = aceleracao * tempo;
        let deslocamentoFinal = aceleracao * Math.pow(tempo, 2);

        rl.question("Haverá atrito no sistema? (S/N): ", function(respostaAtrito) {
          if (respostaAtrito.toUpperCase() === "S") {
            // Se houver atrito
            rl.question("Insira o coeficiente de atrito: ", function(coeficienteAtrito) {
              coeficienteAtrito = parseFloat(coeficienteAtrito);

              // Verifica se a força aplicada é menor que a força de atrito estático máximo
              if (pesoB < coeficienteAtrito * massaA * gravidade) {
                aceleracao = 0.0;
                console.log("Foi considerada a aceleração como zero, pois o valor da força aplicada no sistema é menor que a força de atrito estático máximo.");
                console.log("Então os corpos permanecerão em repouso.");
              } else {
                // Cálculo da aceleração com atrito
                let aceleracaoComAtrito = (pesoB - coeficienteAtrito * massaA * gravidade) / (massaA + massaB);
                let tensaoFio1ComAtrito = massaA * aceleracaoComAtrito;

                // Verifica se a aceleração com atrito é negativa e atribui zero se for o caso
                if (aceleracaoComAtrito < 0) {
                  aceleracaoComAtrito = 0.0;
                  console.log("Foi considerada a aceleração como zero, pois o valor da força aplicada no sistema é menor que a força de atrito estático máximo.");
                  console.log("Então os corpos permanecerão em repouso.");
                }

                // Cálculo da velocidade e deslocamento
                let velocidadeAtrito = aceleracaoComAtrito * tempo;
                let deslocamento = 0.5 * aceleracaoComAtrito * Math.pow(tempo, 2);

                // Saída com os resultados considerando o atrito, velocidade e deslocamento
                console.log("Aceleração do sistema: ", aceleracaoComAtrito, "m/s²");
                console.log("Tensão do Fio: ", tensaoFio1ComAtrito, "N");
                console.log("Velocidade final: ", velocidadeAtrito, "m/s");
                console.log("Distância percorrida: ", deslocamento, "m");
              }
              rl.close();
            });
          } else {
            // Caso não haja atrito
            // Verifica se a aceleração sem atrito é negativa e atribui zero se for o caso
            if (aceleracao < 0) {
              aceleracao = 0.0;
              console.log("Foi considerada a aceleração como zero, pois o valor da força aplicada no sistema é menor que a força de atrito estático máximo.");
              console.log("Então os corpos permanecerão em repouso.");
            }

            console.log("Aceleração do sistema: ", aceleracao, "m/s²");
            console.log("Tensão do Fio: ", tensaoFio1, "N");
            console.log("Velocidade Final: ", velocidadeFinal, "m/s");
            console.log("Distância percorrida: ", deslocamentoFinal, "m");
            rl.close();
          }
        });
      });
    });
  });
});
