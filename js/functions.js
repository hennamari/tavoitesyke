'use strict'

const button = document.querySelector('button')

const convert = () => {
    const age = document.querySelector('input').value
    const lower_limit = (220 - age) * 0.65
    const upper_limit = (220 - age) * 0.85
    document.querySelector('output').innerHTML = lower_limit + "-" + upper_limit
}

button.addEventListener('click', convert)