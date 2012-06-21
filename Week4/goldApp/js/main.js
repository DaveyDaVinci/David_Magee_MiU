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
			
			var data = mateData.serializeArray();
			parseMateData(data);
			localStorage.setItem('formdata', data);
		
			
		}

		
	});

});


