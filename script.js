
var sliderBlok = document.querySelector(".slider");
var rightButton = sliderBlok.querySelector(".right");
var leftButton = sliderBlok.querySelector(".left");
rightButton.addEventListener("click", function(){
  var slids = sliderBlok.querySelectorAll(".slide");
  slids[1].classList.add("active");
  slids[0].classList.remove("active");
});
leftButton.addEventListener("click", function(){
  var slids = sliderBlok.querySelectorAll(".slide");
  slids[0].classList.add("active");
  slids[1].classList.remove("active");
});
