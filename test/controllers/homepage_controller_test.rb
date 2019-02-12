# frozen_string_literal: true

require 'test_helper'

class HomepageControllerTest < ActionDispatch::IntegrationTest
  it 'renders homepage' do
    get root_path

    assert_response :success
  end
end
