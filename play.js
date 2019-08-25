/////////////// CREATE ALL BUTTONS ///////////////

// 1. Fetch all the cards from the deck
const options = (deck) => {
    const topBar = document.querySelector(".top-bar")
    const midBar = document.querySelector(".mid-bar")

    const incBtn = document.createElement('button')
    incBtn.className = "button-inc"
    incBtn.innerText = "Cards To Practice"
    const allBtn = document.createElement('button')
    allBtn.className = "button-all"
    allBtn.innerText = "All Cards"

    topBar.append(allBtn, incBtn)

    incBtn.addEventListener("click", (event) => {
        document.querySelector('.wrapper').innerText = " "
        incompleteFetch(deck.id)
    })

    allBtn.addEventListener("click", (event) => {
        document.querySelector('.wrapper').innerText = " "
        allFetch(deck.id)
    })

    const createButton = document.createElement('button')
    createButton.className = 'button-create'
    createButton.id = deck.id
    createButton.innerHTML = `<span>Create New Cards</span>`
    showCardContainer(createButton)

    midBar.append(createButton)
}

//////////////////////// FETCH ALL CARDS //////////////////////////
const allFetch = (id) => {
    fetch(`${DECK_URL}/${id}`)
        .then(res => res.json())
        .then(deck => {
            renderAllCards(deck)
    })
}

////////////////////////FETCH SCORE//////////////////////////////
const scoreFetch = (id) => {
    fetch(`${DECK_URL}/${id}`)
        .then(res => res.json())
        .then(deck => {
            renderScore(deck)
    })
}

////////////////////////// UPDATE SCORE////////////////////////////////

function isIncomplete(card) {
    return card.complete === false;
}

const incompleteFetch = (id) => {
    fetch(`${DECK_URL}/${id}`)
    .then(res => res.json())
    .then(deck => {
        let incompleteDeck = deck.cards.filter(isIncomplete)
        if (incompleteDeck.length > 0) {
        renderIncomplete(incompleteDeck)
        } else {
                alert("Oh, no! You have no more cards to practice in your deck!");
        }
    })
}

////////////////////////// RENDER INCOMPLETE CARDS /////////////////////////

const renderIncomplete = (cards) => {
    cards.forEach(card => {
        const wrapper = document.querySelector('.wrapper')
        const playDiv = document.createElement('div')

        playDiv.innerHTML = `<div class="flip-card">
                                <div class="flip-card-inner">
                                <div class="flip-card-front" id="rcorners1">
                                    <h4 class="flip-front-text">${card.foreign}</h4> 
                                </div>
                                <div class="flip-card-back" id="rcorners1">
                                    <h4 class="flip-back-text">${card.english}</h4> 
                                    <button type="button" class="complete-button" id=${card.id}>Got it!</button> 
                                    <button type="button" class="delete-button" id=${card.id}>Delete</button> 
                                </div>
                                </div>
                            </div>`
                            
        wrapper.appendChild(playDiv)   

        const completeBtn = playDiv.querySelector(".complete-button")
        // const incompleteBtn = document.querySelector(".incomplete-button")

        completeBtn.addEventListener("click", (event) => {
            event.preventDefault()
            let targetId = event.target.id   // console.log(event.target.id)
            event.target.parentNode.parentNode.parentNode.style.display = "none"
            fetch(`http://localhost:3000/cards/${targetId}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": 'application/json',
                    "Accept": 'application/json'
                },
                body: JSON.stringify({
                    complete: true
                })
            })
        })  
    })
}

//////////////////// RENDER ALL CARDS /////////////////////
// create a new card and the hover card each manually

const renderAllCards = (deck) => {
    deck.cards.forEach(card => {
        const wrapper = document.querySelector('.wrapper')
        const playDiv = document.createElement('div')

        playDiv.innerHTML = `<div class="flip-card">
                                <div class="flip-card-inner">
                                <div class="flip-card-front" id="rcorners1">
                                     <h4 class="flip-front-text">${card.foreign}</h4> 
                                </div>
                                <div class="flip-card-back" id="rcorners1">
                                    <h4 class="flip-back-text">${card.english}</h4> 
                                    <button type="button" class="complete-button" id=${card.id}>Got it!</button>
                                    <button type="button" class="delete-button" id=${card.id}>Delete</button> 
                                </div>
                                </div>
                            </div>`
                            
        wrapper.appendChild(playDiv)  
        
        const deleteBtn = playDiv.querySelector(".delete-button")
        let cardId = deleteBtn.id

        deleteBtn.addEventListener("click", (e) => {
                var txt;
                var r = confirm("Are you sure you want to delete this card?");
                if (r == true) {
                    fetch(`${CARDS_URL}/${cardId}`, {
                        method: "DELETE"
                    }).then(event.target.parentElement.parentElement.parentElement.remove())
                } 
              })
            
        const completeBtn = playDiv.querySelector(".complete-button")

        completeBtn.addEventListener("click", (event) => {
            event.preventDefault()
            let targetId = event.target.id   // console.log(event.target.id)
            deck.score += 10
            let p = document.querySelector('p')
            p.innerHTML = " 🌟 Great Work! 🌟"
            setTimeout(function(){
                p.innerHTML = '';
            }, 2000);

            fetch(`http://localhost:3000/decks/${deck.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": 'application/json',
                    "Accept": 'application/json'
                },
                body: JSON.stringify({
                    score: deck.score
                })
            })
            .then(data => {
                document.querySelector('.score').innerHTML = `<h2>Score: ${deck.score}</h2>`
            })

                fetch(`http://localhost:3000/cards/${targetId}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": 'application/json',
                    "Accept": 'application/json'
                },
                body: JSON.stringify({
                    complete: true
                })
            })
            
            event.target.parentNode.parentNode.parentNode.style.display = "none"
        })
    })
}




