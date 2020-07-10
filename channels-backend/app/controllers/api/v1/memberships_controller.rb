class Api::V1::MembershipsController < ApplicationController
    skip_before_action :authorized

    def index 
        @user = User.first #Temporarily set user until current_user is set up
        render json: @user.channels
        
    end 

    def create
        @channel = Channel.find_by(id: params[:channel_id])
        @membership = Membership.new(membership_params)
        @membership.user_id = current_user.id
        if @membership.save
            render json: @channel
        else 
            render json: {error: 'Trouble Joining Channel' }
        end 
    end


    def destroy
        @membership = Membership.find_by(user_id: params[:id])
        @membership.destroy
    end

    private

    def membership_params 
        params.require(:membership).permit(:channel_id, :user_id)
    end
end
