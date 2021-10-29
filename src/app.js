/* eslint-disable */
import "bootstrap";
import "./style.css";

let cards = {
  topSymbol: ["&#9830", "&#9829", "&#9824", "&#9827"],
  downSymbol: ["&#9830", "&#9829", "&#9824", "&#9827"],
  cardNumbers: [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ]
};

let numbersAndSymbols = () => {
  let allNumbers = Math.floor(Math.random() * cards.cardNumbers.length);
  document.querySelector("#cardRandomNumber").innerHTML =
    cards.cardNumbers[allNumbers];

  let allSymbols = Math.floor(Math.random() * cards.topSymbol.length);
  document.querySelector("#topSymbol").innerHTML = cards.topSymbol[allSymbols];
  document.querySelector("#bottomSymbol").innerHTML =
    cards.topSymbol[allSymbols];

  if (
    cards.topSymbol[allSymbols] === "&#9830" ||
    cards.topSymbol[allSymbols] === "&#9829"
  ) {
    document.querySelector("#cardId").classList.add("symbolRed");
  } else if (
    cards.topSymbol[allSymbols] === "&#9827" ||
    cards.topSymbol[allSymbols] === "&#9824"
  ) {
    document.querySelector("#cardId").classList.remove("symbolRed");
  }
};

window.addEventListener("load", numbersAndSymbols);
