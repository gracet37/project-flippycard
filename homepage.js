/// CREATE DISPLAY FOR USER and their DECKS

const USER_URL = "http://localhost:3000/users"
const DECK_URL = "http://localhost:3000/decks"
const CARDS_URL = "http://localhost:3000/cards"
const homeDiv = document.getElementById('homepage')


///////////// FETCH A USERS DECK /////////////////
fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(user => renderAllDecks(user[0]))

///////////// RENDER THE PAGE AFTER USER SELECTS THEIR LANGUAGE  ///////////////

const renderDeckPage = (deck) => {

    const playButton = document.createElement('button')
    playButton.className = 'button-play'
    playButton.innerHTML = `<span>Test Yourself!</span>`

    const changeButton = document.createElement('button')
    changeButton.className = 'button-change'
    changeButton.innerHTML = `<span>Edit or Delete Cards</span>`

    const createButton = document.createElement('button')
    createButton.className = 'button-create'
    createButton.innerHTML = `<span>Create New Cards</span>`
    showCardContainer(createButton)
    
    homeDiv.append(playButton, changeButton, createButton)
}


///////////// GO TO THE CREATE CARD SCREEN //////////////

const formContainer = document.querySelector('.container')

let addCard = false

const showCardContainer = (createButton) => {
    createButton.addEventListener("click", (event) => {
        event.preventDefault()

        addCard = !addCard
            if (addCard) {
                formContainer.style.display = 'block'
            } else {
                formContainer.style.display = 'none'
            }
    })
}


///////////// ADD NEW CARD FETCH POST //////////////

const addNewCard = (deck) => {
    const submit = document.getElementsByClassName('submit')
    const engInput = document.getElementsByName('english')[0]
    const fInput = document.getElementsByName('foreign')[0]

    fetch("http://localhost:3000/cards", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }, 
        body: JSON.stringify({
          english: engInput.value,
          foreign: fInput.value,
          deck_id: deck.id,
          complete: false
        })
    })
    .then(res => res.json())
    .then(card => console.log(card))
}


/////////////// RENDER ALL THE DECKS ///////////////

const renderAllDecks = (user) => {

    user.decks.forEach(deck => {
        const deckDiv = document.createElement('div')
        deckDiv.innerHTML = 
            `<div class="card">
                <img src="${deck.img_url}" alt="Avatar" id="deck${deck.id}" style="width:100%">
                    <div class="container">
                    <h4><b>${deck.category}</b></h4> 
                    </div>
            </div>`
        homeDiv.appendChild(deckDiv)
    })

    const deck1 = document.getElementById('deck1')
    // const deck2 = document.getElementById('deck2')
    // const deck3 = document.getElementById('deck3')
    // const deck4 = document.getElementById('deck4')

    deck1.addEventListener("click", (event) => {
        event.preventDefault()
        homeDiv.innerHTML = " "
        renderDeckPage(deck1)
    })
} 

















