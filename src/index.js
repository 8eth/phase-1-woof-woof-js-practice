// Global Variables
const url = 'http://localhost:3000/pups'

// DOM Selectors
const dogBar = document.querySelector('#dog-bar')
const dogInfo = document.querySelector('#dog-info')

// Listeners

// Fetchers
function fetchAllDogs() {
    return fetch(url)
    .then (res => res.json())
}

// Render Functions
function renderAllDogs(dogsArr) {
    dogsArr.forEach(renderOneDog)
    // console.log(dogsArr)
}

function renderOneDog(dogObj) {
    // console.log('dogsArr: ', dogObj)

    const span = document.createElement('span')
    span.innerHTML = dogObj.name
    
    // console.log(span)
    dogBar.appendChild(span)    

    span.addEventListener('click', () => renderDetail (dogObj))

    if (dogObj.isGoodDog === true) {
        dogObj.goodBad = 'Good Dog!'
    } else {
        dogObj.goodBad = 'Bad Dog!'
    }
}

function renderDetail(dogObj) {
    const li = document.createElement('li')
    
    li.innerHTML = `
        <img src='${dogObj.image}' />
        <h2>${dogObj.name}</h2>
        <button id='button'>${dogObj.goodBad}</button>
    `
    dogInfo.appendChild(li) 

    const btn = document.querySelector('#button')
    btn.addEventListener('click', handleSwitchGoodBad)


}

// Event Handlers
function handleSwitchGoodBad(btn) {
    console.log(btn)
    if (btn.path[0].innerText === 'Good Dog!') {
        // console.log('Bad Dog!')
        btn.path[0].innerText= 'Bad Dog!'
    } else {
        btn.path[0].innerText = 'Good Dog!'
        // console.log('Good Dog!')
    }
}


// Initializer(s)
fetchAllDogs().then(renderAllDogs)