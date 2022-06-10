export default function initDropdownMenu() {


}

const dropdownMenus = document.querySelectorAll('[data-dropdown]')

function handleClick(e) {
  e.preventDefault()
  this.classList.add("active")
  outsideClick(this, () => this.classList.remove("active"))
};


function outsideClick(element, callb) {
  const html = document.documentElement;
  const outside = "data-outside"

  if (!element.hasAttribute(outside)) {
    html.addEventListener("click", handleOutsideClick)
    element.setAttribute(outside, "")
  }
  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside, "")

      html.removeEventListener('click', handleOutsideClick)
      callb();
    }


  }
}


dropdownMenus.forEach(item => {
  ["touchstart", "click"].forEach(event => {
    item.addEventListener(event, handleClick)
  })
})












