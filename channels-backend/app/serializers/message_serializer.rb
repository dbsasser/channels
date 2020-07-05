class MessageSerializer < ActiveModel::Serializer
  attributes :id, :body, :date_and_time
  belongs_to :user

  def date_and_time
    return date_and_time = object.created_at.strftime("%D at %I:%M %p")
  end
end
