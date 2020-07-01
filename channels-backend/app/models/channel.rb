class Channel < ApplicationRecord
    belongs_to :owner, class_name: 'User', foreign_key: 'owner_id'
    has_many :memberships
    has_many :users, through: :memberships
    has_many :messages
end
