// Render functie importeren
import {render} from './render.js'


// Alle const voor data fetchen
const main = document.querySelector('main')
const cors = 'https://cors-anywhere.herokuapp.com/'
const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q='
const query = 'ondernemen'
const key = '94b246d9246caa361b548deec6d3e32c'
const secret = '4289fec4e962a33118340c888699438d'
const detail = 'Default'
const url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json`

const config = {
  Authorization: `Bearer ${secret}`
};


// Data fetchen functie
export function getData() {
fetch(url, config)
  .then(response => {
    return response.json()
  })
  .then(data => {
    render(data)
  })
  .catch(err => {
    console.log(err)
    const errorMelding = document.querySelector('#errorMelding')
    errorMelding.textContent = 'De content kan niet geladen worden, check je verbinding.'

    const loader = document.querySelector('#loader')
    loader.remove()
  });
}