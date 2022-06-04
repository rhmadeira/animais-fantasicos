export default function initSmoothScroll() {

  const linksInternos = document.querySelectorAll('[data-menu="smooth"] a[href^="#"]')

  function smoothScroll(event) {
    event.preventDefault();
    const href = this.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
  linksInternos.forEach(item => item.addEventListener("click", smoothScroll))

}