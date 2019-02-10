# frozen_string_literal: true

require 'test_helper'

class DeckTest < ActiveSupport::TestCase
  it 'is a valid deck' do
    deck = Deck.new(name: 'sample')
    assert deck.valid?
  end

  it 'is invalid without a name' do
    deck = Deck.new
    assert_not deck.valid?, 'deck is valid without a name'
    assert deck.errors.messages.key?(:name), 'no validation error for name'
  end
end
