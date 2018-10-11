class AddAdminToUsers < ActiveRecord::Migration
  def change
    add_column :users, :permission, :string, null: false, default: 'user'
  end
end
