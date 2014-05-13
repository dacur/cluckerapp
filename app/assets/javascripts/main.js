
$(document).ready(function(){

	var firstname = $('#firstname').val();
	var lastname = $('#lastname').val();
	var email = $('#email').val();
	var password = $('#password').val();
	var confirmpassword = $('#confirmpassword');
	var emailresult;
	var lastnameresult;
	var firstnameresult;
	var passwordresult;
	// var confirmpasswordresult = false;
	

	/*function validateEmail(email) {
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
			if( !emailReg.test( email ) ) {
				emailresult = false;
				return emailresult;
			} else {
				emailresult = true;
				return emailresult;
			}
	};*/

	function ValidateEmail(value) {
	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		if (reg.test(value))
			return (true);

		return (false);
	}

	function ValidateFirstname(value) {
	var reg = /^[a-zA-Z]+$/;
		if (reg.test(value))
			return (true);

		return (false);
	}

	function ValidateLastname(value) {
	var reg = /^[a-zA-Z]+$/;
		if (reg.test(value))
			return (true);

		return (false);
	}

	function ValidatePassword(value) {
	var reg = /^[a-zA-Z]+$/;
		if (reg.test(value))
			return (true);

		return (false);
	}

	// function ValidateConfirmPassword(value) {
	// var reg = /^[a-zA-Z]+$/;
	// 	if (reg.test(value))
	// 		return (true);

	// 	return (false);
	// }

	$('.loginbutton').on('click', function(){

		$('.submitbtn').hide();
	
		$('#email').on('keyup', function(email){
			$('#emailmessage').show();
			var email = $('#email').val();
			var emailresult = ValidateEmail(email);
				if (!emailresult){
					console.log("email is bad")
				} else {
					console.log("email is good");
					$('#emailmessage').hide();
					$('.submitbtn').show();
					emailresult = true;
					return emailresult;
				}
			return emailresult;
		});

		$('#firstname').on('keyup', function(firstname){
			
			var firstname = $('#firstname').val();
			var firstnameresult = ValidateFirstname(firstname);
				if (!firstnameresult){
					console.log("First name is bad")
				} else {
					console.log("First name is good");
					$('#firstnamemessage').hide();
					firstnameresult = true;
					return firstnameresult;
				}
			return firstnameresult;
		});

		$('#lastname').on('keyup', function(lastname){
			
			var lastname = $('#lastname').val();
			var lastnameresult = ValidateLastname(lastname);
				if (!lastnameresult){
					console.log("Last name is bad")
				} else {
					console.log("Last name is good");
					$('#lastnamemessage').hide();
					lastnameresult = true;
					return lastnameresult;
				}
			return lastnameresult;
		});

		$('#password').on('keyup', function(password){

			var password = $('#password').val();
			var passwordresult = ValidatePassword(password);
				if (!passwordresult){
					console.log("Password is bad")
				} else {
					console.log("Password is good");
					$('#passwordmessage').hide();
					passwordresult = true;
					return passwordresult;
				}
			return passwordresult;
			return password;
		});

		// $('#confirmpassword').on('keyup', function(confirmpassword, password){

		// 	var confirmpassword = $('#confirmpassword').val();
		// 	var confirmpasswordresult = ValidateConfirmPassword(confirmpassword);
			
		// 		if (password !== confirmpassword){
		// 			console.log("Password match is bad")
		// 		} else {
		// 			console.log("Password match is good");
		// 			$('#confirmpasswordmessage').hide();
		// 			confirmpasswordresult = true;
		// 			return confirmpasswordresult;
		// 		}
		// 	return confirmpasswordresult;
		// });

		if (lastnameresult == true && firstnameresult == true && emailresult == true && passwordresult == true){
			$('.submitbtn').show();
		};



		$('.loginpagehidden').toggleClass('loginpageactive');



	});

	$('.submitbtn').on('click', function(){
		var firstname = $('#firstname').val();
		var lastname = $('#lastname').val();
		var email = $('#email').val();
		var password = $('#password').val();
		$.ajax({
			url: '/main/savelogin',
			type: 'POST',
			data: { firstname: firstname, lastname: lastname, email: email, password: password }
		}).done(function(data){
			if (data === null) {
				ShowError('We already have a user with that email address.  Did you forget your login info?');
				return;
			};
	});


		$('.loginpagehidden').toggleClass('loginpageactive');
	});

	$('.cancelbtn').on('click', function(){
		$.ajax({
			url: '/main/saveslogin',
			data: {id: "No ID", name: "You clicked cancel."},
			type: 'POST'
		}).done(function(data){
			console.log(data);
		});
		$('.loginpagehidden').toggleClass('loginpageactive');
	});




	

});