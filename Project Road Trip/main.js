
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}


function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function onLoad() {

  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1;
  var yyyy = today.getFullYear();

  if(dd<10) {
  dd = '0'+dd
  } 

  if(mm<10) {
  mm = '0'+mm
  } 

  today = dd + '/' + mm + '/' + yyyy;
  document.getElementById("date").innerHTML = today;


}

$(document).ready(function() {
  //Preloader
  $(window).on("load", function() {
  preloaderFadeOutTime = 4000;
  function hidePreloader() {
  var preloader = $('#preLoader');
  preloader.fadeOut(preloaderFadeOutTime);
  }
  hidePreloader();
  });
})
