class MainController < ApplicationController
  def index
  end

  def users
  	@users = User.all
  end
  
  def savelogin
	first = params[:firstname]
	last = params[:lastname]
	email = params[:email]
	password = params[:password]
	# puts firstname + " " + lastname + " email: " + email + " password: " + password

	newuser = User.new(first: first, last: last, email: email, password: password)

		if (newuser.valid?)
			newuser.save
			render json: newuser
			session[:user_id] = newuser.id
			session[:user_name] = newuser.first 
			
		else
			render json: nil
		end
   end

    def logout #this is the way to do it using a form; not how you normally want to do
    	reset_session
    	flash[:notice] = "You have successfully logged out"
    	redirect_to root_url
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
