# frozen_string_literal: true

class CardSerializer < ActiveModel::Serializer
  attributes :term, :definition
end
