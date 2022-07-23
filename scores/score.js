const box = document.getElementsByClassName('e');
var highscore = JSON.parse(localStorage.getItem('highScore'));
highscore = Array.from(highscore);
console.log(highscore);
highscore.forEach(element => {
  var tag = document.createElement('div');
  tag.classList.add('tag');
  var name = document.createElement('div');
  var score = document.createElement('div');
  document.createTextNode(element.key);
  var nameT = document.createTextNode(element.key);
  var scoreT = document.createTextNode(element.value);
  name.appendChild(nameT);
  score.appendChild(scoreT);
  score.classList.add('score');
  name.classList.add('name');
  tag.appendChild(name);
  tag.appendChild(score);
  box[0].appendChild(tag);
});
var button = document.getElementsByClassName('icon');
button[0].addEventListener('click', () => {
    window.location.assign('../homepage/homepage.html');
});
