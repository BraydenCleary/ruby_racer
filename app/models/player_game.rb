class PlayerGame < ActiveRecord::Base
  belongs_to :player
  belongs_to :game

  validate :unique_players

  private
  def unique_players
    unless PlayerGame.where(:player_id => self.player.id, :game_id => self.game.id).length == 0
      errors[:base] << "Players must be unique"
    end
  end
end
