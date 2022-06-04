export default function initModal() {

  const btnAbrir = document.querySelector("[data-modal='abrir']")
  const btnFechar = document.querySelector("[data-modal='fechar']")
  const btnModal = document.querySelector("[data-modal='container']")

  if (btnAbrir && btnModal) {
    function toggleModal(e) {
      e.preventDefault()
      btnModal.classList.toggle("ativo")
    }

    function sairModal(e) {
      if (e.target === this) {
        toggleModal(e)
      }
    }

    btnAbrir.addEventListener("click", toggleModal);
    btnFechar.addEventListener("click", toggleModal);
    btnModal.addEventListener("click", sairModal);
  }
}






