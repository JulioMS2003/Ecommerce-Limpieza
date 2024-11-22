const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let offset = 0;

prevBtn.addEventListener('click', () => {
  offset += 300; // Ajusta según el ancho de las tarjetas
  carousel.style.transform = `translateX(${offset}px)`;
});

nextBtn.addEventListener('click', () => {
  offset -= 300; // Ajusta según el ancho de las tarjetas
  carousel.style.transform = `translateX(${offset}px)`;
});
