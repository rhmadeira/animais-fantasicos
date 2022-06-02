function initTabNav() {

  const tabMenu = document.querySelectorAll('.js-tabmenu li')
  const tabContent = document.querySelectorAll('.js-tabcontent')

  if (tabMenu.length && tabContent.length) {

    tabContent[0].classList.add("ativo")

    function activeTab(index) {
      tabContent.forEach(section => section.classList.remove("ativo"))
      tabContent[index].classList.add("ativo")
    }

    tabMenu.forEach((item, index) => {
      item.addEventListener("click", () => activeTab(index))
    })
  }
}
initTabNav();

function initAcordion() {
  const questions = document.querySelectorAll(".js-accordion dt")

  if (questions.length) {

    questions[0].classList.add("comeDown")
    questions[0].nextElementSibling.classList.add("comeDown")


    function activeAccordion() {
      this.nextElementSibling.classList.toggle("comeDown")
      this.classList.toggle("comeDown")
    }

    questions.forEach(item => item.addEventListener("click", activeAccordion))
  }

}
initAcordion()

function initSmoothScroll() {

  const linksInternos = document.querySelectorAll(".js-menu a[href^='#']")

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
initSmoothScroll()

function initAnimaScroll() {

  const section = document.querySelectorAll('.js-scroll');

  if (section.length) {
    const middleScreen = window.innerHeight * 0.6;

    function animaScroll() {
      section.forEach(item => {
        const distanceTop = item.getBoundingClientRect().top - middleScreen
        if (distanceTop <= 0) {
          item.classList.add("ativo")
        }
      })

    }

    animaScroll()

    document.addEventListener('scroll', animaScroll)
  }
}
initAnimaScroll()