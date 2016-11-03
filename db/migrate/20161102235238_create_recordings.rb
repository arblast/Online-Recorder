class CreateRecordings < ActiveRecord::Migration
  def change
    create_table :recordings do |t|
      t.string :title, null: false
      t.string :recording_url, null: false
      t.string :image_url
      t.text :description
      t.integer :uploader_id, null: false, index: true
      t.integer :plays, null: false, default: 0
      t.string :publicity, null: false, index: true
      t.integer :category_id, null: false, index: true
      t.timestamps null: false
    end
  end
end
