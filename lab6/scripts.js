var xhr = new XMLHttpRequest();

xhr.onload = function() {
  if (xhr.status === 200) {
    // Stuff that uses the server's response
    console.log("Status of 200.")

    $.getJSON("http://www.reddit.com/r/aww.json", function(reddit){
      console.log(reddit.data.children[0].data.author);
    });


    var author = data.children[0].data.author;


  }
}

xhr.open('GET', 'http://www.reddit.com/r/aww.json', true);
xhr.send(null);


// data.children[0].data.author to display author
// data.children[0].data.score to display rating
// data.children[0].data.title to display title
// data.children[0].data.preview.images.source.url to display image
// data.children[0].data.permalink to display reddit post link


/*
var jqxhr = $.getJSON( "http://www.reddit.com/r/aww.json", function() {
    console.log(jqxhr.data.children[0].data.author);
  console.log( "success" );

  })
  .done(function() {
    console.log( "second success" );
  })
  .fail(function() {
    console.log( "error" );
  })
  .always(function() {
    console.log( "complete" );
  });
*/
