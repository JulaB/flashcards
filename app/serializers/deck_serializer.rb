# frozen_string_literal: true

class DeckSerializer < ActiveModel::Serializer
  attributes :name, :cards_count
end
