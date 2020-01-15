# frozen_string_literal: true

require 'test_helper'

module Api
  class ApiControllerTest < Api::TestCase
    it 'returns 404 when non existing page requested' do
      get '/api/v1/some_wrong_page'
      _(response).must_be_not_found
      pattern = { message: 'Not Found' }
      _(response.body).must_match_json_expression(pattern)
    end

    it 'returns 500 error when the server error happens' do
      Api::V1::SearchController.any_instance.stubs(:index)
                               .raises(::StandardError)

      get '/api/v1/search'
      _(response).must_be_server_error
      pattern = { message: 'Internal Server Error' }
      _(response.body).must_match_json_expression(pattern)

      Api::V1::SearchController.any_instance.unstub(:index)
    end
  end
end
