// script.js
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.carousel-slide');
    let currentSlide = 0;

    function showSlide(index) {
        // Remove a classe 'active' de todos os slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });

        // Adiciona a classe 'active' ao slide atual
        slides[index].classList.add('active');
    }

    function nextSlide() {
        // Incrementa o índice, voltando a 0 se chegar ao final
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Inicia o carrossel (troca de slide a cada 5 segundos)
    setInterval(nextSlide, 5000);

    // Mostra o primeiro slide ao carregar a página
    showSlide(currentSlide);

    console.log('Carrossel inicializado com sucesso!');
});