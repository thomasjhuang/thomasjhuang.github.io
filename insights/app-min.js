//different scenarios
function changeScenario(e){0==e&&($("#property-tab #people").remove(),$("#property-tab #user").remove(),$("#property-tab #contact").show(),$("#property-tab #lead").show(),
//add additional tab
$("#property-tab").append('<li id="people">People</li>'),$(".menu .menu-header").css({width:"390px"}),$(".menu .menu-header .menu-tab li").removeClass("margin-change")),1!=e&&2!=e&&3!=e||(
//change to user
$("#property-tab #people").hide(),
// $('#property-tab #user').remove();
$("#property-tab #more").remove(),$("#property-tab #contact").hide(),$("#property-tab #lead").hide(),$(".menu .menu-header").css({width:"330px"}),1==e&&($("#property-tab").append('<li id="user">Users</li>'),showUserList()),2==e&&($(".menu .menu-header .menu-tab li").removeClass("margin-change-more"),$(".menu .menu-header .menu-tab li").addClass("margin-change"),$("#property-tab").append('<li id="user">Users</li>'),hideUserList()),3==e&&($("#property-tab #people").show(),$("#property-tab #user").remove(),$(".user-dropdown").show(),$(".menu .menu-header .menu-tab li").removeClass("margin-change"),$(".menu .menu-header .menu-tab li").addClass("margin-change-more"),$("#property-tab").append('<li class="user-caret" id="more">More<div id="caret-down"></div></li>'),showUserList()))}function hideUserList(){var e=["#prop-event-people","#prop-event-contact","#prop-event-lead","#prop-event-account-all","#prop-event"];$(".show-more").remove();for(var t=0;t<e.length;t++){for(var o=5;o<16;o++)$(e[t]+" li #item"+o).parent().hide();$('<li class="show-more"><p>Show more</p></li>').insertAfter($(e[t]+" li #item4").closest("li"))}}function showUserList(){var e=["#prop-event-people","#prop-event-contact","#prop-event-lead","#prop-event-account-all","#prop-event"];$(".show-more").remove();for(var t=0;t<e.length;t++)for(var o=5;o<16;o++)$(e[t]+" li #item"+o).parent().show()}
//hide some stuff
$(document).ready(function(){
//show more -> more items
function extendList(e){if(console.log("found evnet"+e),"prop-event"==e)$(".populate-show-more #"+e+" li").show(),$(".populate-show-more #"+e+" .show-more").hide();else for(var t=5;t<16;t++)console.log("gets here3"),$(".populate-show-more #"+e+" #item"+t).parent().show(),$(".populate-show-more #"+e+" .show-more").hide()}
//remove clause
//populate property
function populateProperty(object){
//getName
var propertyType=object.attr("id");if("4"==scenarioNum&&hideUserList(),"all"==propertyType){propertyType="event",$(".user-dropdown").show(),$("#prop-recent-event").show(),$("#prop-event").show(),console.log("prop-event shown"),$("#prop-event-account-all").show(),hideUserList();var propertyList=eval("eventPropertyList");for(console.log("get hereeee"),i=0;i<$("ul#prop-event li").length;i++)$("ul#prop-event li #item"+i).html(propertyList[i]),$("#prop-event-title").html('Event Properties<span class="dataset-label">Salesforce</span>')}else if("user"==propertyType)$("#prop-recent-event").hide(),//hide recent
$("#prop-event-account-all").hide(),$("#prop-event").hide(),console.log("prop-event hidden"),$(".user-dropdown").show(),hideUserList();else if(showUserList(),"event"==propertyType?($("#prop-recent-event").show(),$("#prop-event-account-all").hide(),$("#prop-event-title").html(propertyType+' Properties<span class="dataset-label">Salesforce</span>')):"contact"==propertyType||"lead"==propertyType||"account"==propertyType?($("#prop-recent-event").hide(),//hide recent
$("#prop-event-account-all").hide(),$("#prop-event-title").html(propertyType+' Properties<span class="dataset-label">Salesforce</span>')):"people"==propertyType&&($("#prop-recent-event").hide(),//hide recent
$("#prop-event-account-all").hide(),$("#prop-event-title").html(propertyType+' Properties<span class="dataset-label">Mixpanel</span>')),$(".user-dropdown").hide(),$("#prop-event").show(),$("#user-popover").hide(),"more"!=propertyType&&"all"!=propertyType){var propertyList=eval(propertyType+"PropertyList");for(i=0;i<$("ul#prop-event li").length;i++)$("ul#prop-event li #item"+i).html(propertyList[i])}
// if (propertyType == 'more'){
// 	$('#user-popover').hide();
// 	$('#property-tab li').removeClass('active');
// 	$('#more').addClass('active');
// }
}
//hide option menu
function hideOption(){$("#add-button").removeClass("rotated"),$("#searchfield").hide(),$("#add-button").attr("data-click-state",1),$("#menu-option-container").hide(),$("#menu-property").hide(),$("#menu-option-container .menu-option").show()}
//clone property clause
function cloneClause(e){
//fetch property name
counter+=1,idName="property-query"+counter;
//var propertyName = $('#'+ object.children().attr('id')).html();
var t=$("#"+e.parent().attr("id")+" #"+e.children().attr("id")).html(),o=e.parent().find("h3").text();o=0<=o.indexOf("Salesforce")?(label="Salesforce",o.replace("Salesforce","")):(label="Mixpanel",o.replace("Mixpanel",""));var r=$("#property-query").clone().attr("id",idName);
//replace values
r.find("div.clause-header span").html(o),r.find("div.clause-body").html(label+": "+t),r.insertBefore($("#searchfield")).show()}var listCount,i=0,counter=0,scenarioNum=2;$("#menu-option-container").hide(),$(".user-dropdown").hide(),$(".top-panel").width(),$("#user-popover").hide(),$("#property-query").hide(),$("#user").hide(),changeScenario(scenarioNum),
//plus button -> dropdown
$("#add-button").click(function(){1==$(this).attr("data-click-state")?($(this).attr("data-click-state",0),$("#add-button").addClass("rotated"),$("#menu-option-container").css({position:"absolute",top:$(this).position().top+7,left:$(this).position().left}),$("#menu-option-container").show(),$("#menu-option-container #all").trigger("click"),
//all is default
$("#searchfield").insertBefore($("#add-button")).show()):hideOption(),$(document).mouseup(function(e){var t=$("#menu-option-container"),o=$("#searchfield"),r=$("#user-popover");
//add user popover
t.is(e.target)||0!=t.has(e.target).length||o.is(e.target)||0!=o.has(e.target).length||hideOption()})}),
//Property menu - switching tabs
$(document).on("click","#property-tab li",function(){
//update active tab
"more"!=$(this).attr("id")&&"user-popover"!=$(this).parent().attr("id")&&($("#property-tab li").removeClass("active"),$(this).addClass("active"),
//repupulate data
populateProperty($(this))),"user-popover"==$(this).parent().attr("id")&&(populateProperty($(this)),$("#user-popover").hide(),$("#property-tab li").removeClass("active"),$("#more").addClass("active")),"more"==$(this).attr("id")&&($("#user-popover").show(),$("#user-popover li").show(),$(document).mouseup(function(e){var t=$("#user-popover");t.is(e.target)||0!=t.has(e.target).length||$("#user-popover").hide()}))}),
//group by
$("#menu-option-group").click(function(){$("#menu-option-container .menu-option").hide(),$("#menu-property").show()}),
//back button
$("#back-arrow").click(function(){$("#menu-property").hide(),$("#menu-option-container .menu-option").show()}),
//select property for users
$(document).on("click",".prop-event li",function(){"show-more"==$(this).attr("class")?extendList($(this).parent().attr("id")):(cloneClause($(this)),hideUserList(),hideOption())}),$(document).on("click",".remove-clause",function(){$(this).parent().parent().parent().hide()})}),
//choose scenarios
$(".scenarios li").on("click",function(){scenarioNum=parseInt($(".scenarios li").index(this)),changeScenario(scenarioNum),$(".scenarios li").removeClass("activeScene"),$(this).addClass("activeScene")}),$(".clause-overflow").hide();var eventPropertyList=["zzAccount ID","Amount","Billing City","Campaign ID","Closed Date","Created Date","Description","Email","Expected Amount","First Name","High Risk","Last Activity","Lead source","MRR","Opportunity closed","Task subtype","Owner ID","Platform","Reason won"],accountPropertyList=["Account ID","ADAU","ARR","Billing city","Bucket Data Cap","Churn Amount","Churn Date","Churn reason","City","Company size","Created date","CSM","Days to renewal","Employees","Event Cap","Industry","Last Activity","Named Account","Onboarding stage","Product NPS score"],contactPropertyList=["Account type","Company size","Contact id","Country","Contact status","Department","Do not call","Domain","Email","Event Tally","Event Plan","Feature Fate","First name","Industry","Last activity","Last name","Last seen","Overage rate"],leadPropertyList=["AE Segment","Amount","Annual Revenue","Bonus events","City","Company","Competition","Converted","Converted Date","Converted opportunity: won","Days to conversion","Employees","Event discount","Growth territory","Industry","Lead source"],peoplePropertyList=["Amount","Annual Revenue","Bonus events","City","Company","Competition","Converted","Converted Date","Converted opportunity: won","Days to conversion","Days to qualified date","Employees","Event discount","Growth territory","High risk","Last activity"];