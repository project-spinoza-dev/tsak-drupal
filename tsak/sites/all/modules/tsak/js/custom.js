(function ($) {

//Jquery for Tsak
//Add Json Command Data

if (!library)
   var library = {};

library.json = {
   replacer: function(match, pIndent, pKey, pVal, pEnd) {
      var key = '<span class=json-key>';
      var val = '<span class=json-value>';
      var str = '<span class=json-string>';
      var r = pIndent || '';
      if (pKey)
         r = r + key + pKey.replace(/[": ]/g, '') + '</span>: ';
      if (pVal)
         r = r + (pVal[0] == '"' ? str : val) + pVal + '</span>';
      return r + (pEnd || '');
      },
   prettyPrint: function(obj) {
      var jsonLine = /^( *)("[\w]+": )?("[^"]*"|[\w.+-]*)?([,[{])?$/mg;
      return JSON.stringify(obj, null, 3)
         .replace(/&/g, '&amp;').replace(/\\"/g, '&quot;')
         .replace(/</g, '&lt;').replace(/>/g, '&gt;')
         .replace(jsonLine, library.json.replacer);
      }
};
  var commandJson = {
  			"dumpAccountSettings":[
				{"field_name":"-o","desc":"Enter output file name with extension"}
			],
			"dumpFollowerIDs":[
				{"field_name":"-uname","desc":"Enter your twitter screen name"},
				{"field_name":"-limit","desc":"Enter twitter API limit"},
				{"field_name":"-o","desc":"Enter output file name with extension"}
			],
			"dumpFriendIDs":[
				{"field_name":"-uname","desc":"Enter your twitter screen name"},
				{"field_name":"-limit","desc":"Enter twitter API limit"},
				{"field_name":"-o","desc":"Enter output file name with extension"}
			],
			"dumpUserTimeLine":[
				{"field_name":"-uname","desc":"Enter your twitter screen name"},
				{"field_name":"-limit","desc":"Enter twitter API limit"},
				{"field_name":"-o","desc":"Enter output file name with extension"}
			],
			"dumpHomeTimeLine":[
				{"field_name":"-o","desc":"Enter output file name with extension"}
			],
			"dumpTweets":[
				{"field_name":"-keywords","desc":"Comma separated keywords"},
				{"field_name":"-limit","desc":"Enter twitter API limit Max = 180"},
				{"field_name":"-o","desc":"Enter output file name with extension"}
			],
			"dumpOwnRetweets":[
				{"field_name":"-o","desc":"Enter output file name with extension"}
			],
			"dumpStatus":[
				{"field_name":"-sid","desc":"Enter Status ID of the desired status"},
				{"field_name":"-o","desc":"Enter output file name with extension"}
			],
			"dumpRetweeters":[
				{"field_name":"-sid","desc":"Enter Status ID of the desired status"},
				{"field_name":"-o","desc":"Enter output file name with extension"}
			],
			"dumpMentionsTimeLine":[
				{"field_name":"-o","desc":"Enter output file name with extension"}
			],
			"dumpUsersLookup":[
				{"field_name":"-i","desc":"Enter Path/Name of the file in containing id's/screen_names of the users to be Looked up"},
				{"field_name":"-o","desc":"Enter output file name with extension"}
			],
			"dumpBlockList":[
				{"field_name":"-o","desc":"Enter output file name with extension"}
			],
			"searchUsers":[
				{"field_name":"-keywords","desc":"Search keywords"},
				{"field_name":"-o","desc":"Enter output file name with extension"}
			],
			"showFriendShip":[
				{"field_name":"-suser","desc":"Enter ScreenName or ID of the source user."},
				{"field_name":"-tuser","desc":"Enter ScreenName or ID of the Target user."},
				{"field_name":"-o","desc":"Enter output file name with extension"}
			],
			"dumpFriendsList":[
				{"field_name":"-uname","desc":"Enter your twitter screen name"},
				{"field_name":"-limit","desc":"Enter twitter API limit"},
				{"field_name":"-o","desc":"Enter output file name with extension"}
			],
			"dumpFollowersList":[
				{"field_name":"-uname","desc":"Enter your twitter screen name"},
				{"field_name":"-limit","desc":"Enter twitter API limit"},
				{"field_name":"-o","desc":"Enter output file name with extension"}
			],
			"dumpFavourites":[
				{"field_name":"-o","desc":"Enter output file name with extension"}
			],
			"dumpSugeestedUserCats":[
				{"field_name":"-o","desc":"Enter output file name with extension"}
			],
			"dumpUserSuggestions":[
				{"field_name":"-slug","desc":"Enter suggested users"},
				{"field_name":"-o","desc":"Enter output file name with extension"}
			],
			"dumpMemberSuggestions":[
				{"field_name":"-slug","desc":"Enter suggested members"},
				{"field_name":"-o","desc":"Enter output file name with extension"}
			],
			"dumpUserLists":[
				{"field_name":"-uname","desc":"Enter your twitter screen name"},
				{"field_name":"-o","desc":"Enter output file name with extension"}
			],
			"dumpListStatuses":[
				{"field_name":"-lid","desc":"Enter The ID of List for which statuses will be return"},
				{"field_name":"-o","desc":"Enter output file name with extension"}
			],
			"dumpSavedSearches":[
				{"field_name":"-lid","desc":"Enter The ID of List for which statuses will be return"},
				{"field_name":"-o","desc":"Enter output file name with extension"}
			],
			"lookupFriendShip":[
				{"field_name":"-i","desc":"Enter Path/Name of the file in containing id's/screen_names of the users to be looked up for frienship properties to authenticating user"},
				{"field_name":"-o","desc":"Enter output file name with extension"}
			],
			"dumpIncomingFriendships":[
				{"field_name":"-limit","desc":"Enter twitter API limit"},
				{"field_name":"-o","desc":"Enter output file name with extension"}
			],
			"dumpOutgoingFriendships":[
				{"field_name":"-limit","desc":"Enter twitter API limit"},
				{"field_name":"-o","desc":"Enter output file name with extension"}
			],
			"dumpGeoDetails":[
				{"field_name":"-pid","desc":"Enter your twitter pid"},
				{"field_name":"-o","desc":"Enter output file name with extension"}
			],
			"dumpSimilarPlaces":[
				{"field_name":"-lat","desc":"Enter Latitude of the place, for which the result will be returned."},
				{"field_name":"-long","desc":"Enter Longitude of the place, for which the result will be returned."},
				{"field_name":"-pname","desc":"Name of the place, for which the result will be returned."},
				{"field_name":"-o","desc":"Enter output file name with extension"}
			],
			"searchPlace":[
				{"field_name":"-lat","desc":"Enter Latitude of the place, for which the result will be returned."},
				{"field_name":"-long","desc":"Enter Longitude of the place, for which the result will be returned."},
				{"field_name":"-o","desc":"Enter output file name with extension"}
			],
			"dumpAvailableTrends":[
				{"field_name":"-o","desc":"Enter output file name with extension"}
			],
			"dumpPlaceTrends":[
				{"field_name":"-o","desc":"Enter output file name with extension"},
				{"field_name":"-woeid","desc":"Enter The Yahoo! Where On Earth ID of the location"}
			],
			"dumpClosestTrends":[
				{"field_name":"-lat","desc":"Enter Latitude of the place, for which the result will be returned."},
				{"field_name":"-long","desc":"Enter Longitude of the place, for which the result will be returned."},
				{"field_name":"-o","desc":"Enter output file name with extension"}
			],
			"dumpMutesIDs":[
				{"field_name":"-limit","desc":"Enter twitter API limit"},
				{"field_name":"-o","desc":"Enter output file name with extension"}
			],
			"dumpUserListMemberships":[
				{"field_name":"-uname","desc":"Enter your twitter screen name"},
				{"field_name":"-limit","desc":"Enter twitter API limit"},
				{"field_name":"-o","desc":"Enter output file name with extension"}
			],
			"dumpUserListSubscribers":[
				{"field_name":"-lid","desc":"Enter Numerical twitter ID of a list."},
				{"field_name":"-limit","desc":"Enter twitter API limit"},
				{"field_name":"-o","desc":"Enter output file name with extension"}
			],
			"dumpUserListMembers":[
				{"field_name":"-lid","desc":"Enter Numerical twitter ID of a list."},
				{"field_name":"-limit","desc":"Enter twitter API limit"},
				{"field_name":"-o","desc":"Enter output file name with extension"}
			],
			"dumpUserListSubscriptions":[
				{"field_name":"-uname","desc":"Enter your twitter screen name"},
				{"field_name":"-limit","desc":"Enter twitter API limit"},
				{"field_name":"-o","desc":"Enter output file name with extension"}
			],
			"streamStatuses":[
				{"field_name":"-keywords","desc":"Comma separated keywords"},
				{"field_name":"-show","desc":"online streaming to be displayed on console"},
				{"field_name":"-o","desc":"Enter output file name with extension"}
			]			
		};
  $(document).ready(function() {

  	addSelectFields();
	showHide();
	//onclick function
	$('#submitform').click(function(){
		var is_validated = formValidate();
		if(is_validated){
			var optionSelected = $("#commands-select option:selected").text();
			var commandOptions = commandJson[optionSelected];

			for(var comm in commandOptions){
				var showfield = commandOptions[comm];
				var showfieldname = showfield.field_name;
				var fieldValue = $("input[id='"+showfieldname+"']").val();
				
				fieldValue = fieldValue.trim();
				if(fieldValue === ""){
					var parent = $("#"+showfield).parent().get(0);
					var expectedLabel = $(parent).children().get(0);
					$(expectedLabel).removeClass("label-default");
					$(expectedLabel).addClass("label-danger");
					$( "#"+showfieldname).keypress(function() {
					  $(expectedLabel).removeClass("label-danger");
					  $(expectedLabel).addClass("label-default");
					});
					return;
				}
			}
			var jsonFormData = getJsonFormData();
			var responseData = sendAjaxRequest(jsonFormData);
		}
	});

  });

//function to add items to select and add fields to form
function addSelectFields(){

	//make a json data
		
		for(var item in commandJson){

			$("#commands-select").append("<option value="+item+">"+item+"</option>");
		}
		$("#commands-select").change(function(){
			//console.log($(this).val());
			$(this).find("option:selected").each(function(){
				var v = $(this).attr("value");
				var fields = commandJson[v];
				$('.commands-selected').empty();
				for(var vi in fields){
					var fieldobj = fields[vi];
					var field_name = fieldobj.field_name;
					var field_desc = fieldobj.desc;
					$( ".synch_chk_div" ).remove();
					$('.checkbox-div').removeClass("checkbox-area");

					$('.commands-selected').append('<div class="form-group"><label class="label label-default dynamic-label">'+field_name+'</label><input type="text" class="form-control inputcommand"  placeholder="'+field_desc+'" name="'+field_name+'" id="'+field_name+'" required></div>');
				}
				if(v == "dumpTweets"){
					$( ".synch_chk_div" ).remove();
					$('.checkbox-div').addClass("checkbox-area");
					$('.checkbox-div').prepend('<div class="synch_chk_div form-group"><input type="checkbox" name="synch_chk" id="synch_chk"><span class="sync-txt">Options</span></div>');
				}
				$('#synch_chk').click(function() {
				if ( $('input[name="synch_chk"]').is(':checked') ) {
					$('.synch_chk_div').append('<div class="radio_chk_div form-group"><form action=""><input type="radio" name="synch_rad" id="radio_1" value="negative" checked><span class="sync-txt">Filter Negative</span><br><input type="radio" name="synch_rad" id="radio_2" value="positive"><span class="sync-txt">Filter Positive</span><br><input type="radio" name="synch_rad" id="radio_3" value="entity"><span class="sync-txt">Extract Entities</span></form></div>');
				}
				else if (!$('input[name="synch_chk"]').is(':checked') ) {
					$('.radio_chk_div').hide();
				}
				});
			});
		});
		//. fire dropDown onChange event
		$("#commands-select").trigger('change');
}
//function to showhide application keys fields
function showHide(){
	//keys configuration
	$('#key-conf-id').click(function(){
		$(this).text('Show Keys Configuration');
	    if($('.applicationkeys').is(':visible')){
	          $(this).text('Show Keys Configuration');
	    }else{
	          $(this).text('Hide Keys Configuration');
	    }
	    $('.applicationkeys').slideToggle('medium');
	    return false;
	});
}
//form validation
function formValidate(){

	if($('#consumerKey').val() == ""){
        $(".consumerKey").removeClass('label-default');
        $(".consumerKey").addClass('label-danger');
        $( "#consumerKey").keypress(function() {
			$(".consumerKey").addClass('label-default');
			$(".consumerKey").removeClass('label-danger');
		});
        return false;
    } 
    else if($('#consumerSecret').val() == ""){
        $(".consumerSecret").removeClass('label-default');
        $(".consumerSecret").addClass('label-danger');
        $( "#consumerSecret").keypress(function() {
			$(".consumerSecret").addClass('label-default');
			$(".consumerSecret").removeClass('label-danger');
		});
        return false;
    }
    else if($('#accessToken').val() == ""){
     	$(".accessToken").removeClass('label-default');
        $(".accessToken").addClass('label-danger');

        $( "#accessToken").keypress(function() {
			$(".accessToken").addClass('label-default');
			$(".accessToken").removeClass('label-danger');
		});
        return false;
    } 
    else if($('#accessTokenSecret').val() == ""){
        $(".accessTokenSecret").removeClass('label-default');
        $(".accessTokenSecret").addClass('label-danger');
        $( "#accessTokenSecret").keypress(function() {
			$(".accessTokenSecret").addClass('label-default');
			$(".accessTokenSecret").removeClass('label-danger');
		});
        return false;
    }
    else{
    	return true;
    }
}
//Get json form data 
function getJsonFormData(){
	var jsonCommand = new Array();
	$('.commands-selected input ').each(
	    function(index){  
	        var input = $(this);
	        var fieldname = input.attr('name');
	        var fieldvalue = input.val();

			if(fieldname == "-o"){
				fieldvalue = fieldvalue.replace(/\\/g, '');
				fieldvalue = fieldvalue.replace(/\//g, '');
			}
	        var col = {};
	        col[fieldname] = fieldvalue;
			jsonCommand.push(col);
	    }
	);
	//get applicationkey values and selected command value
	var comselect = $('#commands-select').val();
	var consumerKey = $('#consumerKey').val();
	var consumerSecret = $('#consumerSecret').val();
	var accessToken = $('#accessToken').val();
	var accessTokenSecret = $('#accessTokenSecret').val();
	
	//Json object is created here
		var commandJson = {
		command:comselect,
		//values:[],
		credentials:{
			"-consumerKey":consumerKey,
			"-consumerSecret":consumerSecret,
			"-accessToken":accessToken,
			"-accessSecret":accessTokenSecret
		}
	};
	commandJson['values'] = jsonCommand;
	//if sentiments is checked
	if ( $('input[name="synch_chk"]').is(':checked') ) {
			var chk_sentiment = ($("input[name=synch_rad]:checked").val());
		if(chk_sentiment =='negative'){
			commandJson['action'] = {"-sentiment":"negative", "-entity":"null"};
		}
		else if(chk_sentiment =='positive'){
			commandJson['action'] = {"-sentiment":"positive", "-entity":"null"};
		}
		else if(chk_sentiment =='entity'){
			commandJson['action'] = {"-sentiment":"null", "-entity":"null"};
		}
	}
	//. var jsonString = JSON.stringify(commandJson);
	return commandJson;
}

//Ajax request to twitter
function sendAjaxRequest(formData){
	$.ajax({
		type: 'POST',
		async: true,
		//. contentType: "application/json",
		//url: 'http://localhost:9191/tsak/api',
		url: 'request.php',
		data: formData, //. JSON.stringify(formData),
		dataType: "json",
		beforeSend: function (request){
		  console.log(JSON.stringify(formData));
		},
		success: function(response){
			//console.log(response);
			//var jsonPrettyPrint = JSON.stringify(response);
			$("#output-panel").css("display","block");
			$("#json").empty();
			$('#json').html(library.json.prettyPrint(response));
			if(response['error'] == null){
				$("#data_downloader").css("display", "inline-block");
				$("#data_downloader").attr("href", "data_downloader.php?filename="+response.absolutePath);
			}else{
				$("#data_downloader").css("display", "none");
			}
			return response;
		},
		error: function(jqXHR, textStatus, ex){
			$("#data_downloader").css("display", "none");
			console.log(jqXHR);
			console.log(textStatus);
			console.log(ex);
			return null;
		}
	});
}



 })(jQuery);
//function for saving tsak keys
function saveTsakKeys(uid, consumerKey,consumerSecret,accessToken,accessTokenSecret) {
	
	(jQuery).ajax({
		url : 'http://localhost/tsak/savedtsakkeys',
		data : {
			puid : uid,
			pconsumerKey : consumerKey,
			pconsumerSecret : consumerSecret,
			paccessToken : accessToken,
			paccessTokenSecret : accessTokenSecret
		},
		beforeSend : function() {
			//jQuery("#saveMessage").show();
			//jQuery("#loadingimg").show();
		},
		type : 'post',
		success : function(data) {
			jQuery("#message-box").empty();
			jQuery("#message-box").append('<span class="success-msg">Application keys Saved successfully</span>');
		},
		error : function(xhr, status, error) {
			// executed if something went wrong during call
			jQuery("#message-box").empty();
			jQuery("#message-box").append('<span class="error-msg">Application keys Already saved.Reload Page</span>');
			if (xhr.status > 0)
				alert('got error: ' + status); // status 0 - when load is
			// interrupted
		}
	});
	
};

//update tsak App keys
//function for saving tsak keys
function updateTsakKeys(uid, consumerKey,consumerSecret,accessToken,accessTokenSecret) {
	
	(jQuery).ajax({
		url : 'http://localhost/tsak/updatetsakkeys',
		data : {
			upuid : uid,
			upconsumerKey : consumerKey,
			upconsumerSecret : consumerSecret,
			upaccessToken : accessToken,
			upaccessTokenSecret : accessTokenSecret
		},
		beforeSend : function() {
			//jQuery("#saveMessage").show();
			//jQuery("#loadingimg").show();
		},
		type : 'post',
		success : function(data) {
			jQuery("#message-box").empty();
			jQuery("#message-box").append('<span class="success-msg">Application keys Updated successfully</span>');
			
		},
		error : function(xhr, status, error) {
			// executed if something went wrong during call
			jQuery("#message-box").empty();
			jQuery("#message-box").append('<span class="error-msg">Application keys Already saved</span>');
			if (xhr.status > 0)
				alert('got error: ' + status); // status 0 - when load is
			// interrupted
		}
	});
	
};