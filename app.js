const modalEL = document.querySelector(".modal-container");
const linkEl = document.querySelectorAll(".icon");

function openModal() {
  modalEL.classList.add("active");
}
function closeModal() {
  modalEL.classList.remove("active");
}

function notify() {
  linkEl.forEach((link) => {
    link.classList.add("active");
  });
}
console.log(linkEl);
