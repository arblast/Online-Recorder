class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.string :content, null: false
      t.integer :author_id, null: false
      t.integer :recording_id, null: false
      t.integer :parent_id
      t.timestamps null: false
    end
  end
end
