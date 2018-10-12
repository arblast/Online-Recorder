class UserMailer < ApplicationMailer
  default from: 'do-not-reply@record-cloud.com'

  def welcome_email(user)
    @user = user
    @url = 'https://record-cloud.com'
    mail(to: @user.email, subject: 'Welcome to Record Cloud')
  end

  def recovery_password(user)
    @user = user
  end

  def recovery_username(user)
    @user = user
    @url = 'https://record-cloud.com'
    mail(to: @user.email, subject: 'Record Cloud username')
  end
end
