// Alle const voor zoeken
const cors = 'https://cors-anywhere.herokuapp.com/'
const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q='
const key = '94b246d9246caa361b548deec6d3e32c'
const detail = 'Default'
const searchContent = document.querySelector('#resultaten')
const zoekbalk = document.getElementById('zoekbalk')


// Zoekfunctie
export function zoekData(zoekValue){
    const zoekInput = `${cors}${endpoint}${zoekValue}&authorization=${key}&detaillevel=${detail}&output=json`
    console.log(zoekInput)
    fetch(zoekInput)
    .then(function(response) {
        return response.json();
    }).then(function(data){
        console.log('Je zocht op ' + zoekValue)
        renderZoekData(data)
    }).catch((error) => {
        console.log(error);
        console.log('An error occured, please try again.')
    })
}



// Render zoekresultaten
function renderZoekData(data){

    const resultaten = document.querySelector('#resultaten')
    resultaten.textContent = ''

    const zoekResultaten = data.results
    console.dir(zoekResultaten)
    zoekResultaten.forEach((item, i) => {
        const content = `
                <article>
                  <h3>${item.titles[0]}</h3>
                  <img src="${
                    item.coverimages ? item.coverimages[1] : 'Geen samenvatting'
                  }">
                </article>
              `;
        searchContent.insertAdjacentHTML('beforeend', content);
      }
    )
}