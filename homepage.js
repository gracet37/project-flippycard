/// CREATE DISPLAY FOR USER and their DECKS

const USER_URL = "http://localhost:3000/users"
const DECK_URL = "http://localhost:3000/decks"
const CARDS_URL = "http://localhost:3000/cards"
const firstContainer = document.getElementById('first-container')
const secondContainer = document.getElementById('second-container')


///////////// FETCH A USERS DECK /////////////////

const fetchData = () => {
fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(user => renderAllDecks(user[0]))
}

///////////// RENDER THE PAGE AFTER USER SELECTS THEIR LANGUAGE  ///////////////

const renderDeckPage = (deck) => {
    const mainDiv = document.createElement('div')
    const h1 = document.createElement('h1')
    h1.innerHTML = `Learn ${deck.category}`
    mainDiv.appendChild(h1)

    // const playButton = document.createElement('button')
    // playButton.id = deck.id
    // playButton.className = 'button-play'
    // playButton.innerHTML = `<span>Test Yourself!</span>`
    // playButton.addEventListener("click", () => {
    //     // console.log("kj")
    //     allFetch(deck.id)
    // })

    // const homeButton = document.createElement('button')
    // homeButton.id = deck.id
    // homeButton.className = 'button-home'
    // homeButton.innerHTML = `<span>Go Back to All Languages</span>`

////////////////// NEEDS UPDATING /////////////////////////
    // homeButton.addEventListener("click", (event) => {
    //     event.preventDefault()
    //     // document.querySelector('main').innerHTML = " "
    //     fetchData()
    // })


    const createButton = document.createElement('button')
    createButton.className = 'button-create'
    createButton.id = deck.id
    createButton.innerHTML = `<span>Create New Cards</span>`
    showCardContainer(createButton)
    
    mainDiv.appendChild(createButton)
    firstContainer.appendChild(mainDiv)

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


/////////////// RENDER ALL THE DECKS ///////////////

const renderAllDecks = (user) => {
    user.decks.forEach(deck => {
        const navB = document.getElementsByClassName('navbar')[0]
        const button = document.createElement('button')
        button.className = 'button'
        button.id = deck.id
        button.innerText = deck.category
        
        button.addEventListener("click", (e) => {
            console.log(button)
            event.preventDefault()
            firstContainer.innerHTML = " "
            options(deck)
            renderDeckPage(deck)
            allFetch(deck.id)
            // secondContainer.innerHTML = " "
        })

        navB.append(button)

        const deckDiv = document.createElement('div')
        deckDiv.innerHTML = 
            `<div class="card">
                <img src="${deck.img_url}" alt="Avatar" id="deck${deck.id}" style="width:100%">
                    <div class="container">
                    <h4><b>${deck.category}</b></h4> 
                    </div>
            </div>`
        firstContainer.appendChild(deckDiv)

        deckDiv.addEventListener("click", (event) => {
            event.preventDefault()
            firstContainer.innerHTML = " "
            options(deck)
            renderDeckPage(deck)
            allFetch(deck.id)
        })
    })
}


///////////////////////////// MATT's CREATE FORM ////////////////////////////////
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
        // console.log(lang)
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
            // needs to be updated successfully
        })
    })
    .then(resp => resp.json())
    .then(card => {
        document.querySelector('.wrapper').innerHTML = " "
        allFetch(card.deck_id)
    })
})


////////////// FUNCTION CALLS ////////////////
getLangs()
fetchData()