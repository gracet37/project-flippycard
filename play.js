/////////////// RENDER ALL THE CARDS FOR ONE DECK ///////////////

// 1. Fetch all the cards from the deck

const USER_URL = "http://localhost:3000/users"
const DECK_URL = "http://localhost:3000/decks"
const CARDS_URL = "http://localhost:3000/cards"
const topBar = document.querySelector(".top-bar")

const incBtn = document.createElement('button')
incBtn.className = "mx-auto btn btn-primary btn-lg"
incBtn.innerText = "Cards To Practice"
const allBtn = document.createElement('button')
allBtn.className = "mx-auto btn btn-secondary btn-lg"
allBtn.innerText = "All Cards"

topBar.append(incBtn, allBtn)

incBtn.addEventListener("click", (event) => {
    document.querySelector('.wrapper').innerText = " "
    incompleteFetch()
})

allBtn.addEventListener("click", (event) => {
    document.querySelector('.wrapper').innerText = " "
    allFetch()
})

/* <button type="button" class="btn btn-secondary btn-lg btn-block">Block level button</button> */

const allFetch = () => {
    fetch(`${DECK_URL}/4`)
        .then(res => res.json())
        .then(deck => {
            renderAllCards(deck)
    })
}

allFetch()

////////////////////////FETCH SCORE//////////////////////////////
const scoreFetch = () => {
    fetch(`${DECK_URL}/4`)
        .then(res => res.json())
        .then(deck => {
            renderScore(deck)
    })
}
scoreFetch()
////////////////////////// RENDER SCORE ////////////////////////////

const renderScore = (deck) => {
    const h1 = document.createElement('h1')
    h1.innerText = `Score: ${deck.score}`
    const score = document.querySelector(".score")
    const p = document.createElement('p')
    score.append(h1, p)
}
///////////////// UPDATE SCORE////////////////////////////////

function isIncomplete(card) {
    return card.complete === false;
}

const incompleteFetch = () => {
    fetch(`${DECK_URL}/4`)
    .then(res => res.json())
    .then(deck => {
        let incompleteDeck = deck.cards.filter(isIncomplete)
        renderIncomplete(incompleteDeck)
    })
}

const renderIncomplete = (cards) => {
    cards.forEach(card => {
        const wrapper = document.querySelector('.wrapper')
        const playDiv = document.createElement('div')

        playDiv.innerHTML = `<div class="flip-card">
                                <div class="flip-card-inner">
                                <div class="flip-card-front" id="rcorners1">
                                     <h1>${card.foreign}</h1> 
                                </div>
                                <div class="flip-card-back" id="rcorners1">
                                    <h1>${card.english}</h1> 
                                    <button type="button" class="complete-button" id=${card.id}>Got it!</button> 
                                </div>
                                </div>
                            </div>`
                            
        wrapper.appendChild(playDiv)   

        const completeBtn = playDiv.querySelector(".complete-button")
        const incompleteBtn = document.querySelector(".incomplete-button")

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

const renderAllCards = (deck) => {
    // create a new card and the hover card each manually
    deck.cards.forEach(card => {
        const wrapper = document.querySelector('.wrapper')
        const playDiv = document.createElement('div')

        playDiv.innerHTML = `<div class="flip-card">
                                <div class="flip-card-inner">
                                <div class="flip-card-front" id="rcorners1">
                                     <h1>${card.foreign}</h1> 
                                </div>
                                <div class="flip-card-back" id="rcorners1">
                                    <h1>${card.english}</h1> 
                                    <button type="button" class="complete-button" id=${card.id}>Got it!</button> 
                                </div>
                                </div>
                            </div>`
                            
        wrapper.appendChild(playDiv)   

        const completeBtn = playDiv.querySelector(".complete-button")
        const incompleteBtn = document.querySelector(".incomplete-button")

        completeBtn.addEventListener("click", (event) => {
            event.preventDefault()
            let targetId = event.target.id   // console.log(event.target.id)
            let p = document.querySelector('p')
            p.innerHTML = " 🌟 Great Work! 🌟"
            setTimeout(function(){
                p.innerHTML = '';
            }, 2000);

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
            .then(res => res.json())
        })
        // renderIncomplete()  
    })
}




    
//     function isComplete(card) {
//         return card.complete === true;
//     }

    
    ///////////////////////////////////TOP SCREEN BUTTONS ////////////////////////////////////////
    
    // const navBar = document.querySelector(".nav-bar")
    // const allButton = document.createElement('button')
    // allButton.innerText = "All Cards"
    // const incBtn = document.createElement('button')
    // incBtn.innerText = "Cards To Pracice"
    // const exitBtn = document.createElement('button')
    // exitBtn.innerText = "Finish"
    
    // navBar.append(allButton, incBtn, exitBtn)
    



    
    
    ////////////////////////////////////////////////////
     
    


