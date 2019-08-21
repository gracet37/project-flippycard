/////////////// RENDER ALL THE CARDS FOR ONE DECK ///////////////

// 1. Fetch all the cards from the deck
const options = (deck) => {
    const topBar = document.querySelector(".top-bar")

    const incBtn = document.createElement('button')
    incBtn.className = "mx-auto btn btn-primary btn-lg"
    incBtn.innerText = "Cards To Practice"
    const allBtn = document.createElement('button')
    allBtn.className = "mx-auto btn btn-secondary btn-lg"
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
}

////// ????? Need help - how to interlink this with the items defined in homepage.js ??????????????????????

// const playFunction = () => {
//     playBtn.addEventListener("click", (event) => {
//             let deckId = event.target.id
//             document.querySelector('main').innerHTML = " "
//             allFetch(deckId)
//     })
// }


const allFetch = (id) => {
    // console.log("Hello")
    fetch(`${DECK_URL}/${id}`)
        .then(res => res.json())
        .then(deck => {
            renderAllCards(deck)
            // console.log(deck)
    })
}

// allFetch(2)

////////////////////////FETCH SCORE//////////////////////////////
const scoreFetch = (id) => {
    fetch(`${DECK_URL}/${id}`)
        .then(res => res.json())
        .then(deck => {
            renderScore(deck)
    })
}
// scoreFetch()
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
                                    <button type="button" class="edit-button" id=${card.id}>Edit</button>
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
            
            // console.log(event.target.innerText)
            // fetch(`${CARDS_URL}/${cardId}`, {
            //     method: "DELETE"
            // }).then(event.target.parentElement.parentElement.parentElement.remove())

        const completeBtn = playDiv.querySelector(".complete-button")

        completeBtn.addEventListener("click", (event) => {
            event.preventDefault()
            let targetId = event.target.id   // console.log(event.target.id)
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
                    score: deck.score+10
                })
            })
            // .then(res => res.json()).then(data => {
                // document.querySelector('h1').innerHTML = " "
                // scoreFetch(data)
            // })
        
            // event.target.parentNode.parentNode.parentNode.style.display = "none"
            
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






    
//     function isComplete(card) {
//         return card.complete === true;
//     }

    
    ///////////////////////////////////TOP SCREEN BUTTONS ////////////////////////////////////////
    
    // const navBar = document.querySelector(".nav-bar")
    // const exitBtn = document.createElement('button')
    // exitBtn.innerText = "Go Back"
    
    // navBar.append(exitBtn)
    

    ////////////////////////////////////////////////////
     
    


