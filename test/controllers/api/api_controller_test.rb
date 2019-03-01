# frozen_string_literal: true

require 'test_helper'

module Api
  class ApiControllerTest < Api::TestCase
    it 'returns 404 when non existing page requested' do
      get '/api/v1/some_wrong_page'
      response.must_be_not_found
    end
  end
end
