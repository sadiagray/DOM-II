import './less/index.less'

// Your code goes here!

//first event load
window.onload = function (evt) {
    console.log('event ${evt.type} fired!')
    const heading = document.querySelector('h1')
    heading.textContent = 'Ready!'

 //second event copy
 window.addEventListener('copy', () => {
    navigator.clipboard.readText()
    .then(text => {
        heading.textContent += text 
    })
 })

 // third event click
 document.body.addEventListener('click', evt => {
    evt.target.classList.toggle('mirror')
 })

 //fourth event dblclick
 document.body.addEventListener('dblclick', evt => {
    evt.target.outerHTML = ''
 })

 // fifth event keydown
 window.addEventListener('keydown', evt => {
    if (evt.key == 0) {
        document.body.innerHTML = '<h1>F in the chat<h1>'
    }
 })

 // sixth event mousemovee
 document.body.addEventListener('mousemove' , evt => {
    const {clientX, clientY} = evt 
    console.log('The mouse is at ${clientX}, ${clientY}')
 })

 // seventh event mouseenter

 //eighth event mouseleave
 const destinations = document.querySelectorAll('.destination')
 for (let destination of destinations) {
    destination.addEventListener('mouseenter', evt => {
        destination.getElementsByClassName.fontWeight = 'bold'
    })
    destination.addEventListener('mouseleave' , () => {
        destination.style.fontWeight = 'initial'
    })
 }
}


