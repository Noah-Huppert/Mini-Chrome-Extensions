setInterval(changePicture, 2000);

function changePicture(){
  $('img').each(function(){
    $(this).attr('src', 'http://i.imgur.com/r6PyiD4.png');
  });

  $('.username').html("Not Ahmad");
  $('.content').html("You're either not Ahmad or you aren't")
}
