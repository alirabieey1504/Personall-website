const nav__btn =document.querySelector('.nav__btn')
const menu__open =document.querySelector('.menu')

nav__btn.addEventListener('click',function (){
  this.classList.toggle('nav__btn--open')
  menu__open.classList.toggle('menu-open')
})
