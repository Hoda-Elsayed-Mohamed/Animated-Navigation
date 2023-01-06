const buttonEl = document.querySelector('.icon')
const navEl = document.querySelector('nav')

buttonEl.addEventListener('click', ()=>{
    navEl.classList.toggle('active')
})