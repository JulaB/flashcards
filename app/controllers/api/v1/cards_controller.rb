# frozen_string_literal: true

module Api
  module V1
    class CardsController < ApiController
      def index
        render json: deck.cards
      end

      private

      def deck
        @deck ||= Deck.opened.find(params[:deck_id])
      end
    end
  end
end
