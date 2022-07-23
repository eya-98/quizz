const Rscore = localStorage.getItem('Rscore');
var scoreclass = document.getElementsByClassName('score');
scoreclass[0].innerText = `Score: ${Rscore}`;
var highscore = JSON.parse(localStorage.getItem('highScore')) || [];
const Save = document.getElementById('Save');
Save.addEventListener('click', () => {
  const val = document.querySelector('input');
  highscore = Array.from(highscore);
  const name = val.value;
  console.log(name);
  highscore.push({
    key: name,
    value: Rscore
  });
  localStorage.setItem('highScore', JSON.stringify(highscore));
  console.log(highscore);
  alert('your score has been saved');
});
