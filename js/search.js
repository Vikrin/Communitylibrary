window.onload=function(){
	$( "#Language" ).click(function() {
	
  $( "#languagecontent").slideToggle( "slow");
  $(this).toggleClass("active"); return false;
  
});
  	$( "#Community" ).click(function() {
  $( "#communitycontent").slideToggle( "slow" );
  $(this).toggleClass("active"); return false;

});
   $( "#Category" ).click(function() {
  $( "#categorycontent").slideToggle( "slow" );
  $(this).toggleClass("active"); return false;

});
	$("#China").click(function(){
		window.location="country.html";

	});
}
