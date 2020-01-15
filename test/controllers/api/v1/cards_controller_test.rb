# frozen_string_literal: true

require 'test_helper'

module Api
  module V1
    class CardsControllerTest < Api::TestCase
      let(:deck) { decks(:open_deck) }
      let(:path) { api_v1_deck_cards_path(deck) }

      it 'returns not found when deck is not found' do
        get api_v1_deck_cards_path(deck_id: 0)

        _(response).must_be_not_found
      end

      it 'returns not found when deck is not public' do
        deck = decks(:closed_deck)
        get api_v1_deck_cards_path(deck)

        _(response).must_be_not_found
      end

      it 'returns successful response that contains only the deck cards' do
        get path

        _(response).must_be_successful
        cards_id = deck.cards.pluck(:id)
        pattern = cards_id.map do |id|
          {
            id: id.to_s,
            type: 'cards',
            attributes: {
              term: String,
              definition: String
            }
          }
        end
        _(response.body).must_match_json_expression(data: pattern)
      end
    end
  end
end
