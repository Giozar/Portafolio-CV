import './style.css'
import { init } from './src/app'

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

prev.addEventListener('click', ()=>{
    init('left');
})
next.addEventListener('click', ()=>{
    init('right');
})
