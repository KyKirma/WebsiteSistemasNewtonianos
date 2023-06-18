function calcularSistema(massa1,massa2){

  const g = parseFloat(prompt("Digite o valor da gravidade (m/s^2):")); // m/s2 (gravidade)

  //diferança de massas
  var diferencaMassas = massa1 - massa2;
  var modulo = 0;

  if(diferencaMassas < 0){
    modulo = diferencaMassas * (-1)
  }else{
    modulo = diferencaMassas
  }
  const aceleracao = (g * (modulo)) / (massa1 + massa2);

  const tensao = g * massa1  +  aceleracao * massa1 ;

  return{
    aceleracao: Math.abs(aceleracao.toFixed(2)),
    tensao: Math.abs(tensao.toFixed(2))
  };
}
  console.log("USE '.' (PONTO) PARA SEPARAR A CASA DECIMAL!");
  const massa1 = parseFloat(prompt("Digite a massa do objeto 1 (em kg):"));
  const massa2 = parseFloat(prompt("Digite a massa do objeto 2 (em kg):"));

  const resultado = calcularSistema(massa1,massa2);

  console.log("Módulo da Aceleração:", resultado.aceleracao, "m/s^2");
  console.log("Tensão do fio:", resultado.tensao, "N");
