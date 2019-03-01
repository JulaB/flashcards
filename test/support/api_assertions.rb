# frozen_string_literal: true

require 'minitest/assertions'

module Api
  module Assertions
    def assert_successful(response)
      assert_response :success
      assert_equal 'application/vnd.api+json', response.content_type
    end
  end
end
