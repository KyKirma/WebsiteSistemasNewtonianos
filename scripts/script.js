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