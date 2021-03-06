class CreateCards < ActiveRecord::Migration[5.2]
  def change
    create_table :cards do |t|
      t.string :english
      t.string :foreign
      t.references :deck, foreign_key: true
      t.boolean :complete, default: false

      t.timestamps
    end
  end
end
