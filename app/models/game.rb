require 'digest/md5'

class Game < ActiveRecord::Base
  has_many :player_games
  has_many :players, :through => :player_games
  belongs_to :winner, :class_name => "Player"

  before_create :create_url

  def complete!(ending_time, winner_id)
    self.update_attributes(:playing_time => (ending_time - self.started_at).to_f, 
                           :winner_id => winner_id)
  end

  def start!
    self.update_attribute(:started_at, Time.now)
  end

  private
  def create_url
    self.url = SecureRandom::uuid[0..10]
  end
end
