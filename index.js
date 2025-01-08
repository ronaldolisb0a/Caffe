const menu = document.querySelector("#menu-hamburguer")
const navbar = document.querySelector(".navbar")

menu.addEventListener('click', () => {
  navbar.classList.toggle('ativo')
})
