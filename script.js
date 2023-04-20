/////////////// MODAL WINDOW //////////////////

const openModalButton = document.querySelector(".hello-btn");
const closeModalButton = document.querySelector(".modal-close-btn");
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

/////////// LIGHT TO DARK /////////////////
// check for saved 'lightMode' in localStorage
let lightMode = localStorage.getItem("lightMode");
const toggle = document.querySelector(".nav-toggle");

const enableLightMode = function () {
  document.body.classList.add("light");
  localStorage.setItem("lightMode", "enabled");
};

const disableLightMode = () => {
  document.body.classList.remove("light");
  localStorage.setItem("lightMode", null);
};

if (lightMode === "enabled") {
  enableLightMode();
}

toggle.addEventListener("click", function () {
  console.log("click");
  // get their light setting
  lightMode = localStorage.getItem("lightMode");

  // if it not current enabled, enable it
  if (lightMode !== "enabled") {
    enableLightMode();
    // if it has been enabled, turn it off
  } else {
    disableLightMode();
  }
});
