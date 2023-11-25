const openModalBtnElement = document.querySelector("#openModal");
const modalElement = document.querySelector(".modal");
const modalOverlayElement = document.querySelector(".modal__overlay");
const modalContentElement = document.querySelector(".modal__content");
openModalBtnElement.addEventListener("click", () => {
  modalElement.classList.add("open");
});
modalContentElement.addEventListener("click", () => {
  modalElement.classList.remove("open");
});

modalOverlayElement.addEventListener("click", () => {
  modalElement.classList.remove("open");
});
