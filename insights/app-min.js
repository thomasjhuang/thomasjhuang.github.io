

$(document).ready(function(){
	var listCount; 
	var i = 0;
	var counter = 0;
	var scenarioNum = 2;
	$('#menu-option-container').hide();	
	$('.user-dropdown').hide();
	$('.top-panel').width();
	$('#user-popover').hide();
	$('#property-query').hide();
	$('#user').hide();
	changeScenario(scenarioNum);

	//plus button -> dropdown
	$('#add-button').click(function(){
		if($(this).attr('data-click-state') == 1){
			$(this).attr('data-click-state', 0)
			
			$('#add-button').addClass('rotated');		
			$('#menu-option-container').css({
				"position": "absolute",
				"top": $(this).position().top+7,
				"left": $(this).position().left
				});

			$('#menu-option-container').show();	
			$('#menu-option-container #all').trigger('click');	
			//all is default 

			$('#searchfield').insertBefore($('#add-button')).show();

		}else {
			hideOption();
		}
		
		$(document).mouseup(function (e) {
			var menu = $("#menu-option-container");
			var search = $('#searchfield');
			var userPopover = $('#user-popover');
			//add user popover 
	     	if ((!menu.is(e.target) && menu.has(e.target).length == 0)
	     		&&(!search.is(e.target) && search.has(e.target).length == 0)) {
		         hideOption();
		    }

	 	});
	});

	//Property menu - switching tabs 
	$(document).on('click', '#property-tab li', function(){
		//update active tab
		if($(this).attr('id')!= 'more' && $(this).parent().attr('id') != 'user-popover'){
			$('#property-tab li').removeClass('active');
			$(this).addClass('active');
			//repupulate data
			populateProperty($(this));
		}

		if($(this).parent().attr('id') == 'user-popover'){
			populateProperty($(this));
			$('#user-popover').hide();
			$('#property-tab li').removeClass('active');
			$('#more').addClass('active');
		}

		if($(this).attr('id') == 'more' ){
			$('#user-popover').show();
			$('#user-popover li').show();
			$(document).mouseup(function (e) {
				var userPopover = $('#user-popover');
			    if (!userPopover.is(e.target) && userPopover.has(e.target).length == 0) {
			         $('#user-popover').hide();
			    }
		 	});
		}


	});

	//group by
	$('#menu-option-group').click(function(){
		$('#menu-option-container .menu-option').hide();
		$('#menu-property').show();
	});

	//back button
	$('#back-arrow').click(function(){
		$('#menu-property').hide();
		$('#menu-option-container .menu-option').show();
	})

	
	//show user popover
	// $(document).on('click', '#caret-down', function(){
	// 	$('#user-popover').show();
	// 	$('#user-popover li').show();
	// 	$(document).mouseup(function (e) {
	// 		var userPopover = $('#user-popover');
	// 	    if (!userPopover.is(e.target) && userPopover.has(e.target).length == 0) {
	// 	         $('#user-popover').hide();
	// 	    }
	//  	});

	// });


	//select property for users 
	$(document).on('click', '.prop-event li', function(){
		
		if($(this).attr('class') == 'show-more' ){
			extendList($(this).parent().attr('id'));
		}else{
			cloneClause($(this));
			hideUserList();
			hideOption();
		}	
	});
	//show more -> more items 
	function extendList(object){
		console.log('found evnet' + object);
		if(object == 'prop-event'){
			$('.populate-show-more #' + object +' li').show();
			$('.populate-show-more #' + object +' .show-more').hide();
		}else{
			for(var i = 5; i<16; i++){
				console.log('gets here3')
				$('.populate-show-more #' + object +' #item'+i).parent().show();
				$('.populate-show-more #' + object +' .show-more').hide();
			}
		}
	}

	//remove clause
	$(document).on('click', '.remove-clause', function(){
		$(this).parent().parent().parent().hide();
	});

	//populate property
	function populateProperty(object){
		//getName
		var propertyType = object.attr('id');

		if (scenarioNum == '4' ) {
			hideUserList();
		}
		if (propertyType == 'all'){
			propertyType = 'event';
			$('.user-dropdown').show();
			$('#prop-recent-event').show();
			$('#prop-event').show();
			console.log('prop-event shown');
			$('#prop-event-account-all').show();
			hideUserList();
			var propertyList = eval('eventPropertyList');
			console.log('get hereeee')
			for (i = 0; i< $('ul#prop-event li').length; i++){		
				$('ul#prop-event li #item' + i).html(propertyList[i]);
				$('#prop-event-title').html('Event Properties<span class="dataset-label">Salesforce</span>');
			}
		}else if (propertyType == 'user'){
			$('#prop-recent-event').hide(); //hide recent 
			$('#prop-event-account-all').hide();
			$('#prop-event').hide();
			console.log('prop-event hidden');
			$('.user-dropdown').show();
			hideUserList();
		
		}else{
			showUserList();
			if(propertyType == 'event'){
				$('#prop-recent-event').show();
				$('#prop-event-account-all').hide();
				$('#prop-event-title').html(propertyType +' Properties<span class="dataset-label">Salesforce</span>');
				
			}else if(propertyType == 'contact' || propertyType == 'lead' 
				|| propertyType == 'account'){
				$('#prop-recent-event').hide(); //hide recent 
				$('#prop-event-account-all').hide();
				$('#prop-event-title').html(propertyType +' Properties<span class="dataset-label">Salesforce</span>');
				
			}else if(propertyType == 'people'){
				$('#prop-recent-event').hide(); //hide recent 
				$('#prop-event-account-all').hide();
				$('#prop-event-title').html(propertyType +' Properties<span class="dataset-label">Mixpanel</span>');

			}

			$('.user-dropdown').hide();
			$('#prop-event').show();
			$('#user-popover').hide();
			if (propertyType != 'more' && propertyType != 'all'){
				var propertyList = eval( propertyType+'PropertyList');
				for (i = 0; i< $('ul#prop-event li').length; i++){		
					$('ul#prop-event li #item' + i).html(propertyList[i]);
				}
			}
		}

		// if (propertyType == 'more'){
		// 	$('#user-popover').hide();
		// 	$('#property-tab li').removeClass('active');
		// 	$('#more').addClass('active');
		// }

	}

	//hide option menu 
	function hideOption(){
		$('#add-button').removeClass('rotated');
		$('#searchfield').hide();
	    $('#add-button').attr('data-click-state', 1);
		$('#menu-option-container').hide();	
		$('#menu-property').hide();
		$('#menu-option-container .menu-option').show();
	}

	//clone property clause 
	function cloneClause(object){
		//fetch property name 
		counter = counter +1;
		idName = 'property-query'+counter;

		//var propertyName = $('#'+ object.children().attr('id')).html();
		var propertyName = $('#'+ object.parent().attr('id') + ' #' + 
			object.children().attr('id')).html();

		var propertyType = object.parent().find('h3').text();
		if (propertyType.indexOf("Salesforce") >= 0){
			label = "Salesforce";
			propertyType = propertyType.replace('Salesforce', '');
		}else{
			label = "Mixpanel";
			propertyType = propertyType.replace('Mixpanel', '');
		}
		
		
		var cloneOpject = $('#property-query').clone().attr('id',idName);
		
		//replace values 
		cloneOpject.find('div.clause-header span').html(propertyType);	 
		cloneOpject.find('div.clause-body').html(label+': '+propertyName);	 
		cloneOpject.insertBefore($('#searchfield')).show();
	}
});

