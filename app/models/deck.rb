# frozen_string_literal: true

class Deck < ApplicationRecord
  has_many :cards, dependent: :destroy
  enum access: { opened: 'opened', closed: 'closed' }

  validates :name, presence: true
end
