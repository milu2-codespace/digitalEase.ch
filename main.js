// Navigation Toggle (Burger-Menü)
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('#nav-list');

  if (toggle && navList) {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', !expanded);
      navList.classList.toggle('open');
    });
  }
});

// Accordions
document.addEventListener('DOMContentLoaded', function() {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  const accordionTriggers = document.querySelectorAll('.accordion-trigger');

  accordionTriggers.forEach(trigger => {
    trigger.setAttribute('aria-expanded', 'false');
    /*
    header.setAttribute('role', 'button');
    header.setAttribute('tabindex', '0');
    header.setAttribute('aria-expanded', 'false');
 */
    const section = trigger.closest('section');
    const content = section.querySelector('.accordion-content');

    function toggleAccordion() {
      const isActive = section.classList.toggle('active');
      header.setAttribute('aria-expanded', isActive ? 'true' : 'false');
    }

    trigger.addEventListener('click', toggleAccordion);
    
    trigger.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggleAccordion();
      }
    });

    if (!section.classList.contains('active')) {
      content.style.display = 'block';
    }
  });
});
