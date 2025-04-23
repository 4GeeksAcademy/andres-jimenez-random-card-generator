import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  let cardSuit = ["♦", "♥", "♠", "♣"];
  let cardNumber = [
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
    "K",
  ];

  const button = document.getElementById("button");

  button.addEventListener("click", function () {
    let randomCardNumber = randomGenerator(cardNumber);
    let randomCardSuit = randomGenerator(cardSuit);
    
    const number = document.getElementById("number");    
    const topSuit = document.getElementById("top-suit");
    const bottomSuit = document.getElementById("bottom-suit");
    
    number.innerHTML = randomCardNumber;
    topSuit.innerHTML = randomCardSuit;
    bottomSuit.innerHTML = randomCardSuit;

    let suitColor = "red";
    if (randomCardSuit === "♠" || randomCardSuit === "♣") {
      suitColor = "black";
    }

    topSuit.style.color = suitColor;
    bottomSuit.style.color = suitColor;
    number.style.color = suitColor;


  });
  function randomGenerator(array) {
      let result = Math.floor(Math.random() * array.length);
      return array[result];
    }
};
