const toastEl = document.getElementById("myToast");
const toast = new bootstrap.Toast(toastEl);

function showToast() {
  toast.show();
  toastEl.blur();
}
document.addEventListener("keyup", function (event) {
  if (event.key === "Escape") {
    toast.hide();
  }
});

const line1 = `Ibrahim Badr`;
const delay = 50;
const container = document.getElementById("textContainer");
let i = 0;

setInterval(()=>{
  if (i < line1.length) {
    container.innerHTML += line1.charAt(i);
    i++;
  }
}, delay);

const loadingContainer = document.querySelector("#loadingContainer");
const pageContent = document.querySelectorAll("#loadingContainer ~ *");
pageContent.forEach((node) => {
  node.classList.toggle("displayNone");
  console.log(node.classList.toString());
});

window.addEventListener("load", ()=>{
  loadingContainer.style.display = "none";
  pageContent.forEach((node) => {
    node.classList.toggle("displayNone");
  });
});

// setTimeout(() => {
//   loadingContainer.style.display = "none";
//   pageContent.forEach((node) => {
//     node.classList.toggle("displayNone");
//     console.log(node.classList.toString());
//   });
// }, 4000);
