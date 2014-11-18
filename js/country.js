window.onload=function(){
  	$( "#Community" ).click(function() {
  $( "#communitycontent").slideToggle( "slow" );
  $(this).toggleClass("active"); return false;

});
   $( "#Category" ).click(function() {
  $( "#categorycontent").slideToggle( "slow" );
  $(this).toggleClass("active"); return false;

});

}
