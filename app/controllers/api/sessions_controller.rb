class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login(@user)
      render json: @user
    else
      render json: "Invalid credentials", status: 422
    end
  end

  def destroy
    if current_user
      logout(current_user)
      render json: {}
    else
      render status: 422
    end
  end


end
