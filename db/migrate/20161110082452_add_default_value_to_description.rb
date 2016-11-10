class AddDefaultValueToDescription < ActiveRecord::Migration
  def change
    change_column :recordings, :description, :text, default: ""
  end
end
