class CreateCards < ActiveRecord::Migration[5.2]
  def change
    create_table :cards do |t|
      t.references :deck, foreign_key: true, index: true
      t.string :term, index: true
      t.text :definition

      t.timestamps
    end
  end
end
