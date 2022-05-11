var buttons=document.querySelectorAll('.drum');
for(i=0; i< buttons.length; i++){
  buttons[i].addEventListener("click", clickHandle);
}

document.addEventListener("keydown", clickHandle)

function clickHandle ( e){
  var buttonInnerHTML = this.innerHTML;
  var buttonPressInnerHTML = e.key;
  switch(buttonInnerHTML || buttonPressInnerHTML){
    case"w":
      alert("w works");
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case"a":
      alert("a works");
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
      break;

    case"s":
      alert("s works");
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
      break;

    case"d":
      alert("d works");
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
      break;

    case"j":
      alert("j works");
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
      break;

    case"k":
      alert("k works");
        var kickBass = new Audio("sounds/kick-bass.mp3");
        kickBass.play();
      break;

    case"l":
      alert("l works");
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
      break;

    default:
      console.log(buttonInnerHTML);
}}
