document.addEventListener('DOMContentLoaded', function() {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.setAttribute('role', 'button');
    header.setAttribute('tabindex', '0');
    header.setAttribute('aria-expanded', 'false');

    const section = header.closest('section');
    const content = section.querySelector('.accordion-content');

    function toggleAccordion() {
      const isActive = section.classList.toggle('active');
      header.setAttribute('aria-expanded', isActive ? 'true' : 'false');
    }

    header.addEventListener('click', toggleAccordion);
    header.addEventListener('keydown', event => {
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
