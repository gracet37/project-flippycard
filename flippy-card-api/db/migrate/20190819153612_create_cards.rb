class CreateCards < ActiveRecord::Migration[5.2]
  def change
    create_table :cards do |t|
      t.string :english
      t.string :foreign
      t.integer :deck_id
      t.boolean :complete, default: false

      t.timestamps
    end
  end
end
