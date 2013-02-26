$(document).ready(function() {
  function update_player_position(playerName, newPosition){
    if (newPosition == $("tr#" + playerName + " td.track").length - 1) {
      
      $("tr#" + playerName + " td.track.active").removeClass('active')
      $("tr#" + playerName + " td.track").addClass('winner')
      $("tr#" + playerName + " td.track").eq(newPosition).addClass('active')
      
      var gameId = $('h2.title').attr('id').split('-')[1]
      var winner = $("#" + playerName).attr('data-name');
      var url = $("#" + playerName).attr('data-url');
      $.ajax({
        type: 'POST',
        url: "/games/" + gameId, 
        data: {id: parseInt(gameId), winner: winner, _method: "put"},
        success: function(){
          $(location).attr('href', "/games/" + url);
        }
      });

    } else {
        $("tr#" + playerName + " td.track.active").removeClass('active')
        $("tr#" + playerName + " td.track").eq(newPosition).addClass('active')      
    }
  }  
 
  $(document).on('keyup', function(e) {
    if (e.keyCode === 80) {
      var player = "player-1"
      update_player_position(player, $("tr#" + player + " .track.active").index() + 1)
    } else if (e.keyCode === 81) {
      var player = "player-2"
      update_player_position(player, $("tr#" + player + " .track.active").index() + 1)
    }
  });
});
