'use strict';


let currentscore = 0;
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
let totalscore1 = Number(document.getElementById('score--0').textContent);
let totalscore2 = Number(document.getElementById('score--1').textContent);
let player = document.querySelector('.player');

function newgame()
{
  
  totalscore1 = 0;
  totalscore2 = 0;
  currentscore = 0;
  document.getElementById('current--0').textContent = currentscore;
  document.getElementById('current--1').textContent = currentscore;
  document.getElementById('score--0').textContent = 0;
  document.getElementById('score--1').textContent = 0;
  if(player2.classList.contains('player--active'))
  {
    player2.classList.remove('player--active');
    player1.classList.add('player--active');
  }
}


if(totalscore1 >= 50) console.log("Player1 wins");

function rolldice(){

  if(player1.classList.contains('player--winner') || player2.classList.contains('player--winner'))
  {
    console.log("Yeh to hogya!");
  }
  else 
  {
    if(player1.classList.contains('player--active'))
    {

    let random = Math.floor((Math.random() * 6));
    

    console.log(random);
    for(let i=0;i<=random;i++)
    {
      
        document.querySelector('.dice').src = `dice-${i+1}.png`;
      
    }
    
    if(random == 0)
    {
      currentscore = 0;
      onhold();
    }
    else currentscore += random+1;

    
    document.getElementById('current--0').textContent = currentscore;
    console.log("This is current score : ",currentscore);
    }

    //------------------------------------------------------------------------------

    if(player2.classList.contains('player--active'))
    {
      let random = Math.floor((Math.random() * 6));
    

    console.log(random);
    for(let i=0;i<=random;i++)
    {
      if(random == i)
      {
        document.querySelector('.dice').src = `dice-${i+1}.png`;
      }
    }

    if(random == 0)
    {
      currentscore = 0;
      onhold();
    }
    else currentscore += random+1;

    document.getElementById('current--1').textContent = currentscore;
    console.log("This is current score : ",currentscore);

    }

}

}

//-----------------------------------------------------------------------

function onhold()
{

  if(player1.classList.contains('player--winner') || player2.classList.contains('player--winner'))
  {
    console.log("Yeh to hogya");
  }
  else{

    if(player1.classList.contains('player--active'))
    {
      player1.classList.remove('player--active');
      player2.classList.add('player--active');
      totalscore1 += currentscore;
      if(totalscore1 >= 20)
      {
        player1.classList.add('player--winner');
      } 
      document.getElementById('score--0').textContent = totalscore1;
      currentscore = 0;
      document.getElementById('current--0').textContent = 0;
    }
    else
    {
      player2.classList.remove('player--active');
      player1.classList.add('player--active');
      totalscore2 += currentscore;
      if(totalscore2 >= 20)
      {
        player2.classList.add('player--winner');
      } 
      document.getElementById('score--1').textContent = totalscore2;
      currentscore = 0;
      document.getElementById('current--1').textContent = 0;
    }
      
  }

}

