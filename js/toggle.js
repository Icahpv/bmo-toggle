const burger = document.querySelector('.hamburger')
const navBar = document.querySelector('nav')


/* open and close */
const open = function() {
  navBar.classList.toggle('open-close')
  burger.classList.toggle('transformer')
  // console.log('open')
}
burger.addEventListener('click', open)
