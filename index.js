function getComputersChoice() {
    const arr = ['rock', 'paper', 'scissors']
    let compChoice = Math.floor(Math.random() * 3)
    const comp = arr[compChoice]
    return comp
}
console.log(getComputersChoice())

function getPlayersChoice() {
    const arr = ['rock', 'paper', 'scissors']
    let playersChoice = Math.floor(Math.random() * 3)
    const player = arr[compChoice]
    return player
}
console.log(getPlayersChoice())

function rockPaperScissiors(player, comp) {
    let player1 = player.toLowerCase() 
    if(player1 == 'rock' && comp == rock) {
        return 'its a draw'
    } elseif (player = 'rock' && comp == '')

}