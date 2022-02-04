document.addEventListener('DOMContentLoaded', () => {
  const emptyAnchors = Array.from(document.querySelectorAll('a[href="#"]'));
  const formSearch = document.querySelector('form#formSearch');

  if (emptyAnchors.length > 0) {
    emptyAnchors.forEach((anchor) => {
      anchor.addEventListener('click', (e) => e.preventDefault());
    });
  }

  if (formSearch) {
    formSearch.addEventListener('submit', (e) => {
      e.preventDefault();
    });
  }
});
