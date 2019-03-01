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
  end
end
