class Player < ActiveRecord::Base
  has_many :player_games
  has_many :games, :through => :player_games
  has_many :victories, :class_name => "Game", :foreign_key => "winner_id"

  validates :name, :uniqueness => { :case_sensitive => false }

  before_save { self.name.strip.chomp! }

end
