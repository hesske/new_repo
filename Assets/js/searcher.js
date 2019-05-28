$('#submit').click(function(e) {
    e.preventDefault()
        console.log("click noticed");

    var getURL = "http://api.giphy.com/v1/gifs/search?q=" + $('#search_box').val() + "&api_key=oK6mYMcUBTYnCSJmEzKTeSOLBdb2Grgj&rating=pg";
  $.ajax({
    url: getURL,
    success: function(data) {
        //console.log("This works too")
        //debugger

        console.log(data);
        console.log(getURL)

    }


}).done(function(response){
  //$('#gif-show').append(response);
  var results = response.data;
  var output = '';
 for(var index in results) {
var gifObject = results[index];
var gifURL = gifObject.images.original.url;
   console.log(gifURL)
   output += "<img class='col-md-4' height='200' src='" + gifURL + "'/>"
 }
 $('#gif_show').html(output);
 })

.fail(function() {
  console.log(error)
})
})
//if enter key pressed instead of clicking submit button
$('input[type="text"]').keypress(function(event){
  if (event.which === 13){
    $('#submit').click()
  }
})
