/////////// CREATE LINKS //////////////

const USER_URL = "http://localhost:3000/users"
const DECK_URL = "http://localhost:3000/decks"
const CARDS_URL = "http://localhost:3000/cards"
const firstContainer = document.getElementById('first-container')
const secondContainer = document.getElementById('second-container')
const headerDiv = document.getElementById('header-div')
const learn = document.querySelector('.learn')
const topBar = document.querySelector('.top-bar')
const wrapper = document.querySelector('.wrapper')
const midBar = document.querySelector('.mid-bar')

/////////////// FETCH A USERS DECK /////////////////

const fetchData = () => {
fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(user => renderAllDecks(user[0]))
}

///////////// RENDER THE PAGE AFTER USER SELECTS THEIR LANGUAGE  ///////////////

const renderHeader = (deck) => {
    const firstHead = document.querySelector('.first-head')
    firstHead.innerHTML = " "
    firstHead.innerHTML = `<h1>Flippy Cards</h1>`

    const h1 = document.createElement('h1')
    h1.className = 'learn clear'
    h1.innerHTML = `<span class="lang-span">${deck.category.toUpperCase()}</span>`
    
    const scoreDiv = document.createElement('div')
    const h2 = document.createElement('h2')
    h2.className = 'score clear'
    h2.innerHTML = `Score: ${deck.score}`
    const p = document.createElement('p')
    scoreDiv.append(h2, p)

    headerDiv.append(h1, scoreDiv)
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
}

/////////////// RENDER ALL THE LANGUAGE DECKS AND THEIR CARDS  ///////////////

const renderAllDecks = (user) => {
    user.decks.forEach(deck => {
        const navB = document.getElementsByClassName('navbar')[0]
        const button = document.createElement('button')
        button.className = 'button'
        button.id = deck.id
        button.innerText = deck.category
        
        button.addEventListener("click", (e) => {
            event.preventDefault()

            let arr = []
            e.target.className = 'color-button'
            arr.forEach.call(document.querySelectorAll('button'), function(b) {
                if (b !== e.target) {
                    b.className = 'button'
                }
            })
            firstContainer.innerHTML = " "
            headerDiv.innerHTML = " "
            topBar.innerHTML = " "
            wrapper.innerHTML = " "
            midBar.innerHTML = " "
            renderHeader(deck)
            options(deck)
            allFetch(deck.id)
        })

        navB.append(button)

        const deckDiv = document.createElement('div')
        deckDiv.innerHTML = 
            `<div class="card">
                <h3><b>${deck.category}</b></h3> 
                <img class="deck-card" src="${deck.img_url}" alt="Avatar" id="deck${deck.id}">
            </div>`
        firstContainer.appendChild(deckDiv)

        deckDiv.addEventListener("click", (event) => {
            event.preventDefault()
            firstContainer.innerHTML = " "
            options(deck)
            renderHeader(deck)
            allFetch(deck.id)
        })
    })
}


///////////////////////////// CREATE FORM ////////////////////////////////
const formContainer = document.querySelector('.form-container')

let addCard = false

const showCardContainer = (createButton) => {
    createButton.addEventListener("click", (event) => {
        event.preventDefault()

        addCard = !addCard
            if (addCard) {
                formContainer.style.display = 'block'
                getLangs()
            } else {
                formContainer.style.display = 'none'
            }
    })
}


const newCardForm = document.querySelector('form.add-card')

const langDropDown = document.querySelector('.lang-selector')

const getLangs = () => {
    fetch(DECK_URL)
        .then(resp => resp.json())
        .then(decks => displayLangs(decks))
}

const displayLangs = (decks) => {
    decks.forEach(lang => {
        let langId = document.createElement('option')
            langId.value = lang.id
            langId.innerText = lang.category
        langDropDown.append(langId)
    })
}



newCardForm.addEventListener('submit', (event)=>{
    event.preventDefault()
    let englishInput = document.querySelector('[name=english]')
    let foreignInput = document.querySelector('[name=foreign]')
    let languageSelection = document.querySelector('.lang-selector').value
    fetch(CARDS_URL, {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "Accept": "application/json"
          },
        body: JSON.stringify({
            english: englishInput.value,
            foreign: foreignInput.value,
            deck_id: languageSelection,
            complete: false
        })
    })
    .then(resp => resp.json())
    .then(card => {
        document.querySelector('.wrapper').innerHTML = " "
        foreignInput.value = " "
        englishInput.value = " "
        allFetch(card.deck_id)
    })
})


////////////// FUNCTION CALLS ////////////////
fetchData()