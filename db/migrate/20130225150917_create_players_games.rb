class CreatePlayersGames < ActiveRecord::Migration
  def change
    create_table :player_games do |t|
      t.integer :player_id
      t.integer :game_id

      t.timestamps
    end 

    add_index :player_games, [:player_id, :game_id], :unique => true
  end
end
