class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.datetime :started_at
      t.float    :playing_time
      t.integer  :winner_id
      t.string   :url
      t.timestamps
    end
  end
end
