class AddBodyToMessages < ActiveRecord::Migration[6.0]
  def change
    add_column :messages, :body, :string
  end
end
