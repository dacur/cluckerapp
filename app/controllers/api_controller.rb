require 'json'
class ApiController < ApplicationController
	# def woot
	# 	id = params[:id]
	# 	name = params[:name]
	# 	puts id + '|' + name
		
	# 	test = JSON.generate({'id' => id, 'name' => name})
	# 	puts test

	# 	respond_to do |format|
	# 		format.json{render :json => test }
	# 	end
	# end

	def submitform
		firstname = params[:firstname]
		lastname = params[:lastname]
		email = params[:email]
		password = params[:password]
		puts firstname + " " + lastname + " email: " + email + " password: " + password

		test = JSON.generate({'firstname' => firstname, 'lastname' => lastname, 'email' => email, 'password' => password })
		puts test

		respond_to do |format|
			format.json{render :json => test }
		end
	end


end
