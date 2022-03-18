// Data ophalen importeren en aanroepen
import { getData } from './modules/data.js'

getData()



import {zoekData} from './modules/search.js'

// Zoekfunctie eventlistener
document.getElementById('zoekForm').addEventListener('submit', function(prevent){
  prevent.preventDefault()
  const zoekBalk = document.querySelector('#zoekbalk')
  let zoekValue = zoekBalk.value
  zoekData(zoekValue);
})




// Zoekfunctie uitleg verschijnen
function zoekUitleg(){
  document.querySelector('#suggesties').style.display = 'block'
}

document.querySelector('form input').addEventListener('click', zoekUitleg)


// Zoekfunctie uitleg weg
function zoekUitlegWeg(){
  document.querySelector('#suggesties').style.display = 'none'
}

document.getElementById('resultaten').addEventListener('mouseover', zoekUitlegWeg)
document.getElementById('collectie').addEventListener('mouseover', zoekUitlegWeg)






 