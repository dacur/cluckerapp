class SimpleMailer < ActionMailer::Base
  default from: "from@example.com"

  def welcome_email(user)
  	@user = user
  	@url = 'http://localhost:3000/'
  	mail(to: @user.email, subject: 'Welcome to Clucker!')
  end
  
end
