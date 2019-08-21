class CardsController < ApplicationController

    def index 
        @cards = Card.all
        render json: @cards, include: [:deck], except: [:created_at, :updated_at]
    end 

    def show 
        @card = Card.find(params[:id])
        render json: @card, include: [:deck], except: [:created_at, :updated_at]
    end

    def create 
        @card = Card.create(cards_params)
        render json: @card, include: [:deck], except: [:created_at, :updated_at]
    end

    def update 
        card = Card.find(params[:id])
        card.update(cards_params)
        render json: card, include: [:deck], except: [:created_at, :updated_at]
    end

    def destroy 
        card = Card.find(params[:id])
        card.destroy
    end

    private

    def cards_params
        params.require(:card).permit(:english, :foreign, :deck_id, :complete)
    end

end
