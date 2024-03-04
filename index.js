const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  let content = header.nextElementSibling;
  header.addEventListener('click', () => {
    header.classList.toggle('active');
    content.classList.toggle('active');
  });
  header.addEventListener('keydown', (event) => {
    console.log('lhara\n');
    if (event.key === 'Enter') {
      header.classList.toggle('active');
      content.classList.toggle('active');
  }
  });
});