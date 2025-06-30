const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav-menu');

toggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});











// Efeito de rolagem suave para links do menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Efeito de aparecer elementos conforme rolagem
const scrollElements = document.querySelectorAll('.scroll-effect');

const elementInView = (el) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <= (window.innerHeight || document.documentElement.clientHeight)
    );
};

const displayScrollElement = (element) => {
    element.classList.add('active');
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 100)) {
            displayScrollElement(el);
        }
    });
};

window.addEventListener('scroll', () => {
    handleScrollAnimation();
});

// Inicializa alguns elementos como visíveis
document.addEventListener('DOMContentLoaded', () => {
    handleScrollAnimation();
});

// Botão do WhatsApp
const whatsappBtn = document.querySelector('.btn-agendar');
whatsappBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.open('https://wa.me/SEUNUMERO', '_blank');
});