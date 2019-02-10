class CreateDecks < ActiveRecord::Migration[5.2]
  def change
    create_table :decks do |t|
      t.string :name, index: true
      t.string :access, limit: 10, default: 'opened', index: true
      t.integer :cards_count, default: 0, index: true

      t.timestamps
    end
  end
end
