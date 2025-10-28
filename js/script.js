const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.elementos-menu');

        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Dropdown
        const dropdownToggles = document.querySelectorAll('.intercalar-secoes');

        dropdownToggles.forEach(toggle => {
            toggle.addEventListener('click', (e) => {
                e.preventDefault();
                const dropdown = toggle.parentElement;
                const menu = toggle.nextElementSibling;
                
                // Fecha outros dropdowns abertos
                document.querySelectorAll('.secoes-menu').forEach(otherMenu => {
                    if (otherMenu !== menu && window.innerWidth > 768) {
                        otherMenu.style.display = 'none';
                    }
                });
                
                // Alterna o menu atual
                if (window.innerWidth > 768) {
                    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
                } else {
                    dropdown.classList.toggle('active');
                }
            });
        });

        // Fecha o dropdown quando clica fora
        document.addEventListener('click', (e) => {
            if (window.innerWidth > 768) {
                const isDropdown = e.target.matches('.intercalar-secoes') || 
                                 e.target.closest('.intercalar-secoes') ||
                                 e.target.matches('.secoes-menu') || 
                                 e.target.closest('.secoes-menu');
            
                if (!isDropdown) {
                    document.querySelectorAll('.secoes-menu').forEach(menu => {
                        menu.style.display = 'none';
                    });
                }
            }
        });

        // Carrossel
        const carouselInner = document.querySelector('.carrosel-interno');
        const dots = document.querySelectorAll('.ponto');
        let currentSlide = 0;
        const totalSlides = document.querySelectorAll('.slide-carrosel').length;

        function goToSlide(slideIndex) {
            carouselInner.style.transform = `translateX(-${slideIndex * 100}%)`;
            dots.forEach(dot => dot.classList.remove('ponto-ativo'));
            dots[slideIndex].classList.add('ponto-ativo');
            currentSlide = slideIndex;
        }

        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                const slideIndex = parseInt(dot.getAttribute('data-slide'));
                goToSlide(slideIndex);
            });
        });

        goToSlide(0);

        // Auto-slide
        setInterval(() => {
            currentSlide = (currentSlide + 1) % totalSlides;
            goToSlide(currentSlide);
        }, 5000);

//Formulário Avaliações 
var swiper = new Swiper(".carrosel-form", {
  loop: true, 
  speed: 500,
  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true, 
  },
  allowTouchMove: true,
});

document.querySelectorAll('.avaliacao-estrela input').forEach(input => {
  input.addEventListener('change', () => {
    console.log("Avaliação escolhida:", input.value);
  });
});

