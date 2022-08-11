var numberOfButtons = document.querySelectorAll(".drum").length;




for (var i = 0; i < numberOfButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}




document.addEventListener("keydown", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});




function makeSound(key) {

  switch (key) {

    case "w":
      console.log(key);
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      console.log(key);
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      console.log(key);
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      console.log(key);
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      console.log(key);
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "k":
      console.log(key);
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "l":
      console.log(key);
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    default:
      console.log("You pressed " + key + ".");
      console.log("Please press only the w, a, s, d, j, k and l keys.");

  }

}




function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function() {
    document.querySelector("." + currentKey);
    activeButton.classList.remove("pressed");
  }, 100);

}
