$(document).ready(function(){
  var audio=document.createElement('audio');
  audio.setAttribute('src','carstartgarage.wav');

  console.log(audio);



  $('#drive_button').click(function(){
    setTimeout(function(){
      audio.play();

      setTimeout(function(){
        window.location.replace("home.html");
      },3000);
    },1000);
  });
});
