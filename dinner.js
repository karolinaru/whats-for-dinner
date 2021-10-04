document.querySelector('.start-button').addEventListener('click', function(event) {
    buttonClick(event.target.innerText);
})

const startButton = document.querySelector(".start-button")
const answer = document.querySelector(".answer")
const dinner = document.querySelector(".dinner")

const answers = ["Pizza", "PadThai", "Carbonara", "Spaghetti", "Potato salad", "Dumplings", "Khachapuri", "Shrimps", "Salmon", "Fish & Chips", "Ramen", "Sushi", "Pancakes", "Sandwiches", "Chicken Tikka Masala", "Steak", "Burgers", "Butter Chicken", "Noodles", "Salad", "Apple pie"]

function shuffleAnswers(){
  return answers.sort((a, b) => 0.5 - Math.random());
}

let shuffledAnswers = shuffleAnswers();
let randomIndex = Math.floor(Math.random() * answers.length)

let result = shuffledAnswers[randomIndex]

function buttonClick() {
  dinner.innerText = result;
  startButton.innerText = "Give me another idea";
  executeAgain();
}


function executeAgain(){
  shuffleAnswers();
  let randomIndex = Math.floor(Math.random() * answers.length);
  let result = shuffledAnswers[randomIndex];
  dinner.innerText =  "Let's eat: \n" + result;
}
