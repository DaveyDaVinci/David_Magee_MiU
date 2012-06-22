// write your javascript in here

/*
David Magee
MiU 0612
Project 3
*/
//test
<<<<<<< HEAD
=======


>>>>>>> origin/gh-pages
var parseMateData = function(data){
	console.log(data);	
};

<<<<<<< HEAD
$(document).bind('pageinit', function(){

	var mateData = $('#addMateForm');
	
=======

$(document).bind('pageinit', function(){

	var mateData = $('#addMateForm');
>>>>>>> origin/gh-pages

	mateData.validate({
		invalidHandler: function(form, validator){},
		submitHandler: function(){
<<<<<<< HEAD
			var data = mateData.serializeArray();
			parseMateData(data);
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
=======
			
			var data = mateData.serializeArray();
			parseMateData(data);
			localStorage.setItem('formdata', data);
		
			
		}

		
>>>>>>> origin/gh-pages
	});

});

<<<<<<< HEAD
*/
=======

>>>>>>> origin/gh-pages
