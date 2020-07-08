class Api::V1::MessagesController < ApplicationController

    before_action :set_channel
    skip_before_action :authorized

    def index 
        render json: @channel.messages
    end 

    def show 
        @message = @channel.find(params[:id])
        render json: @message
    end

    def create
        @message = @channel.messages.build(message_params)
        @message.user = current_user
        if @message.save
            serialized_data = ActiveModelSerializers::Adapter::Json.new(MessageSerializer.new(@message)).serializable_hash
            ChatChannel.broadcast_to(@channel, serialized_data)
            render json: @channel
        else 
            render json: {error: 'Trouble Posting Message' }
        end 
    end


    def destroy
        @message = Membership.find(params[:id])
        @message.destroy
    end

    private

    def set_channel
        @channel = Channel.find(params[:channel_id])
    end

    def message_params 
        params.require(:message).permit(:channel_id, :user_id, :body)
    end
end
