get '/' do
  erb :index
end

post '/games' do 
  content_type :json
  @game = Game.create
  if setup_game(params[:player_names], @game)
    {game: @game, players: params[:player_names]}.to_json
  else
    erb :index
  end
end

get '/games/:id/play' do 
  @game = Game.find(params[:id])
  players = @game.players
  erb :play
end

put '/games/:id' do 
  winner = Player.find_by_name(params[:winner])
  @game = Game.find(params[:id])
  @game.complete!(Time.now, winner.id)
end

get '/games/:url' do
  @game = Game.find_by_url(params[:url])
  erb :games_show
end

get '/' do
end
