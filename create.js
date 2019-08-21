
const newCardForm = document.querySelector('form.add-card')

const langDropDown = document.querySelector('.lang-selector')

const getLangs = () => {
    fetch(DECK_URL)
        .then(resp => resp.json())
        .then(decks => displayLangs(decks))
}

const displayLangs = (decks) => {
    decks.forEach(lang => {
        console.log(lang)
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
    .then(card => console.log(card))
})

getLangs()