//choose scenarios 
$('.scenarios li').on('click', function(){
	scenarioNum = parseInt($('.scenarios li').index(this));
	changeScenario(scenarioNum);
	$('.scenarios li').removeClass('activeScene');
	$(this).addClass('activeScene');
})

//different scenarios 
function changeScenario(num){

	if (num == 0 ){
		$('#property-tab #people').remove();
		$('#property-tab #user').remove();
		$('#property-tab #contact').show();
		$('#property-tab #lead').show();
		//add additional tab
		$('#property-tab').append('<li id="people">People</li>');
		$('.menu .menu-header').css({'width':'390px'});
		$('.menu .menu-header .menu-tab li').removeClass('margin-change');
	
	}
	if(num == 1 || num == 2 || num == 3){
		//change to user 
		$('#property-tab #people').hide();
		// $('#property-tab #user').remove();
		$('#property-tab #more').remove();
		$('#property-tab #contact').hide();
		$('#property-tab #lead').hide();
		$('.menu .menu-header').css({'width':'330px'});
		if(num == 1){
			$('#property-tab').append('<li id="user">Users</li>');
			showUserList();
		}
		if(num == 2){
			$('.menu .menu-header .menu-tab li').removeClass('margin-change-more');
		    $('.menu .menu-header .menu-tab li').addClass('margin-change');
			$('#property-tab').append('<li id="user">Users</li>');
			hideUserList();
		}
		if (num == 3){
			$('#property-tab #people').show();
			$('#property-tab #user').remove();
			$('.user-dropdown').show();

			$('.menu .menu-header .menu-tab li').removeClass('margin-change');
			$('.menu .menu-header .menu-tab li').addClass('margin-change-more');
			$('#property-tab').append('<li class="user-caret" id="more">More<div id="caret-down"></div></li>');
			showUserList();
		}

	}
}

