'use strict';



let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score =20;
let highScore=0;


document.querySelector('.check').addEventListener('click', function() {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
      document.querySelector('.message').textContent = 'No number you have entered';
  }
  else if (guess===secretNumber) {
    document.querySelector('.number').textContent=secretNumber;
    document.querySelector('.message').textContent = 'You win';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width='30rem'
    if (score>highScore){
      highScore=score;
      document.querySelector('.highscore').textContent=highScore;
    }
  }
  else if (guess > secretNumber) {
    if (score>0){
      
      document.querySelector('.message').textContent = 'Too high';
      score--;
      document.querySelector('.score').textContent=score;
      }else  {
        document.querySelector('.message').textContent='You loose';
        document.querySelector('.score').textContent='0';
      }
    }

    else if (guess < secretNumber) {
      if (score>0){
        document.querySelector('.message').textContent = 'Too low';
          score--;
          document.querySelector('.score').textContent=score;
        }else{
          document.querySelector('.message').textContent='You loose';
          document.querySelector('.score').textContent='0';

         
        }
      }
   
});
document.querySelector('.again').addEventListener('click', function(){
  
  score=20;
  
   secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent='Start guessing...' ;
  document.querySelector('.score').textContent=score;
  document.querySelector('.number').textContent='?';
  document.querySelector('.guess').value='';
  document.querySelector('.number').style.width='15rem'
 
  document.querySelector('.highscore').textContent=highScore;
})
