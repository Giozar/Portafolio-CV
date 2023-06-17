import './style.css'
import { init, renderProject } from './src/app'

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

prev.addEventListener('click', ()=>{
    init('left');
})
next.addEventListener('click', ()=>{
    init('right');
})


const project = document.querySelector('.project');
const op1 = document.querySelector('.op1');

op1.addEventListener('click', ()=>{
    renderProject(project);
})