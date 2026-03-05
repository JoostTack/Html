const quoteDiv = document.querySelector(".quote");

const blauwBtn = document.querySelector(".blauw");
const groenBtn = document.querySelector(".groen");
const kleinerBtn = document.querySelector(".kleiner");
const groterBtn = document.querySelector(".groter");
const resetBtn = document.querySelector(".reset");

let fontSize = 16;

blauwBtn.addEventListener("click", () => {
    quoteDiv.style.backgroundColor = "lightblue";
});

groenBtn.addEventListener("click", () => {
    quoteDiv.style.backgroundColor = "lightgreen";
});

kleinerBtn.addEventListener("click", () => {
    fontSize = Math.max(fontSize - 2, 0); // nooit negatief
    quoteDiv.style.fontSize = fontSize + "px";
});

groterBtn.addEventListener("click", () => {
    fontSize += 4;
    quoteDiv.style.fontSize = fontSize + "px";
});

resetBtn.addEventListener("click", () => {
    fontSize = 16;
    quoteDiv.style.backgroundColor = "";
    quoteDiv.style.fontSize = fontSize + "px";
});
