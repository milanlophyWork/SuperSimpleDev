
const score = JSON.parse(localStorage.getItem('score')) || {
    wins : 0,
    lose : 0,
    ties : 0
}

updateScore()

function pickComputerMove(){
    let computerMove = ''
    const value = Math.random()

    if(value >= 0 && value < 1/3){
        computerMove = 'rock'
    }else if(value >= 1/3 && value < 2/3){
        computerMove = 'paper'
    }else{
        computerMove = 'scissors'
    }

    return computerMove
}

function playGame(playerMove){
    let result = ''
    const computerMove = pickComputerMove()

    if(playerMove === computerMove){
        result = 'Tie.'
        score.ties++
    }else if((playerMove === 'rock' && computerMove === 'paper') || (playerMove === 'paper' && computerMove === 'scissors') || (playerMove === 'scissors' && computerMove === 'rock')){
        result = 'You lose.'
        score.lose++
    }else {
        result = 'You win.'
        score.wins++
    }

    document.querySelector('.js-result').innerHTML = result
    document.querySelector('.js-moves').innerHTML = `You ${playerMove} - ${computerMove} Computer`
    updateScore()

    localStorage.setItem('score', JSON.stringify(score))
}

function updateScore(){
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.lose}, Ties: ${score.ties}`
}

function reset(){
    score.wins = 0
    score.lose = 0
    score.ties = 0
    
    updateScore()
    localStorage.removeItem('score')
}