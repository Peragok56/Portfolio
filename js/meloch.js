function removeLock() {
    document.querySelector('body').classList.remove('lock')
}

setTimeout(removeLock, 5000);

let cards = document.getElementsByClassName('card')

for (let card of cards) {
    card.addEventListener('click', () => {
        if(card.classList.contains('activeTap')){
            card.classList.remove('activeTap')
        } else{
            card.classList.add('activeTap')
        }
    })
}