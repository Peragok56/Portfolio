// lock page
function removeLock() {
    document.querySelector('body').classList.remove('lock')
}

setTimeout(removeLock, 5000);


// Cards
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


// Scroll
const anchors = document.querySelectorAll('a.scroll-to')

for (let anchor of anchors) {
  anchor.addEventListener('click', (e) => {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href')
    
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}