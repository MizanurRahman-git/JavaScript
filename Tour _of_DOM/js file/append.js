const mainContainer = document.getElementById('main-container')



const placesSection = document.createElement('section')
const h1 = document.createElement('h1')
h1.innerText = 'My Favorite Books'
const ul = document.createElement('ul')
const li1 = document.createElement('li')
const li2 = document.createElement('li')
const li3 = document.createElement('li')
li1.innerText = 'Think And Go Rich'
li2.innerText = 'Peradoxical Sajid'
li3.innerText = 'Screat Of Zionism'


mainContainer.appendChild(placesSection)
placesSection.appendChild(h1)
placesSection.appendChild(ul)
ul.appendChild(li1)
ul.appendChild(li2)
ul.appendChild(li3)




// easier to create HTML


const acadamicBooks = document.createElement('section')
acadamicBooks.innerHTML = `
<h1>My Favorite Academic Books</h1>
<ul>
    <li>Math</li>
    <li>Physics</li>
</ul>
`

mainContainer.appendChild(acadamicBooks)