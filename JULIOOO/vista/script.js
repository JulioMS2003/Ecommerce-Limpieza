const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

document.querySelector('.prev').addEventListener('click', () => {
    moveSlide(-1);
});

document.querySelector('.next').addEventListener('click', () => {
    moveSlide(1);
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        moveToSlide(index);
    });
});

function moveSlide(direction) {
    currentIndex = (currentIndex + direction + dots.length) % dots.length;
    updateSlider();
}

function moveToSlide(index) {
    currentIndex = index;
    updateSlider();
}

function updateSlider() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}
