let choices = document.querySelectorAll(".btn");
let msg = document.querySelector('.msgBox');
let userCounter = document.querySelector('.yourCounter');
let compCounter = document.querySelector('.computerCounter');

// INITIAL COUNTER
let a = 0;
let b = 0;

// FUNCTIONS
const compChoice = ()=>{
    let options = ['rock','paper','sissor']
    let rand = Math.floor(Math.random() * 3);
    return options[rand]
}
const showWinner = (userWin)=>{
    let winner;
    if(userWin){
        winner = "User";
        console.log('User Win.')
        a++;
    }else{
        winner = "Computer";
        console.log('Computer Win.');
        b++;
    }
    msg.classList.remove('hide')
    msg.innerText = `The Winner is ${winner}`;
    userCounter.innerText =   a;
    compCounter.innerText =   b;
}
const playgame = (userChoice)=>{

    let comChoice = compChoice()
    console.log('Computer choice = '+ comChoice)
    console.log('User Choice = '+ userChoice)
    
    if( userChoice === comChoice ){
        msg.classList.remove('hide')
        msg.innerText = `the game is Draw`;
    } else {
        let userWin = true;
        if( userChoice === 'rock' ){
             userWin = comChoice === 'paper'? false : true;
        }
        else if (userChoice === 'paper'){
            userWin = comChoice === 'sissor'?false : true;
        }
        else if (userChoice === 'sissor'){
            userWin = comChoice === 'rock'?false : true;
        }
        showWinner(userWin);
    }

}

// EVENT LISTENER
choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice  = choice.getAttribute('id')
        playgame(userChoice)
    })
});
