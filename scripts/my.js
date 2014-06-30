/*Tommy Dugger 6/30/2014*/

$(document).ready(function(){

  /*Set Clock ontop of Navbar*/
  var d = new Date();
  var n = d.toDateString();
  $("#clock").text(n);

  /* Start animating clouds around page*/
  animateCloud("#cloud1");
  animateCloud("#cloud2");

  /* Star animating the sun up and down*/
  animateSunDown(70000);
});

/* Gets a random set of heigh/width coords for use in the animateCloud function*/
function getNewPostiion(){
  var h = $(window).height() - 50;
  var w = $(window).width() - 50;
  
  var nh = Math.floor(Math.random() * h);
  var nw = Math.floor(Math.random() * w);
  
  return [nh,nw];  
}

/* Sets the sun.png image down beind the content div.*/
function animateSunDown(delay){
  $("#sun").stop(true).animate({ top: 500 }, delay, function(){
    animateSunUp(70000);
  });
}

/* Raises the sun.png image up to it's original position above the nav bar.*/
function animateSunUp(delay){
  $("#sun").stop(true).animate({ top: 20 }, delay, function(){
    animateSunDown(70000);
  });
}

/* Animates the clouds randomly around the background*/
function animateCloud(name){
  var newPostion = getNewPostiion();

  $(name).stop(true).animate({ top: newPostion[0], left: newPostion[1]}, 30000, function(){
    animateCloud(name);
  });
}
