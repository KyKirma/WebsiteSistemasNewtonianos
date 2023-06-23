function calcular(){
  var massa1 = parseFloat(document.getElementById("massaA").value);
  var massa2 = parseFloat(document.getElementById("massaB").value);
  var g = parseFloat(document.getElementById("gravidade").value); // m/s2 (gravidade)
  //diferança de massas
  var diferencaMassas = massa1 - massa2;
  var modulo = 0;
  var tracao;

  if(diferencaMassas < 0){
    modulo = diferencaMassas * (-1)
  }else{
    modulo = diferencaMassas
  }
  const aceleracao = (g * (modulo)) / (massa1 + massa2);

  if(massa1 > massa2){
    tracao = g * massa1 - aceleracao * massa1
  }else{
    tracao = g * massa1  +  aceleracao * massa1
  }
  const tensao = tracao ;

  document.getElementById("resultado").innerHTML = `<li><b>Aceleração do sistema:</b> ${aceleracao.toFixed(2)} <i>m/s²</i></li><br>
  <li><b> Tensão do Fio:</b> ${tensao.toFixed(2)} <i>N</i></li>`;
}
