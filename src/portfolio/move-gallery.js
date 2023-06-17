
let currentSlide = 0;

export let changeSlide = (direction, slides) => {
    slides[currentSlide].classList.remove('slide-right');
    slides[currentSlide].classList.remove('slide-left');

    if (direction === 'left') {
        currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
        slides[currentSlide].classList.add('slide-left');
    } else if (direction === 'right') {
        currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
        slides[currentSlide].classList.add('slide-right');
    }
}
