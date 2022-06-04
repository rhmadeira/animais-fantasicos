export default function initAnimaScroll() {

  const section = document.querySelectorAll('[data-anime="scroll"]');

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