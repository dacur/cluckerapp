class MainController < ApplicationController
  def index
  end

  def users
  	@users = User.all
  end
  
  def savelogin
	firstname = params[:firstname]
	lastname = params[:lastname]
	email = params[:email]
	password = params[:password]
	# puts firstname + " " + lastname + " email: " + email + " password: " + password

	newuser = User.new(first: first, last: last, email: email, password: password)

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

def clucks
	@clucks = Cluck.all
end

def saveclucks
	# id = params[:id]
	name = params[:name]
	body = params[:body]
	date = params[:date]

	newcluck = Cluck.new(name: name, body: body, date: date)

	newcluck.save
	render json: newcluck

	head :ok
end



end
