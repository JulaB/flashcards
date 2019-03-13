# frozen_string_literal: true

Rails.application.routes.draw do
  root to: 'homepage#index'

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :search, only: :index
      resources :decks, only: [] do
        resources :cards, only: :index
      end
    end
    match '*unmatched_route', to: 'api#not_found', via: :all
  end
  match '*unmatched_route', to: 'application#not_found', via: :all
end
