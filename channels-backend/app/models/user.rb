class User < ApplicationRecord
    has_many :messages
    has_many :memberships
    has_many :channels, through: :memberships
    has_many :owned_channels, class_name: 'Channel', foreign_key: "owner_id"
    has_secure_password
end
