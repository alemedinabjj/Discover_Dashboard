const section = document.querySelector('section')
const btnMenu = document.querySelector('.menu')
const search = document.querySelector('.search')
const options = document.querySelector('.options')
const logo = document.querySelector('.vetLogo')
const atribute = document.querySelectorAll('.atribute')

const inputSearch = document.querySelector('.search input')
const closeBtn = document.querySelector('.close')
const userShow = document.querySelector('.user_show')
console.log(inputSearch)

btnMenu.addEventListener('click', function() {
  section.classList.toggle('show')
  btnMenu.classList.toggle('show')
  search.classList.toggle('show')
  options.classList.toggle('show')
  logo.classList.toggle('show')
  inputSearch.classList.toggle('show')
  userShow.classList.toggle('show')
  closeBtn.classList.toggle('show')
  atribute.forEach(function(element) {
    element.classList.toggle('show')
  })
})
console.log(section)


