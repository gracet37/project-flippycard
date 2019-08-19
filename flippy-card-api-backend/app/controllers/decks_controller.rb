class DecksController < ApplicationController

    def index 
        @decks = Deck.all
        render json: @decks, include: [:cards]
    end 

    def show 
        @deck = Deck.find(params[:id])
        render json: @deck, include: [:cards]
    end

end
