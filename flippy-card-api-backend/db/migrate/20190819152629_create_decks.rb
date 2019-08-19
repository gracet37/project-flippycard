class CreateDecks < ActiveRecord::Migration[5.2]
  def change
    create_table :decks do |t|
      t.string :category
      t.references :user, foreign_key: true
      t.integer :score, default: 0

      t.timestamps
    end
  end
end
