// Write your code here!
// let element = document.createElement('div')
// document.body.append(element)

// let ul = document.createElement('ul')
// for (let i=1; i<=4; i++){
//     let li = document.createElement('li')
//     li.textContent = i
//    ul.append(li)
// }
// element.append(ul)

// let main = document.querySelector('#main')
// main.innerHTML = `<h1>Hey Hey Mbappe</h1> <br>
// <h3> Merry Xmas</h3>
// <small>fine monday</small>
// `
// main.style.color = 'red'
// main.style.backgroundColor = 'yellow'
// main.style.lineHeight = 4


// 1
const main = document.querySelector('#main')
main.remove()


// 2
const newHeader = document.createElement('h1')

document.body.append(newHeader)

newHeader.textContent= "Chacha is the champion"
newHeader.id = 'victory'



