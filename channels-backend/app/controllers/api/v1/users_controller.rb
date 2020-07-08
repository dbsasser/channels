class Api::V1::UsersController < ApplicationController

    skip_before_action :authorized

    def create
     @user = User.new(user_params)
     if @user.save
        Membership.create(channel_id: 1, user_id: @user.id)
        token = encode_token({ user_id: @user.id })
        render json: { user: @user, channels: @user.channels, jwt: token }, status: :accepted
    else
        render json: { message: 'Invalid email or password' }, status: :unauthorized
        end
    end

    private

    def user_params 
        params.require(:user).permit(:name, :email, :password)
    end
end

