 const display= document.createElement('div')

const result_p=document.querySelector('.result > p')

const compScore=document.querySelector('#compscore')
const playerScore=document.querySelector('#playerscore')

let cScore=0;
let pScore=0;

compScore.append(cScore)
playerScore.append(pScore)
const getUserChoice= (userInput)=>{
  userInput= userInput.toLowerCase();
  if(userInput=='rock'|userInput=='paper'|userInput=='scissors'){
    return userInput
  }
else{
  console.log('error')
}
}
const getComputerChoice =()=>{
  let a= Math.floor(Math.random()*3)
  if(a==0){
    return 'rock'
  }
  else if(a==1){
    return 'scissors'
  }
  else if(a==2) {return 'paper'}
  else{
    console.log('error')
  }

}

const determineWinner =(userChoice,computerChoice )=>{
  if (userChoice==computerChoice){
             display.innerText=`You both threw ${userChoice}! Tie game!`
  result_p.appendChild(display)
    
    
    return 'tie'
  }
   else if(userChoice=='rock'&&computerChoice=='paper'){
          display.innerText=`You threw ${userChoice} and the Computer threw ${computerChoice}! The Computer wins!`
        result_p.appendChild(display)
     cScore++;
     compScore.innerHTML=`${cScore}`
     
     
     
     return 'Computer wins'

   }
   else if(userChoice=='paper'&&computerChoice=='rock'){
                         display.innerText=`You threw ${userChoice} and the Computer threw ${computerChoice}! You win!`
                          result_p.appendChild(display)
      pScore++;
     playerScore.innerHTML=`${pScore}`
     return 'You win'
   }
    else if(userChoice=='rock'&&computerChoice=='scissors'){
      display.innerText=`You threw ${userChoice} and the Computer threw ${computerChoice}! You win!`
       result_p.appendChild(display)
       pScore++;
     playerScore.innerHTML=`${pScore}`
     return 'You win'
   }
   else if(userChoice=='scissors'&&computerChoice=='rock'){
              display.innerText =`You threw ${userChoice} and the Computer threw ${computerChoice}! The Computer wins!`
               result_p.appendChild(display)
      cScore++;
     compScore.innerHTML=`${cScore}`
     return 'Computer wins'     
     
   }
    else if(userChoice=='scissors'&&computerChoice=='paper'){
                display.innerText =`You threw ${userChoice} and the Computer threw ${computerChoice}! You win!`
                result_p.appendChild(display)
       pScore++;
     playerScore.innerHTML=`${pScore}`
     return 'You win'
   }
   else if(userChoice=='paper'&&computerChoice=='scissors'){
                     display.innerText=`You threw ${userChoice} and the Computer threw ${computerChoice}! The Computer wins!`
                    result_p.appendChild(display)
      cScore++;
     compScore.innerHTML=`${cScore}`
     return 'Computer wins'

   }
else{
  console.log('error')
}
  }

const playGame=(a)=>{
  const userChoice=getUserChoice(a)
  const computerChoice=getComputerChoice()
  console.log('you threw ' +userChoice)
  console.log('They threw ' +computerChoice);
  console.log(determineWinner(userChoice,computerChoice))
};

const rock= document.getElementById('rock')
const paper= document.getElementById('paper')
const scissors=document.getElementById('scissors')
rock.addEventListener('click',()=>{
          playGame('rock') 
 if(cScore >= pScore){
  compScore.style.color='green'
  playerScore.style.color='red'
}

  else{compScore.style.color='red'
     playerScore.style.color='green'
}
                      })

scissors.addEventListener('click',()=>{
          playGame('scissors')  
 if(cScore >= pScore){
  compScore.style.color='green'
  playerScore.style.color='red'
}

  else{compScore.style.color='red'
     playerScore.style.color='green'
}
})


paper.addEventListener('click',()=>{
            playGame('paper')  
 if(cScore >= pScore){
  compScore.style.color='green'
  playerScore.style.color='red'
}

  else{compScore.style.color='red'
     playerScore.style.color='green'
}
})
   
const cleargame=document.querySelector('#clearg')

//added a reset function. 
cleargame.addEventListener('click',()=>{
  display.innerText=''
  result_p.appendChild(display)
  cScore=0;
  pScore=0;
  
     compScore.innerHTML=`${pScore}`
     playerScore.innerHTML=`${pScore}`
})





