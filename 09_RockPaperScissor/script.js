let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");



const genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    //rock, paper, scissors
    const randIdx = Math.floor(Math.random() * 3); //generates a random num 0, 1 or 2
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "Game was draw.";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, computerChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.style.backgroundColor = "green";
        msg.innerText = `You win! Your ${userChoice} beats ${computerChoice}.`;
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.style.backgroundColor = "red";
        msg.innerText = `You lose! ${computerChoice} beats Your ${userChoice}.`;
    }
}

const playGame = (userChoice) => {
    //Generate computer choice -> modular
    const computerChoice = genComputerChoice();

    if(userChoice === computerChoice) {
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            //scissors, paper
            userWin = computerChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            //rock, scissors
            userWin = computerChoice === "scissors" ? false : true;
        } else {
            //rock, paper
            userWin = computerChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, computerChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})