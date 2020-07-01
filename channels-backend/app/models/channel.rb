class Channel < ApplicationRecord
    belongs_to :owner, class_name: 'User', foreign_key: 'owner_id'
    has_many :users
    has_many :messages
end
