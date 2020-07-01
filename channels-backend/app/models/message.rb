class Message < ApplicationRecord
  belongs_to :channel
  belongs_to :user
  validates :body, length: { minimum: 2 }
  validates :user_id, presence: true
  validates :channel_id, presence: true
end
