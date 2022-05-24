class CreateDndCharacters < ActiveRecord::Migration[7.0]
  def change
    create_table :dnd_characters do |t|
      t.string :character_name
      t.string :character_class
      t.integer :initiative

      t.timestamps
    end
  end
end
