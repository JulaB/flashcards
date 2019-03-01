# frozen_string_literal: true

class ApplicationController < ActionController::Base
  def not_found
    raise ActionController::RoutingError, 'Not Found' if Rails.env.development?

    respond_to do |format|
      format.html do
        render file: 'public/404.html', layout: false, status: :not_found
      end
      format.all { render json: { message: 'Not Found' }, status: :not_found }
    end
  end
end
