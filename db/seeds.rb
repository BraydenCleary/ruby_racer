require 'faker'

10.times { Player.create :name => Faker::Name.name }
