// write your javascript in here

/*
David Magee
MiU 0612
Project 3
*/
//test

var parseAddMateForm = function(data){
	console.log(data);
};

$(document).bind( function(){

	var amform = $('#addMateForm'),
		amformErrorsLink = $('#amformErrorsLink')
	;
	
	amform.validate({
		invalidHandler: function(form, validator){
			amformErrorsLink.click();
		},
		submitHandler: function(){
			var data = amform.serializeArray();
			parseAddMateForm(data);
		}
	});

});
