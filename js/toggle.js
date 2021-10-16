// declare `hamburger` and `navbar`. 
const burger = document.querySelector('.hamburger')
const navBar = document.querySelector('nav')


// open and close navigation function.
const open = function() {
  navBar.classList.toggle('open-close')
  burger.classList.toggle('transformer')
  // console.log('I'm finally working')
}
burger.addEventListener('click', open)


// declare `bmoButton` variable to show `Finn and Jake`
const bmoButton = document.querySelector('.bmo')
const human = document.querySelector('.finn')
const dog = document.querySelector('.jake')

const charToggle = function() {
  human.classList.toggle('show-finn')
  dog.classList.toggle('show-jake')
  bmoButton.classList.toggle('bmo-color')
  // console.log('opensesame')
}

bmoButton.addEventListener('click', charToggle)