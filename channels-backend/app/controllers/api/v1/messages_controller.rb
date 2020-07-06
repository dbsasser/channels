class Api::V1::MessagesController < ActionController::API

    before_action :set_channel

    def index 
        render json: @channel.messages
    end 

    def show 
        @message = @channel.find(params[:id])
        render json: @message
    end

    def create
        @message = @channel.messages.build(message_params)
        @message.user_id = 1 #Temporary set user until current_user set up
        if @message.save
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
