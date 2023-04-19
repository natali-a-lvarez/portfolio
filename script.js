// MODAL WINDOW

const openModalButton = document.querySelector(".hello-btn");
const closeModalButton = document.querySelector(".modal-close-btn");
console.log(closeModalButton);
const overlay = document.getElementById("overlay");

openModalButton.addEventListener("click", () => {
  const modal = document.querySelector(".modal");
  openModal(modal);
});

overlay.addEventListener("click", () => {
  const modal = document.querySelector(".modal.active");
  closeModal(modal);
});

closeModalButton.addEventListener("click", () => {
  const modal = closeModalButton.closest(".modal");
  closeModal(modal);
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}
