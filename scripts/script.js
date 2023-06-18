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
        itemToShow[i].style.display = "block";
        itemToShow[i].style.opacity = "1";
    }
}
