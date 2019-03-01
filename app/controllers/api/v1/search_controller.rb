# frozen_string_literal: true

module Api
  module V1
    class SearchController < ApiController
      def index
        decks = Deck.opened.all
        render json: decks
      end
    end
  end
end
