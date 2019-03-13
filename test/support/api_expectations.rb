# frozen_string_literal: true

require 'support/api_assertions'

module Api
  module Expectations
    include Assertions

    ActionDispatch::TestResponse.infect_an_assertion(
      :assert_successful, :must_be_successful, :unary
    )
    ActionDispatch::TestResponse.infect_an_assertion(
      :assert_not_found, :must_be_not_found, :unary
    )
    ActionDispatch::TestResponse.infect_an_assertion(
      :assert_server_error, :must_be_server_error, :unary
    )
  end
end
