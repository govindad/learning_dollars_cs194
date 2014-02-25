$(document).ready(function(){

	// initialize runtime js template
	$("body").append(Templates.mybids());

	/* START jQuery Methods */
	
	$.get("/getplacedbids", function(data){
		data = jQuery.parseJSON(data);
		var bids = data["json-result"].items;
		var count = data["json-result"].count;
		if(count !== 0) {
			for (var b in bids){
				var bid = bids[b];
				$("#all_placed_bids").append(Templates.all_bids(bid));
			}
		} else {
			$("#my_bids_hdr").after(Templates.no_bids);
		}
	});

	// Accept Bid Won
	$(document).on("click", ".btn.btn-default.accept_bid", function() {
		var projectid = $(this).attr("projectid");
		var state = $(this).attr("state");
		accept_bid(1, projectid, state);
	});

	// Decline Bid Won
	$(document).on("click", ".btn.btn-default.decline_bid",  function() {
		var projectid = $(this).attr("projectid");
		var state = $(this).attr("state");
		accept_bid(0, projectid, state);
	});

	/* END jQuery Methods*/

});

function accept_bid(accepted, projectid, state) {
	$("#log_message").remove();
	$.get("/acceptbid/" + projectid + "/" + state, function(data){
		var response = data["json-result"];
		if(response) {
			//var status = response['statusconfirmation']
			$("#create_milestone").after(Templates.accept_bid_success);
		} else {
			$("#create_milestone").after(Templates.accept_bid_error);
		}
	});
}
