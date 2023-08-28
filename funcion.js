const buscar = document.querySelector('.buscar');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

btn.addEventListener('click', () => {
    buscar.classList.toggle('on');
    input.focus()
})