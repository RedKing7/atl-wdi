/*

Creating a page where every time the user hits the "Roll Dice" button, the screen randomly updates the two dice. Use the html and css code included in the starter code folder to get started.

1) Write down pseudocode for the following program.

2) Follow the steps below to write your code.
* generate a random number between 1 - 6 and store to a variable, random1
* generate a random number between 1 - 6 and store to a variable, random2
* combine 'dice-' and random1 to form the random class for the first die, firstDie
* combine 'dice-' and random2 to form the random class for the second die, secondDie
* get the first die by ID and update the class to firstDie (hint: document.getElementById)
* get the first die by ID and update the class to secondDie (hint:document.getElementById)

3) Check to see if the Dice Roll has been hit, if it has run the diceRoll function.

*/
/***********************************************\
 * random1 = generate random number(1-6)
 * random2 = generate random number(1-6)
 * firstDie = 'dice-' + random1
 * secondDie = 'dice-' + random2
 * 
 * remove 'dice-x' class from 'first-die' and 'second die'
 * add classes '${firstDie}' and '${secondDie}'
 * to their respective die
 \**********************************************/

 window.onload = function() {
    const button = document.querySelector('#roll-dice');

    button.addEventListener('click', rollDice);
 }

 const rollDice = (event) =>{
    let random1 = Math.floor(Math.random()*6 + 1);
    let random2 = Math.floor(Math.random()*6 + 1);
    let firstDie = `dice-${random1}`;
    let secondDie = `dice-${random2}`;
    document.querySelector('#first-die').className = '';
    document.querySelector('#second-die').className = '';
    document.querySelector('#first-die').setAttribute('class', firstDie);
    document.querySelector('#second-die').setAttribute('class', secondDie);
 }