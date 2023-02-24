let counter = 60;
let intervalId = null;

function finish() {
  clearInterval(intervalId);
  document.getElementById("bip").innerHTML = "TERMINE!";	
}
function bip() {
    counter--;
    if(counter == 0) finish();
    else {	
        document.getElementById("bip").innerHTML = counter + " secondes restantes";
    }	
}
function start(){
  intervalId = setInterval(bip, 1000);
}

function brake() {
  clearInterval(intervalId);
}

// function reset() {
//   counter--;
//     if(counter == counter) reset();

// };