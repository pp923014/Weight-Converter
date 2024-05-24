let input = document.querySelector("#input");
let button = document.querySelector(".button");
let reset = document.querySelector(".Reset");

let d1 = document.querySelector(".s0");
let d2 = document.querySelector(".s1");
let d3 = document.querySelector(".s2");

let pound = 2.2;
let ounces = 35.27;
let grams = 1000;

button.addEventListener("click", () => {
  const storeValue = input.value;
  d1.textContent = storeValue * pound;
  d2.textContent = storeValue * ounces;
  d3.textContent = storeValue * grams;
});

reset.addEventListener("click", () => {
  d1.textContent = "";
  d2.textContent = "";
  d3.textContent = "";
  input.value = "";
});
