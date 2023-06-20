function calcular() {
    var m1 = parseFloat(document.getElementById("massa1").value);
    var m2 = parseFloat(document.getElementById("massa2").value);
    var angulo = parseFloat(document.getElementById("angulo").value);
    var gravidade = parseFloat(document.getElementById("gravidade").value);

    var pesoTangente = m1 * gravidade * Math.sin(angulo * Math.PI / 180);

    if (pesoTangente > m2 * gravidade) {
      var aceleracao = (pesoTangente - m2 * gravidade) / (m1 + m2);
      var tensao = m2 * aceleracao + m2 * gravidade;

      document.getElementById("resultado").innerHTML = `<li><b>Aceleração do sistema:</b> ${aceleracao.toFixed(2)} <i>m/s²</i></li><br>
    <li><b>Tensão do Fio:</b> ${tensao.toFixed(2)} <i>N</i></li><br>`;

    } else if (pesoTangente < m2 * gravidade) {
      var aceleracao = ( m2 * gravidade - pesoTangente) / (m1 + m2);
      var tensao = m2 * gravidade - m2 * aceleracao ;

      document.getElementById("resultado").innerHTML = `<li><b>Aceleração do sistema:</b> ${aceleracao.toFixed(2)} <i>m/s²</i></li><br>
    <li><b>Tensão do Fio:</b> ${tensao.toFixed(2)} <i>N</i></li><br>`;
      

    } else {
      var aceleracao = 0;
      var tensao = m2 * gravidade;
      document.getElementById("resultado").innerHTML = `<li><b>Aceleração do sistema:</b> ${aceleracao.toFixed(2)} <i>m/s²</i></li><br>
    <li><b>Tensão do Fio:</b> ${tensao.toFixed(2)} <i>N</i></li><br>`;

    }
  }