function rollDice() {
    let goldCoins = 0;
    for (let i=0; i<10; i++) {
        const roll = Math.floor(Math.random() * 6 ) + 1;
        alert('You roll a ' + roll + '.');
        if (roll === 1) {
            alert('Game over, no more rolls!');
            break;
        }
        if (roll === 4 && goldCoins > 0) {
            alert('You lost one point, sorry!');
            goldCoins -= 1;
            alert('You have ' + goldCoins + ' gold coins so far');
            continue;
        }
        if (roll < 5) {
            alert('You have ' + goldCoins + ' gold coins so far');
            continue;
        }
        alert('Congratulations, you win ' + roll + ' gold coins!');
        goldCoins += roll;
    }
    alert('You have won a total of ' + goldCoins + ' gold coins!');
}