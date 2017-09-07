// ** BULLSEYE ** //

// STEP 1:  Add click handlers to update the score to be:
//          100 points - Bullseye
//           50 points - Middle Ring
//           10 points - Outer Ring
//            0 points - Miss  (done for you)

// STEP 2: Break down the updateScore method, write a paragraph or comment how the function works line by line

// STEP 3:  Highlight the element that was clicked on using the CSS `background-color: yellow`
// BONUS:  Implement setTimeout so the background is yellow for only two seconds

// EXPLORATION: Comment out event.stopPropagation in each function, and then click the inner ring. What happens?



window.onload = function() {
  var body = document.body;
  var ring1 = document.querySelector('.ring-1');
  var ring2 = document.querySelector('.ring-2');
  var ring3 = document.querySelector('.ring-3');

  var note = document.createElement('h2');
  note.setAttribute('class', 'note');
  body.appendChild(note);

  body.addEventListener('click', bullseyeGame.miss);
  ring1.addEventListener('click', bullseyeGame.outerRing);
  ring2.addEventListener('click', bullseyeGame.middleRing);
  ring3.addEventListener('click', bullseyeGame.innerRing);
}


var bullseyeGame = {
  score: 0,

  updateScore: function(points) {
    var scoreElement = document.querySelector('.score');//finds the element with id 'score' in the dom
    this.score += points; //adds points received to the 'score' attribute of 'this' bullseyeGame

    scoreElement.innerHTML = `${this.score} points`;//updates the 'score' display in the DOM with the new score
  },

  miss: function(event) {
    event.stopPropagation();
    event.target.innerHTML = 'You MISSED!';
    console.log(event.srcElement);
    bullseyeGame.updateScore(0);
  },

  outerRing: function(event) {
    event.stopPropagation();
    event.target.style.backgroundColor = 'yellow';
    document.querySelector('.note').innerHTML = 'outerRing was clicked';
    setTimeout(function(){
      event.target.style.backgroundColor = 'red';
      document.querySelector('.note').innerHTML = '';
    },2000);
    bullseyeGame.updateScore(10);
  },

  middleRing: function(event) {
    event.stopPropagation();
    event.target.style.backgroundColor = 'yellow';
    document.querySelector('.note').innerHTML = 'middleRing was clicked';
    setTimeout(function(){
      event.target.style.backgroundColor = 'white';
      document.querySelector('.note').innerHTML = '';
    },2000);
    bullseyeGame.updateScore(50);
  },

  innerRing: function(event) {
    event.stopPropagation();
    event.target.style.backgroundColor = 'yellow';
    document.querySelector('.note').innerHTML = 'Bullseye!';    
    setTimeout(function(){
      event.target.style.backgroundColor = 'red';
      document.querySelector('.note').innerHTML = '';
    },2000);
    bullseyeGame.updateScore(100);
  }
}
