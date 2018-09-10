$(document).ready(function(){
 	$('.introduction').delay(500).fadeIn('slow').animate({
 		'margin-top' : '-=20px',
 		opacity: 1
 	}, 'medium', function(){
 		var len = $('.message-bubbles').find('li').size();
	 	time = [200, 900, 1500, 3200, 4200];
	 	num = [0, 5, 5, 0];

	 	for (var i = 0; i< len; i++){
	 		temp = ("'"+ '-='+num[i]+'px'+"'").toString();
	 		$('.message-bubbles').find('li').eq(i).delay(time[i]).animate({
				'margin-top' : '-=5px',
	 			opacity: 1
	 		}, 'medium');
	 	};
 	});

 	$('.add-email').on('click', function(){
 		console.log('hello');
 		$(".email-invite-form").append(
 			'<input placeholder="Email Address" type="text" required="">'
 		);

 	});
 	
 });