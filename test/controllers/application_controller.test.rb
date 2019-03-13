# frozen_string_literal: true

require 'test_helper'

class ApplicationControllerTest < ActionDispatch::IntegrationTest
  it 'returns 404 when non existing page requested' do
    get '/some_wrong_page'
    assert_response :not_found
  end
end
