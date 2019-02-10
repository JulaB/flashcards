# frozen_string_literal: true

class Card < ApplicationRecord
  belongs_to :deck, counter_cache: true

  validates :term, presence: true
end
