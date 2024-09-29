'use strict'

const button = document.querySelector('button')
const input = document.querySelector('input')

const convert = () => {
    const age = input.value
    const lower_limit = (220 - age) * 0.65
    const upper_limit = (220 - age) * 0.85
    document.querySelector('output').innerHTML = Math.round(lower_limit) + "-" + Math.round(upper_limit)
};

// Tapahtumankäsittelijä napin klikkaukselle
button.addEventListener('click', convert)

// Tapahtumankäsittelijä enter-näppäimen painallukselle
input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') { // Tarkistetaan, painettiinko enter-näppäintä
        event.preventDefault() // estetään sivun virkistys
        convert()
    }
})