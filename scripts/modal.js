export class Modal {
  constructor() {
    this.modal = document.getElementById("modal");
    this.closeModalBtn = document.getElementById("close-modal");
    this.closeModalBtn.addEventListener("click", () => this.closeModal());
  }

  showModal() {
    this.modal.style.display = "flex";
  }

  closeModal() {
    this.modal.style.display = "none";
  }
}
