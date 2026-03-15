const quoteDiv = document.querySelector(".quote");
let fontSize = 16;

const main = document.querySelector("main");
main.addEventListener("click", (e) => {
    if (!e.target.matches(".btn")) return;

    let value = e.target.dataset.value;
    let action = e.target.dataset.action;

    if (action == "kleur") {
        quoteDiv.style.backgroundColor = value;
    }
    else if (action == "grootte") {
        fontSize = Math.max(fontSize + Number(e.target.dataset.value), 0); // nooit negatief
        quoteDiv.style.fontSize = fontSize + "px";
    }
    else if (action == "reset") {
        fontSize = 16;
        quoteDiv.style.backgroundColor = "";
        quoteDiv.style.fontSize = fontSize + "px";
    }
})
