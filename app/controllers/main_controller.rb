class MainController < ApplicationController

	def index
		if (session[:user_id])
			redirect_to '/main/clucks'
		end
	end

  def users
  	@users = User.all
  end
  
  def savelogin
  	
	first = params[:firstname]
	last = params[:lastname]
	email = params[:email]
	password = params[:password]
	
	u = User.find_by(email: email)

	if (u !=nil && u.password == password)
		user_id = u.id.to_s
			
		session[:user_id] = user_id
		session[:first] = u.first
		session[:last] = u.last
		session[:user_name] = u.first + " " + u.last

		SimpleMailer.welcome_email(u).deliver #may not be in the right place

		render json: user_id.to_json
	else
		newuser = User.new(first: first, last: last, email: email, password: password)

		if (newuser.valid?)
			newuser.save

			session[:user_id] = newuser.id.to_s
			session[:first] = newuser.first 
			session[:last] = newuser.last
			session[:user_name] = newuser.first + " " + newuser.last

			SimpleMailer.welcome_email(newuser).deliver

			render json: newuser
			
		else
			render json: nil
		end
		head :ok
	end
   
   	head :ok
  end
  

  def logout 
		reset_session
		head :ok
    end


	def clucks
		@clucks = Cluck.all
	end

	def saveclucks
		text = params[:text].chomp

		user_id = session[:user_id]
		first = session[:first]
		last = session[:last]
		user_name = session[:user_name]

		post_date = Time.now
		post_date.to_formatted_s(:short)   

		newcluck = Cluck.new(text: text, user_id: user_id, user_name: user_name, post_date: post_date)

		newcluck.save
		render json: newcluck

		head :ok
	end



end

