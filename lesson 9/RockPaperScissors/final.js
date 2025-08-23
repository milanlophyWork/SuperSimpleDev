let score = JSON.parse(localStorage.getItem('score')) || {
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

// using addEventListener instead of onclick

document.querySelector('.js-rock')
    .addEventListener('click', ()=> playGame('rock'))

document.querySelector('.js-paper')
    .addEventListener('click', ()=> playGame('paper'))

document.querySelector('.js-scissors')
    .addEventListener('click', ()=> playGame('scissors'))

document.querySelector('.js-auto')
    .addEventListener('click', ()=> autoPlay())

document.querySelector('.js-reset')
    .addEventListener('click', ()=> resetGame())



// to play using key board

document.body.addEventListener('keydown', (event)=> {
    if(event.key === 'r'){
        playGame('rock')
    }else if(event.key === 'p'){
        playGame('paper')
    }else if(event.key === 's'){
        playGame('scissors')
    }else if(event.key === 'a'){
        autoPlay()
    }else if(event.key === 'Backspace'){
        resetGame()
    }
})

function playGame(playerMove){
    let result = ''
    const computerMove = pickComputerMove()

    if(playerMove === computerMove){
        result = 'Tie.'
        score.ties++
    }else if((playerMove === 'rock' && computerMove === 'paper') || (playerMove === 'paper' && computerMove === 'scissors') || (playerMove === 'scissors' && computerMove === 'rock')){
        result = 'You lose.'
        score.lose++
    }else{
        result = 'You win.'
        score.wins++
    }

    document.querySelector('.js-result').innerHTML = result
    document.querySelector('.js-moves').innerHTML = `You <img src= "../img/${playerMove}-emoji.png" class= "img"> 
    <img src = "../img/${computerMove}-emoji.png" class= "img"> Computer`

    updateScore()
    localStorage.setItem('score', JSON.stringify(score))
}

let isAutoPlaying = false
let interval_id

function autoPlay(){
    if(!isAutoPlaying){
        interval_id = setInterval(()=> {
            const playerMove = pickComputerMove()
            playGame(playerMove)
            isAutoPlaying = true
            document.querySelector('.js-auto').innerHTML = 'Stop Playing'
        },1000)
    }else{
        clearInterval(interval_id)
        isAutoPlaying = false
        document.querySelector('.js-auto').innerHTML = 'Auto Play'
    }
}

function updateScore(){
    document.querySelector('.js-score').innerHTML = `Wins : ${score.wins}, Losses : ${score.lose}, Ties : ${score.ties} `
}

function resetGame(){
<<<<<<< HEAD

=======

    score.wins = 0
    score.lose = 0
    score.ties = 0

    updateScore()
    localStorage.removeItem('score')


>>>>>>> 592ad80 (Amazon Project html_css)
    document.querySelector('.js-confirm').innerHTML = `
        Are you sure you want to reset the score? 
        <button class= "js-yes yes">Yes</button>
        <button class = "js-no no">No</button>
    `
    document.querySelector('.js-yes')
        .addEventListener('click', ()=> {
            score.wins = 0
            score.lose = 0
            score.ties = 0

            updateScore()
            localStorage.removeItem('score')
            hideMsg('confirm')
        })

    document.querySelector('.js-no')
        .addEventListener('click', ()=> hideMsg('confirm'))

}

function hideMsg(cls){
    document.querySelector(`.js-${cls}`).innerHTML = ''
<<<<<<< HEAD
=======

>>>>>>> 592ad80 (Amazon Project html_css)
}