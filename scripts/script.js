function clickMenu() {
    if (item.style.display == 'block') {
        item.style.display = 'none'
    } else {
        item.style.display = 'block'
    }
}

function mudouTamanho() {
    if (window.innerWidth >= 850) {
        item.style.display = 'none'
    }
}

//trigger show
function show(){
    const itemToShow = document.getElementsByClassName("show");
    for (let i = 0; i < itemToShow.length; i++){
        itemToShow[i].style.opacity = "1";
    }
}

function checkShow(checkbox){
    const minhaDiv = document.getElementById('oculto');

    if (checkbox.checked) {
        minhaDiv.style.display = 'grid'; // Exibe a div quando a checkbox for marcada
    } else {
        minhaDiv.style.display = 'none'; // Oculta a div quando a checkbox for desmarcada
  }
};

//validações
function validarPositivo(event) {
    var tecla = event.key;
    if (tecla === "-") {
      event.preventDefault();
    }
}

function blockEntry() {
    var input = document.getElementById("atrito");
    var valor = input.value;

    if (valor < 0 || valor > 1) {
        input.value = ''; // Limpa o valor do input
        input.setCustomValidity('O valor deve estar entre 0 e 1.'); // Define uma mensagem de erro personalizada
      } else {
        input.setCustomValidity(''); // Remove a mensagem de erro
      }
}