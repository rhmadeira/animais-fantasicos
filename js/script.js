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