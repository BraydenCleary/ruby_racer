get '/' do
  erb :index
end

post '/games' do 
  @game = Game.create
  if setup_game(params[:player_names], @game)
    redirect "/games/#{@game.id}/play"
  else
    erb :index
  end
end

get '/games/:id/play' do 
  @game = Game.find(params[:id])
  @game.start!
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
