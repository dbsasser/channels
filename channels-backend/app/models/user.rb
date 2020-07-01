class User < ApplicationRecord
    has_many :messages
    has_many :channels
    has_many :owned_channels, class_name: 'Channel', foreign_key: "owner_id"
end
