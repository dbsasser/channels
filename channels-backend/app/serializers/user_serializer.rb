class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email
  has_many :memberships
  has_many :channels, through: :memberships

end
