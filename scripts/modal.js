const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("close-modal");

export function showModal() {
  modal.style.display = "flex";
}

export function closeModal() {
  modal.style.display = "none";
}

closeModalBtn.addEventListener("click", closeModal);
