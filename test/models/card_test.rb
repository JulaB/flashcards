# frozen_string_literal: true

require 'test_helper'

class CardTest < ActiveSupport::TestCase
  let(:deck) { decks(:open_deck) }

  it 'is a valid card' do
    card = Card.new(deck: deck, term: 'sample')
    assert card.valid?
  end

  it 'is invalid without a deck' do
    card = Card.new(term: 'sample')
    assert_not card.valid?, 'card is valid without a deck'
    assert card.errors.messages.key?(:deck)
  end

  it 'is invalid without a term' do
    card = Card.new(deck: deck)
    assert_not card.valid?, 'card is valid without a term'
    assert card.errors.messages.key?(:term)
  end

  it 'changes counter_cache' do
    card = Card.new(deck: deck, term: 'sample')
    assert_difference('deck.cards_count') { card.save }
    assert_no_difference('deck.cards_count') { card.update(term: 'updated') }
    assert_difference('deck.cards_count', -1) { card.destroy }
  end
end
