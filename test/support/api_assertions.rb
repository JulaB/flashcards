# frozen_string_literal: true

require 'minitest/assertions'

module Api
  module Assertions
    def assert_successful(response)
      assert_response :success
      assert_content_type(response)
    end

    def assert_not_found(response)
      assert_response :not_found
      assert_content_type(response)
    end

    def assert_server_error(response)
      assert_response 500
      assert_content_type(response)
    end

    private

    def assert_content_type(response)
      assert_equal 'application/vnd.api+json', response.media_type
    end
  end
end
