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

//agendamento

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // anima só uma vez
      }
    });
  }, {
    threshold: 0.1
  });

  const elements = document.querySelectorAll('.scroll-effect');
  elements.forEach(el => observer.observe(el));



  document.addEventListener('DOMContentLoaded', function() {
    const carrossel = document.querySelector('.carrossel');
    const prevBtn = document.querySelector('.carrossel-prev');
    const nextBtn = document.querySelector('.carrossel-next');
    const indicatorsContainer = document.querySelector('.carrossel-indicators');
    const items = document.querySelectorAll('.gallery-item');
    
    let currentIndex = 0;
    const totalItems = items.length;
    
    // Cria indicadores
    items.forEach((_, index) => {
      const indicator = document.createElement('div');
      indicator.classList.add('carrossel-indicator');
      if(index === 0) indicator.classList.add('active');
      indicator.addEventListener('click', () => goToItem(index));
      indicatorsContainer.appendChild(indicator);
    });
    
    // Navegação
    function updateCarrossel() {
      carrossel.style.transform = `translateX(-${currentIndex * 100}%)`;
      
      // Atualiza indicadores
      document.querySelectorAll('.carrossel-indicator').forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
      });
    }
    
    function goToItem(index) {
      currentIndex = (index + totalItems) % totalItems;
      updateCarrossel();
    }
    
    function nextItem() {
      currentIndex = (currentIndex + 1) % totalItems;
      updateCarrossel();
    }
    
    function prevItem() {
      currentIndex = (currentIndex - 1 + totalItems) % totalItems;
      updateCarrossel();
    }
    
    // Event listeners
    nextBtn.addEventListener('click', nextItem);
    prevBtn.addEventListener('click', prevItem);
    
    // Opcional: Auto-play
    // setInterval(nextItem, 3000);
  });







