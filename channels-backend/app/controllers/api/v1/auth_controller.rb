class Api::V1::AuthController < ApplicationController
    skip_before_action :authorized, only: [:create, :show_user]

    def create
        @user = User.find_by(email: user_login_params[:email])
        if @user && @user.authenticate(user_login_params[:password])
            token = encode_token({ user_id: @user.id })
            render json: { user: @user, jwt: token }, status: :accepted
        else
            render json: { message: 'Invalid email or password' }, status: :unauthorized
        end
    end

    def show_user
        render json: current_user
    end

    private

    def user_login_params
    params.require(:user).permit(:email, :password)
    end
end