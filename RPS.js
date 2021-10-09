 const display= document.createElement('div')

const result_p=document.querySelector('.result > p')

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
     return 'Computer wins'

   }
   else if(userChoice=='paper'&&computerChoice=='rock'){
                         display.innerText=`You threw ${userChoice} and the Computer threw ${computerChoice}! You win!`
                          result_p.appendChild(display)
     return 'You win'
   }
    else if(userChoice=='rock'&&computerChoice=='scissors'){
      display.innerText=`You threw ${userChoice} and the Computer threw ${computerChoice}! You win!`
       result_p.appendChild(display)
     return 'You win'
   }
   else if(userChoice=='scissors'&&computerChoice=='rock'){
              display.innerText =`You threw ${userChoice} and the Computer threw ${computerChoice}! The Computer wins!`
               result_p.appendChild(display)
     return 'Computer wins'     
     
   }
    else if(userChoice=='scissors'&&computerChoice=='paper'){
                display.innerText =`You threw ${userChoice} and the Computer threw ${computerChoice}! You win!`
                result_p.appendChild(display)
     return 'You win'
   }
   else if(userChoice=='paper'&&computerChoice=='scissors'){
                     display.innerText=`You threw ${userChoice} and the Computer threw ${computerChoice}! The Computer wins!`
                    result_p.appendChild(display)
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
 
                      })

scissors.addEventListener('click',()=>{
          playGame('scissors')  
})


paper.addEventListener('click',()=>{
            playGame('paper')  
})
   
const cleargame=document.querySelector('#clearg')

//added a reset function. 
cleargame.addEventListener('click',()=>{
  display.innerText=''
  result_p.appendChild(display)
})


