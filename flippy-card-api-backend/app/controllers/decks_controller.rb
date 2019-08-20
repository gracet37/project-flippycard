class DecksController < ApplicationController

    def index 
        @decks = Deck.all
        render json: @decks, include: [:cards], except: [:created_at, :updated_at]
    end 

    def show 
        @deck = Deck.find(params[:id])
        render json: @deck, include: [:cards], except: [:created_at, :updated_at]
    end

end
