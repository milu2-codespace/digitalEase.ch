document.addEventListener('DOMContentLoaded', function() {
  // Set current year in copyright
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
  
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  
  accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
      const section = this.closest('section');
      const content = section.querySelector('.accordion-content');
      
      // Toggle active class
      section.classList.toggle('active');
      
      // Toggle content visibility
      if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
      } else {
        content.style.display = 'none';
      }
    });
  });
});
