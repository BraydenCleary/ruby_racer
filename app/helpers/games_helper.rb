helpers do 
  def setup_game(player_names, game)
    player_names.each do |name|
      player_id   = Player.find_or_create_by_name(name.strip.chomp).id
      @player_game = PlayerGame.new(:player_id => player_id, :game_id => game.id)
      return false unless @player_game.save
    end
  end
end
