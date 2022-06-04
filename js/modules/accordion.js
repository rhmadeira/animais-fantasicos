export default function initAcordion() {
  const questions = document.querySelectorAll('[data-anime="accordion"] dt')

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