function hideUserList(){
	var list = ['#prop-event-people', 
				'#prop-event-contact', 
				'#prop-event-lead',
				'#prop-event-account-all',
				'#prop-event']; 
	$('.show-more').remove();
	for(var j = 0; j<list.length; j++){

		for(var i = 5; i<16; i++){
			$(list[j] +' li #item'+i).parent().hide();
		}
			$('<li class="show-more"><p>Show more</p></li>').insertAfter($(list[j] +' li #item4').closest('li'));
	}
}

function showUserList(){
	var list = ['#prop-event-people', 
				'#prop-event-contact', 
				'#prop-event-lead',
				'#prop-event-account-all',
				'#prop-event']; 
	$('.show-more').remove();

	for(var j = 0; j<list.length; j++){
		for(var i = 5; i<16; i++){
			$(list[j] +' li #item'+i).parent().show();
		}
	}
}



//hide some stuff 
$('.clause-overflow').hide();




var eventPropertyList = [
'zzAccount ID', 
'Amount',
'Billing City',
'Campaign ID',
'Closed Date',
'Created Date',
'Description',
'Email',
'Expected Amount',
'First Name',
'High Risk',
'Last Activity',
'Lead source',
'MRR',
'Opportunity closed',
'Task subtype',
'Owner ID',
'Platform',
'Reason won'
];

var accountPropertyList = [
'Account ID', 
'ADAU',
'ARR',
'Billing city',
'Bucket Data Cap',
'Churn Amount',
'Churn Date',
'Churn reason',
'City',
'Company size',
'Created date',
'CSM',
'Days to renewal',
'Employees',
'Event Cap',
'Industry',
'Last Activity',
'Named Account',
'Onboarding stage',
'Product NPS score'
];

var contactPropertyList = [
'Account type',
'Company size',
'Contact id',
'Country',
'Contact status',
'Department',
'Do not call',
'Domain',
'Email',
'Event Tally',
'Event Plan',
'Feature Fate',
'First name',
'Industry',
'Last activity',
'Last name',
'Last seen',
'Overage rate',
];


var leadPropertyList = [
'AE Segment',
'Amount',
'Annual Revenue',
'Bonus events',
'City',
'Company',
'Competition',
'Converted',
'Converted Date',
'Converted opportunity: won',
'Days to conversion',  
'Employees',
'Event discount',
'Growth territory',
'Industry',
'Lead source'
];

var peoplePropertyList = [
'Amount',
'Annual Revenue',
'Bonus events',
'City',
'Company',
'Competition',
'Converted',
'Converted Date',
'Converted opportunity: won',
'Days to conversion',
'Days to qualified date',
'Employees',
'Event discount',
'Growth territory',
'High risk',
'Last activity'
];












