class CardsController < ApplicationController

    def index 
        @cards = Card.all
        render json: @cards, include: [:deck], except: [:created_at, :updated_at]
    end 

    def show 
        @card = Card.find(params[:id])
        render json: @card, include: [:deck], except: [:created_at, :updated_at]
    end

end
