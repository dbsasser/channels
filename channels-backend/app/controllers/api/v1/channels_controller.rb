class Api::V1::ChannelsController < ApplicationController
    skip_before_action :authorized

    def index 
        @channels = Channel.all
        render json: @channels
    end

    def create
        @channel = Channel.new(channel_params)
        @channel.owner_id = 1 #Temporary set owner until current_user set up
        if @channel.save
            render json: @channel
        else 
            render json: {error: 'Trouble creating channel'}
        end 
    end

    def show
        @channel = Channel.find(params[:id])
        render json: @channel
    end 

    def destroy
        @channel = Channel.find(params[:id])
        @channel.destroy
    end

    private

    def channel_params 
        params.require(:channel).permit(:name, :description)
    end

end
