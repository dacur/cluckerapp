
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
	var newuser;

	if ($('#hdnID').val() !== '') {
		$('.loginbutton').hide();
		$('.logoutbutton').show();
	}
	else {
		$('.logoutbutton').hide();
		$('.loginbutton').show();
	}

	//START Validation functions
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
	//END validation functions

	//START of on click for login button
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

		if (lastnameresult == true && firstnameresult == true && emailresult == true && passwordresult == true){
			$('.submitbtn').show();
		};

		$('.loginpagehidden').toggleClass('loginpageactive');

	}); //END of on click for log in button

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
			// if (data === null) {
			// 	ShowError('We already have a user with that email address.  Did you forget your login info?');
			// 	return;
			// };
		}); 
		$('.loginpagehidden').toggleClass('loginpageactive');
	}); //END SUBMIT BUTTON

	$('.cancelbtn').on('click', function(){
		$.ajax({
			url: '/main/savelogin',
			data: {id: "No ID", name: "You clicked cancel."},
			type: 'POST'
		}).done(function(data){
			console.log(data);
		});
		$('.loginpagehidden').toggleClass('loginpageactive');
	});

	$('.logoutbutton').on('click', function(){
		$.ajax({
			url: '/main/logout'
			// data: {}
			// type: 'POST'
		}).done(function(){
			window.location.replace("/")
		});

	});

	//START CLUCKS ******FIX**************
	$('#cluckbtn').on('click', function(){
		var text = $('#clucktext').val();
		var user_id = $('#hdnID').val();

			$.ajax({
			url: '/main/saveclucks',
			data: {text: text},
			type: 'POST'
		}).done(function(){
			var clucktext = $('#clucktext').val(null)
		});

	});


	

});