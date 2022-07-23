const question = document.getElementById('question');
let choices = Array.from(document.getElementsByClassName('answer'));
const maxtours = 5;
var tour = 0;
var score = 0;
var width = 0;
let questions = [];
fetch("question.json").then(
  res => { return res.json(); }).then(loadquestions => {
  console.log(loadquestions);
  questions = loadquestions;
  const Currentquestions = [...questions];
  var availablequestions = Currentquestions;
  quizz(Currentquestions, availablequestions);
  }).catch(e => {console.log(e)});

function random (Currentquestions, availablequestions) {
  const questionindx = Math.floor(Math.random(Currentquestions.length) * (availablequestions.length - 1));
  return questionindx;
}
// function that verify if the answer is true or not
function verify (number, index, Currentquestions) {
  const trueanswer = (Currentquestions[index].correctIndex);
  console.log('trueeee', trueanswer);
  if (number == trueanswer) {
    return true;
  } else {
    return false;
  }
}
// function that initiate the game and fill the question and answers in the screen
function Game (index, availablequestions, Currentquestions) {
  console.log('eeeeee', availablequestions);
  const CurrentQuestion = availablequestions[index].question;
  question.innerText = CurrentQuestion;
  let progressBar = document.getElementsByClassName('progressBar')[0];
  progressBar.style.width = `${width}%`;
  choices.forEach(choice => {
    const number = choice.dataset.number;
    const answer = Currentquestions[index].answers[number - 1];
    choice.innerText = answer;
  });
  var numberQ = document.getElementsByClassName('numberQ');
  console.log(numberQ);
  var scoreclass = document.getElementsByClassName('score');
  numberQ[0].innerText = `Questions: ${tour} / ${maxtours}`;
  scoreclass[0].innerText = `Score: ${score}`;
}

// function that loops on how many times the player may play
function quizz (Currentquestions, availablequestions) {
  var index = random(Currentquestions, availablequestions);
  Game(index, availablequestions, Currentquestions);
  choices.forEach(choice => {
    choice.addEventListener('click', e => {
      console.log('answeer', e.srcElement.dataset.number);
      if (verify(e.srcElement.dataset.number, index, Currentquestions) == true) {
        score += 1;
        e.target.parentElement.classList.add('green');
        setTimeout(() => {
          e.target.parentElement.classList.remove('green');
        }, 1000
        );
      } else {
        let theCorrectElement = document.querySelectorAll(`[data-number='${Currentquestions[index].correctIndex}']`)[0];
        e.target.parentElement.classList.add('red');
        setTimeout(() => {
          e.target.parentElement.classList.remove('red');
        }, 1000);
        theCorrectElement.parentElement.classList.add('green');
        setTimeout(() => {
          theCorrectElement.parentElement.classList.remove('green');
        }, 1000);
      }
      if (tour < 5) {
        tour += 1;
        availablequestions.splice(index, 1);
        index = random(Currentquestions, availablequestions);
        setTimeout(() => {
          width = width + (100 / 5);
          Game(index, availablequestions, Currentquestions);
        }, 1015);
      } else {
        localStorage.setItem('Rscore', score);
        window.location.assign('../end/end.html');
      }
    });
  });
}
