// write your javascript in here

/*
David Magee
MiU 0612
Project 3
*/
//test
var parseMateData = function(data){
	console.log(data);	
};

$(document).bind('pageinit', function(){

	var mateData = $('#addMateForm');

	mateData.validate({
		invalidHandler: function(form, validator){},
		submitHandler: function(){
			var data = $("mateData").serializeArray();
			localStorage.setItem("formdata", data);
			}

		
	});

});


/*
$(document).ready( function(){
	var amform = $('#addMateForm');
	amform.validate();
});
*/
/*
var parseAddMateForm = function(data){
	console.log(data)
};


$(document).bind('pageinit', function(){

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

*/