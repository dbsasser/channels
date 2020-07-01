class User < ApplicationRecord
    has_many :messages
    has_many :memberships
    has_many :channels, through: :memberships
    has_many :owned_channels, class_name: 'Channel', foreign_key: "owner_id"
    validates :name, presence: true
    validate :email, uniqueness: true
    validates :password, presence: true
    has_secure_password
    
end
