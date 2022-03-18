// render data
export function render(data) {
    const results = data.results
    console.dir(results)
    results.forEach((item, i) => {
      document.querySelector('#loader').style.display = 'none'
      const lijst = document.getElementById('resultaten')
      lijst.insertAdjacentHTML('beforeend',
      `
      <article>
        <h2>${item.titles[0]}</h2>
        <img src="${
          item.coverimages ? item.coverimages[1] : 'Geen samenvatting'
        }">
      </article>
      `
      )
    })
  }