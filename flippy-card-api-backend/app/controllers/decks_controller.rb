class DecksController < ApplicationController

    def index 
        @decks = Deck.all
        render json: @decks, include: [:user, :cards], except: [:created_at, :updated_at]
    end 

    def show 
        @deck = Deck.find(params[:id])
        render json: @deck, include: [:user, :cards], except: [:created_at, :updated_at]
    end

    def update 
        deck = Deck.find(params[:id])
        deck.update(deck_params)
        render json: @deck, include: [:user, :cards], except: [:created_at, :updated_at]
    end

    private

    def deck_params
        params.require(:deck).permit(:category, :user_id, :score, :img_url)
    end

end
