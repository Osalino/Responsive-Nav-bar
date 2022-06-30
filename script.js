const togglebtn = document.getElementById('nav')
const navbarLinks = document.getElementById('links');

togglebtn.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})