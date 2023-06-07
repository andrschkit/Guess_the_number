'use strict'  
document.querySelector('.number_input').value = 0;

let score=20;
let highscore=0;
document.querySelector('.score').textContent = score;

let secretNumb =Math.trunc(Math.random()*20)+1;
const guessFunc=function(message){
  if(score>1)
  {
    document.querySelector('.guess_message').textContent = message;
    score--;
    document.querySelector('.score').textContent = score;
  }
  else
  {
    document.querySelector('.guess_message').textContent = 'Game over!';
    score--;
    document.querySelector('.score').textContent = score;
  }
}
document.querySelector('.check').addEventListener('click', function(){
  const guessingNumb=Number(document.querySelector('.number_input').value);
  if(guessingNumb==0){
    document.querySelector('.guess_message').textContent='Выберете число от 1 до 20!'
  }
  else if (guessingNumb == secretNumb)
  {
    document.querySelector('.guess_message').textContent = 'Правильно!';
    document.querySelector('body').style.backgroundColor='green';
    document.querySelector('.question').style.width='40rem';
    document.querySelector('.question').textContent=secretNumb;
    if(score>highscore)
    {
      highscore=score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  else if (guessingNumb > secretNumb)
  {
    guessFunc("Больше загаданного")
  }
  else if (guessingNumb < secretNumb)
  {
    guessFunc("Меньше загаданного")
  }
});
document.querySelector('.again').addEventListener('click', function(){
  score=20;
  document.querySelector('.guess_message').textContent = 'Начни угадывать';
  document.querySelector('body').style.backgroundColor='black';
  document.querySelector('.question').style.width='25rem';
  document.querySelector('.question').textContent="???";
  document.querySelector('.score').textContent = score;
  document.querySelector('.number_input').value = 0;
  secretNumb = Math.trunc(Math.random()*20)+1;
});


