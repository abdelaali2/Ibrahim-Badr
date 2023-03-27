const line1 = `Ibrahim Badr`;
const line2 = `Electronics Engineer`;
const line3 = `Communication Engineer`;
const line4 = `Software Engineer`;
const line5 = `Welcome to my Portfolio`;
const lineTransition = 5000;
const interval = 50;
const dynamicText = document.getElementById("dynamicText");
const loadingContainer = document.querySelector("#loadingContainer");
const pageContent = document.querySelectorAll("#loadingContainer ~ *");

document.addEventListener("keyup", function (event) {
  if (event.key === "Escape") {
    toast.hide();
  }
});

const cursor = document.getElementById("cursor");
let i = 0;
var typing = false;

setInterval(() => {
  if (!typing) {
    cursor.children[0].classList.toggle("displayNone");
  }
}, 450);

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function simulateTyping() {
  const functions = [
    typeLine1,
    resetText,
    typeLine2,
    resetText,
    typeLine3,
    resetText,
    typeLine4,
    resetText,
    typeLine5,
    resetText,
  ];
  let counter = 0;

  while (true) {
    await functions[counter]();
    counter = (counter + 1) % functions.length;
    if (counter % 2 == 0) {
      await new Promise((resolve) => setTimeout(resolve, 1080));
    } else {
      await new Promise((resolve) => setTimeout(resolve, lineTransition));
    }
  }
}

async function typeLine1() {
  let i = 0;
  typing = false;
  setInterval(() => {
    if (i < line1.length) {
      dynamicText.innerHTML += line1.charAt(i);
      i++;
      typing = true;
    } else {
      typing = false;
    }
  }, interval);
}

async function typeLine2() {
  let i = 0;
  typing = false;
  setInterval(() => {
    if (i < line2.length) {
      dynamicText.innerHTML += line2.charAt(i);
      i++;
      typing = true;
    } else {
      typing = false;
    }
  }, interval);
}

async function typeLine3() {
  let i = 0;
  typing = false;
  setInterval(() => {
    if (i < line3.length) {
      dynamicText.innerHTML += line3.charAt(i);
      i++;
      typing = true;
    } else {
      typing = false;
    }
  }, interval);
}

async function typeLine4() {
  let i = 0;
  typing = false;
  setInterval(() => {
    if (i < line4.length) {
      dynamicText.innerHTML += line4.charAt(i);
      i++;
      typing = true;
    } else {
      typing = false;
    }
  }, interval);
}

async function typeLine5() {
  delay();
  let i = 0;
  typing = false;
  setInterval(() => {
    if (i < line5.length) {
      dynamicText.innerHTML += line5.charAt(i);
      i++;
      typing = true;
    } else {
      typing = false;
    }
  }, interval);
}

async function resetText() {
  var intervalFunction = setInterval(() => {
    dynamicText.innerText = dynamicText.innerText.slice(0, -1);
    if (dynamicText.innerText === "") {
      clearInterval(intervalFunction);
    }
  }, interval);
}

pageContent.forEach((node) => {
  node.classList.toggle("displayNone");
});

window.addEventListener("load", () => {
  loadingContainer.style.display = "none";
  pageContent.forEach((node) => {
    node.classList.toggle("displayNone");
  });
  simulateTyping();
});
