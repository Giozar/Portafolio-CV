import './style.css'
import { init, renderProject } from './src/app'

const project = document.querySelector('.project');
const op1 = document.querySelector('.op1');
const op2 = document.querySelector('.op2');
const op3 = document.querySelector('.op3');

// nuevo
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const slides = document.querySelectorAll('.gallery img');
prev.addEventListener('click', ()=>{
    init('left', slides);
})
next.addEventListener('click', ()=>{
    init('right', slides);
})
// nuevo

op1.addEventListener('click', ()=>{
    const op = 1;
    renderProject(project,op);

    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    const slides = document.querySelectorAll('.gallery img');
    prev.addEventListener('click', ()=>{
        init('left', slides);
    })
    next.addEventListener('click', ()=>{
        init('right', slides);
    })
})


op2.addEventListener('click', ()=>{
    const op = 2;
    renderProject(project, op);
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    const slides = document.querySelectorAll('.gallery img');
    prev.addEventListener('click', ()=>{
        init('left', slides);
    })
    next.addEventListener('click', ()=>{
        init('right', slides);
    })
})


op3.addEventListener('click', ()=>{
    const op = 3;
    renderProject(project, op);
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    const slides = document.querySelectorAll('.gallery img');
    prev.addEventListener('click', ()=>{
        init('left', slides);
    })
    next.addEventListener('click', ()=>{
        init('right', slides);
    })
})