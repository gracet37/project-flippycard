class CardsController < ApplicationController

    def index 
        @cards = Card.all
        render json: @cards, include: [:deck]
    end 

    def show 
        @card = Card.find(params[:id])
        render json: @card, include: [:deck]
    end

end
