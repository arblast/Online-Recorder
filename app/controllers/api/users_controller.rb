class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      UserMailer.welcome_email(@user).deliver_later
      login(@user)
      render :create
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    render json: ["Invalid password"], status: 422 unless @user.is_password?(params[old_password])
    if @user.update(user_params)
      render :create
    else
      render json: @user.errors.full_messages, status: 422
    end
  end


  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :image_url)
  end

end
