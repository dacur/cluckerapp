class MainController < ApplicationController
  def index
  end

  def savelogin
	firstname = params[:firstname]
	lastname = params[:lastname]
	email = params[:email]
	password = params[:password]
	# puts firstname + " " + lastname + " email: " + email + " password: " + password

	newuser = User.new(first: firstname, last: lastname, email: email, password: password)

		if (newuser.valid?)
			newuser.save
			render json: newuser
		else
			render json: nil
		end

	# respond_to do |format|
	# 	format.json{render :json => test }
 #   	end

	# head :ok
   end



end
