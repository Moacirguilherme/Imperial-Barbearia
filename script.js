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

//agendamento

  function abrirEscolha() {
    document.getElementById('escolha-barbeiro').style.display = 'block';
  }

  function redirecionarWhatsapp(barbeiro) {
    let url = '';

    if (barbeiro === 'barbeiro1') {
      url = 'https://wa.me/5599999999999?text=Olá%20João,%20quero%20agendar%20um%20serviço!';
    } else if (barbeiro === 'barbeiro2') {
      url = 'https://wa.me/5588888888888?text=Olá%20Carlos,%20quero%20agendar%20um%20serviço!';
    }

    window.open(url, '_blank');
  }
