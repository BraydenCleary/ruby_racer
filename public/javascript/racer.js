//Game
  //actions
    //checkFinished
    //end
    //start
    //determineWinner

  //properties
    //finished
    //startTime
    //gameDuration
    //winner


//Player
  //actions
    //advance


  //properties
    //currentPosition
    //id


function Game(player1, player2) {
  this.boardLength  = 10;
  this.player1      = player1;
  this.player2      = player2;
  this.finished     = false;
}

Game.prototype.checkFinished = function() {
  if (player1.position == 10 || player2.position == 10) {
    return true
  } else {
    return false
  }
}

//define some type of key press listener



Game.prototype.end = function() {
  this.playingTime = $.now() - this.startTime;
}

Game.prototype.start = function() {
  this.startTime = $.now();
}

Game.prototype.determineWinner = function() {
  if (player1.position == 10)
    this.winner = player1.id
  else if (player1.position == 10) {
    this.winner = player2.id
  }
}

function Player(name)  {
  this.name = name;
  this.position = 0;
}

Player.prototype.advance = function() {
  this.position++;
}

$(document).ready(function(){
  $('#game-form').submit(function(data){
    var player1Name = $(this).serializeArray()[0].value;
    var player2Name = $(this).serializeArray()[1].value;

    var player1 = new Player(player1Name);
    var player2 = new Player(player2Name);

    var game = new Game(player1, player2);
    game.start();

    $(document).on('keyup', function(event){
      if event.keyCode == 80
    });

    debugger

  });
}); 



