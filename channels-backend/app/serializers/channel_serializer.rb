class ChannelSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :created_at
  has_many :users 
end
