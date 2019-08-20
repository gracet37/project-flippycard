/////////////// RENDER ALL THE CARDS FOR ONE DECK ///////////////

// 1. Fetch all the cards from the deck


const DECK_URL = "http://localhost:3000/decks"


fetch(`${DECK_URL}/1`)
    .then(res => res.json())
    .then(deck => {
        renderAllCards(deck)
        renderScore(deck)
    })
 
const renderAllCards = (deck) => {
    // create a new card and the hover card each manually
    deck.cards.forEach(card => {
        const wrapper = document.querySelector('.wrapper')
        const playDiv = document.createElement('div')
        // playDiv.className = `box ${card.id}`
        // playDiv.innerHTML = `<label>
        //      <input type="checkbox"  />
        //         <div class="flip-card">
        //             <div class="flip-card-front">${card.foreign}</div>
        //             <div class="flip-card-back">${card.english}</div>
        //         </div>
        //     </label>`

        playDiv.innerHTML = `<div class="flip-card">
                                <div class="flip-card-inner">
                                <div class="flip-card-front" id="rcorners1">
                                     <h1>${card.foreign}</h1> 
                                </div>
                                <div class="flip-card-back" id="rcorners1">
                                    <h1>${card.english}</h1> 
                                    <button type="button" class="btn-circle">Got it!</button> 
                                    <button type="button" class="btn-circle">Keep Trying</button> 
                                </div>
                                </div>
                            </div>`

        wrapper.appendChild(playDiv)   

    })
}

const renderScore = (deck) => {
    const h1 = document.createElement('h1')
    h1.innerText = `Score:${deck.score}`
    const navBar = document.querySelector(".nav-bar")
    navBar.appendChild(h1)
}






