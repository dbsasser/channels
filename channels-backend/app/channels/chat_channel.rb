class ChatChannel < ApplicationCable::Channel
  def subscribed
    @channel = Channel.find_by(id: params[:channel_id])
    stream_for @channel
    # stream_from "channel_channel_#{params[:channel_id]}"
    # stream_from "some_channel"
  end

  def received(data)
    ChatChannel.broadcast_to(@channel, {channel: @channel, messages: @channel.messages})
  end
  
  def unsubscribed
  end

end
