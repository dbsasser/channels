class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email
  has_many :channels
  has_many :memberships
end
