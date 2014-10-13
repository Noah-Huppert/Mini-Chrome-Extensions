setInterval(changePicture, 2000);

function changePicture(){
  $('img').each(function(){
    if($(this).attr('title') === 'Guilherme'){
      $(this).attr('src', 'http://i.imgur.com/r6PyiD4.png');
    }
  });

  $('.username').html("The Mexician");
}
