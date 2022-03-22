// "use strict";

// VARIABLE DECLARATION

const modal1 = document.querySelector("#banner-bg-1");
const modal2 = document.querySelector("#banner-bg-2");
const modal3 = document.querySelector("#banner-bg-3");
const modal4 = document.querySelector("#banner-bg-4");
const btn1 = document.querySelector("#banner-link-1");
const btn2 = document.querySelector("#banner-link-2");
const btn3 = document.querySelector("#banner-link-3");
const btn4 = document.querySelector("#banner-link-4");
const btnClass = document.querySelectorAll("banner-link");

// FUNCTION DECLARATION

btn1.addEventListener("click", function () {
  modal1.classList.remove("hidden");
  modal2.classList.add("hidden");
  modal3.classList.add("hidden");
  modal4.classList.add("hidden");
  btn1.classList.add("active-link");
  btn2.classList.remove("active-link");
  btn3.classList.remove("active-link");
  btn4.classList.remove("active-link");
});

btn2.addEventListener("click", function () {
  modal2.classList.remove("hidden");
  modal1.classList.add("hidden");
  modal3.classList.add("hidden");
  modal4.classList.add("hidden");
  btn2.classList.add("active-link");
  btn1.classList.remove("active-link");
  btn3.classList.remove("active-link");
  btn4.classList.remove("active-link");
});

btn3.addEventListener("click", function () {
  modal3.classList.remove("hidden");
  modal1.classList.add("hidden");
  modal2.classList.add("hidden");
  modal4.classList.add("hidden");
  btn3.classList.add("active-link");
  btn1.classList.remove("active-link");
  btn2.classList.remove("active-link");
  btn4.classList.remove("active-link");
});

btn4.addEventListener("click", function () {
  modal4.classList.remove("hidden");
  modal1.classList.add("hidden");
  modal2.classList.add("hidden");
  modal3.classList.add("hidden");
  btn4.classList.add("active-link");
  btn1.classList.remove("active-link");
  btn2.classList.remove("active-link");
  btn3.classList.remove("active-link");
});

// function toggleClass(modal) {
//   modal1.classList.add("hidden");
//   modal2.classList.add("hidden");
//   modal3.classList.add("hidden");
//   modal4.classList.add("hidden");
//   modal.classList.remove("hidden");
// }

// function openOnCLick(btnId, modalId) {
//   btnId.addEventListener("click", toggleClass(modalId));
// }

// // **********************************************

// openOnCLick(btn1, modal1);
// openOnCLick(btn2, modal2);
// openOnCLick(btn3, modal3);
// openOnCLick(btn4, modal4);
