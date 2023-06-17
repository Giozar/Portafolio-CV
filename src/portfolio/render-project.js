const evidencias = [
    {
        evidencia: 1,
        projectName: 'Reposteria',
        imgUrl: 'reposteria/reposteria',
        description: 'Hola esta página web es una reposteria',
    },
    {
        evidencia: 2,
        projectName: 'Gimnasio',
        imgUrl: 'gym/gym',
        description: 'Hola esta página web es un gimnasio',
    },

    {
        evidencia: 3,
        projectName: 'BlackJack',
        imgUrl: 'blackjack/blackjack',
        description: 'Hola esta página web es un juego de cartas',
    },
]

export const project = (element, op) => {
    const option = op;
    console.log(option);
    const projectContent = document.createElement('div');
    projectContent.classList.add('project-content');

    const projetTitle = document.createElement('h2');
    projetTitle.innerHTML = evidencias[op-1].projectName;

    const gallery = document.createElement('gallery');
    gallery.classList.add('gallery');

    const prev = document.createElement('div');
    prev.classList.add('prev');
    prev.innerHTML = '&#10094;';
    const next = document.createElement('div');
    next.classList.add('next');
    next.innerHTML = '&#10095;';

    gallery.append(prev,next);
    let images = [];
    for (let i = 0; i < 3; i++) {
        images[i] = document.createElement('img');
        images[i].src = `/assets/trabajos/${evidencias[op-1].imgUrl}${i+1}.jpg`;
        images[i].alt = `Evidencia ${i+1}`;
        gallery.append(images[i]);
    }

    const descriptionProject = document.createElement('p');
    descriptionProject.innerHTML = evidencias[op-1].description;
    
    projectContent.append(projetTitle, gallery, descriptionProject);
    element.innerHTML = '';
    element.append(projectContent);
}