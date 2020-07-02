class Api::V1::MembershipsController < ActionController::API

    def index 
        @user = User.first #Temporarily set user until current_user is set up
        render json: @user.channels
        
    end 

    def create
        @membership = Membership.new(membership_params)
        @channel = Channel.find(params[:id])
        @membership.user_id = 1 #Temporary set user until current_user set up
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
