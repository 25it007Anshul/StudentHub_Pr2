document.addEventListener('DOMContentLoaded', () => {
  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.site-nav a').forEach((link) => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });

  document.querySelectorAll('form[data-demo-form]').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const message = form.querySelector('.form-message');
      if (message) message.classList.add('show');
      form.reset();
    });
  });
});
