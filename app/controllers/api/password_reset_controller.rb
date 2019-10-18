class Api::PasswordResetController < ApplicationController

  def create
    type = params[:password_reset][:type]
    @user = User.ci_find('email', params[:password_reset][:email])
    if @user
      case type
      when "password"
        @user.create_reset_digest
        UserMailer.recovery_password(@user, @user.reset_digest).deliver_later
        @message = "Email has been sent with password reset instructions"
      when "username"
        UserMailer.recovery_username(@user).deliver_later
        @message = "Email has been sent with your username"
      end
      render json: @message, status: 200
    else
      render json: "Email address not found", status: 422
    end
  end

  def edit
    token = params[:id]
    @user = User.find_by(reset_digest:token)
    if @user && token
      if !@user.password_reset_expired?
        render json: "Valid reset link", status: 200
      else
        render json: "Password reset link has expired", status: 422
      end
    else
      render json: "Invalid password reset link", status: 422
    end
  end

  def update
    token = params[:id]
    new_password = params[:user][:password]
    @user = User.find_by(reset_digest:token)
    if @user && token
      if !@user.password_reset_expired?
        @user.password = new_password
        if @user.save
          render json: "Password has been reset", status: 200
        else
          render json: @user.errors.full_messages, status: 422
        end
      else
        render json: "Password reset link has expired", status: 422
      end
    else
      render json: "Invalid password reset link", status: 422
    end
  end
end
