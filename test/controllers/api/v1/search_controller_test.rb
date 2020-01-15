# frozen_string_literal: true

require 'test_helper'

module Api
  module V1
    class SearchControllerTest < Api::TestCase
      let(:path) { api_v1_search_index_path }
      it 'returns successful response' do
        get path
        _(response).must_be_successful

        pattern = {
          data: [
            id: String,
            type: 'decks',
            attributes: {
              name: String,
              'cards-count' => Integer
            }
          ].ignore_extra_values!
        }
        _(response.body).must_match_json_expression(pattern)
      end
    end
  end
end
