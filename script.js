const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')
const chose = document.querySelector('h2')

let humanScoreNumber = 0
let machineScoreNumber = 0


const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())

}


const playMachine = () => {
    const choice = ['rock', 'paper', 'scissor', 'lizard', 'spock']
    const randomNumber = Math.floor(Math.random() * 5)

    return choice[randomNumber]
}

const playTheGame = (human, machine) => {

    chose.innerHTML = `Humano: ${human} VS Maquina: ${machine}`

    if (human === machine) {
        result.innerHTML = 'Deu empate'
    } else if (human === 'rock' && machine === 'scissor') {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = 'Pedra amassa tesoura, você venceu '
    } else if (human === 'rock' && machine === 'lizard') {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = 'Pedra esmaga lagarto, você venceu'
    } else if (human === 'paper' && machine === 'rock') {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = 'Papel cobre pedra, você venceu'
    } else if (human === 'paper' && machine === 'spock') {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = 'Papel refuta spock, você venceu '
    } else if (human === 'scissor' && machine === 'paper') {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = 'Tesoura corta papel, você venceu '
    } else if (human === 'scissor' && machine === 'lizard') {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = 'Tesoura decapita lagarto, você venceu '
    } else if (human === 'lizard' && machine === 'spock') {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = 'Lagarto envenena spock, você venceu '
    } else if (human === 'lizard' && machine === 'paper') {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = 'Lagarto come papel, você venceu '
    } else if (human === 'spock' && machine === 'scissor') {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = 'Spock esmaga ou derrete tesoura, você venceu '
    } else if (human === 'spock' && machine === 'rock') {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = 'Spock vaporiza pedra, você venceu '
    } else if (machine === 'rock' && human === 'scissor') {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = 'Pedra amassa tesoura, Alexa venceu '
    } else if (machine === 'rock' && human === 'lizard') {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = 'Pedra esmaga lagarto, Alexa venceu'
    } else if (machine === 'paper' && human === 'rock') {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = 'Papel cobre pedra, Alexa venceu'
    } else if (machine === 'paper' && human === 'spock') {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = 'Papel refuta spock, Alexa venceu '
    } else if (machine === 'scissor' && human === 'paper') {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = 'Tesoura corta papel, Alexa venceu '
    } else if (machine === 'scissor' && human === 'lizard') {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = 'Tesoura decapita lagarto, Alexa venceu '
    } else if (machine === 'lizard' && human === 'spock') {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = 'Lagarto envenena spock, Alexa venceu '
    } else if (machine === 'lizard' && human === 'paper') {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = 'Lagarto come papel, Alexa venceu '
    } else if (machine === 'spock' && human === 'scissor') {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = 'Spock esmaga ou derrete tesoura, Alexa venceu '
    } else if (machine === 'spock' && human === 'rock') {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = 'Spock vaporiza pedra, Alexa venceu '
    }
}


