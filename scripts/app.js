const navbtn =document.querySelector('.nav__btn')

navbtn.addEventListener('click',function (){
  this.classList.toggle('nav__btn--open')
})