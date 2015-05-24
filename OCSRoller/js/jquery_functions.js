
 $(document).ready(function(){
	 
	$ ('td, #oa, #ra').hover(function(){
$(this).toggleClass("highlight")
	});	
	//Turning Table into "button"
	$ ("#td_ec").click(function(){
$("#radio_ec").prop("checked", true)
	});	
	
	$ ("#td_vc").click(function(){
$("#radio_vc").prop("checked", true)
	});	
	
	$ ("#td_c").click(function(){
$("#radio_c").prop("checked", true)
	});	
	
	$ ("#td_o").click(function(){
$("#radio_o").prop("checked", true)
	});	
	
	$ ("#oa").click(function(){
$("#radio_oa").prop("checked", true)
	});
	
	$ ("#ra").click(function(){
$("#radio_ra").prop("checked", true)
	});
 });