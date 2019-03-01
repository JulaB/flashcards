# frozen_string_literal: true

module Api
  class ApiController < ActionController::API
    before_action :check_json_request

    unless Rails.env.development?
      rescue_from Exception, with: :render_server_error
      rescue_from ActiveRecord::RecordNotFound, with: :not_found
    end

    def not_found
      render_error({ message: 'Not Found' }, :not_found)
    end

    private

    def check_json_request
      return if params['_json'] || request.body.read.blank?

      head :not_acceptable
    end

    def render_error(data, status)
      render json: data, status: status
    end

    def render_server_error
      render_error({ message: 'Internal Server Error' }, 500)
    end
  end
end
