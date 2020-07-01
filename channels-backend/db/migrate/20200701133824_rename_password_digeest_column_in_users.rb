class RenamePasswordDigeestColumnInUsers < ActiveRecord::Migration[6.0]
  def change
    rename_column :users, :password_digeest, :password_digest
  end
end
