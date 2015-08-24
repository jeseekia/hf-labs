// Each < li > should fade to 0.25 opacity when the user hovers over it.
$("li").hover(
  function() {
    $(this).fadeTo("slow",0.25);
  }, function() {
    $(this).fadeTo("slow",1);
  }

);

// Changes triggered by a click should change back when the < li > is clicked again.

  // Each < li > should change background colors when clicked on.
  $("li").click(
    function() {$(this).toggleClass("regular clicked");
  });


  // When the user clicks on a < li >, the word 'Clicked!' should appear inside it.
  $("li").on("click", function(){
    if ($(this).children().length>0) {
      $(this).find( $("span:last").remove() );
    } else {
      $(this).append( $("<span> Clicked!</span>") );
    }
  });
