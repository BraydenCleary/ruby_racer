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





// Comment below!
$(document).ready(function(){

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
    if (player1.position == 10) {
      this.winner = player1.id;
    } else if (player1.position == 10) {
      this.winner = player2.id;
    }
  }

  Game.prototype.onKeyUp = function(e){
    if (e.keyCode == 80){
      alert('hello');
    }
  }

  function Player(name)  {
    this.name = name;
    this.position = 0;
  }

  Player.prototype.advance = function() {
    $('.track').eq(this.position).removeClass('active');
    this.position++;
    $('.track').eq(this.position).addClass('active');
  }

  Player.prototype.onKeyUp = function(e){
    if (e.keyCode == 80){
      this.player1.advance();
    } else if (e.keyCode == 81) {
      this.player2.advance();
    }
    //ToDo: Take into account end of game
  }

  $('#game-form').submit(function(e){
    e.preventDefault();
    $.ajax({
      type: 'POST',
      url: '/games',
      data: $(this).serialize(),
      dataType: 'json',
      success: function(data){
        window.location = '/games/' + data.game.game.id + "/play"
        //How do I load next page and access THAT DOM?
        $(document).on('keyup', function(event){
          game.onKeyUp(event);
        });
      }
    })
    // var player1Name = $(this).serializeArray()[0].value;
    // var player2Name = $(this).serializeArray()[1].value;

    // player1 = new Player(player1Name);
    // player2 = new Player(player2Name);

    // game = new Game(player1, player2);
    // game.start();


  });  

//   $(this).on('keyup', function(e){
//     if (e.keyCode == 80){
//       console.log(player1.name);
//     }
//   });
   
// }); 




/*$(document).ready(function(){
  this.onKeyUp(function(event){
      debugger
      if (event.keyCode == 80){
        console.log('hello');
      } else if (event.keyCode == 81) {
        console.log('goodbye');
      }
});
*/

