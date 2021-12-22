// Detecting button click

var numberOfDrums = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    makeSound(this.innerHTML);
    buttonAnimation(this.innerHTML)
  });
}

// Detecting keybord press

document.addEventListener("keydown", function(event){
  makeSound(event.key);
  buttonAnimation(event.key)
});

// Function for making Sound

function makeSound(drum){
  switch (drum) {
    case "w":
      var audio1 = new Audio("sounds/tom-1.mp3");
      audio1.play();
      break;

    case "a":
      var audio2 = new Audio("sounds/tom-2.mp3");
      audio2.play();
      break;

    case "s":
      var audio3 = new Audio("sounds/tom-3.mp3");
      audio3.play();
      break;

    case "d":
      var audio4 = new Audio("sounds/tom-4.mp3");
      audio4.play();
      break;

    case "j":
      var audio5 = new Audio("sounds/crash.mp3");
      audio5.play();
      break;

    case "k":
      var audio6 = new Audio("sounds/snare.mp3");
      audio6.play();
      break;

    case "l":
      var audio7 = new Audio("sounds/kick-bass.mp3");
      audio7.play();
      break;
    default:
  }
}

// Making Animations on buttons

function buttonAnimation(event){
  var activeButton = document.querySelector("." + event);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
}
