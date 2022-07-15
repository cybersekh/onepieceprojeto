const buttonIntro = document.getElementById('embarque');
const welcome = document.getElementById('welcome');
const procurados = document.querySelectorAll('li');
const nav = document.getElementById('menu')

function intro() {
  welcome.classList.add('animate__bounceOut');
  setTimeout( () => {
    welcome.style.display = 'none';
    nav.style.visibility = 'visible';
    nav.classList.add('animate__bounceInDown');
  }, 600 )
}

function menu(event) {
  event.target.classList.add('animate__tada')
}

function removeMenu(event) {
  event.target.classList.remove('animate__tada')
}

buttonIntro.addEventListener ('click', intro)

for (let i = 0; i < procurados.length; i++) {
  const element = procurados[i];
  element.addEventListener ('mouseenter', menu)
  element.addEventListener ('mouseleave', removeMenu)
}
