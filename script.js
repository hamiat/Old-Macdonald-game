//***function that prints string and changes color of text, click event with querySelector****
let centerBtn = document.querySelector("#mainBtn");

function changeColor() {
  centerBtn.style.color = "#ff7f50";
  centerBtn.style.fontWeight = "bold";
  centerBtn.innerHTML = "E-I-E-I-O!";
}
centerBtn.addEventListener("click", changeColor);

/* function with if statement that prints string and changes color of text, click event with getElementsByID */
let userrAnswer = document.getElementById("answer");
let submitBtn = document
  .getElementById("submitAnswer")
  .addEventListener("click", farm);

function farm() {
  if (userrAnswer.value == "Cow") {
    document.getElementById("submitAnswer").innerHTML = "E-I-E-I-O!";
    document.getElementById("submitAnswer").style.color = "#ff7f50";
  } else if (userrAnswer.value == "cow") {
    document.getElementById("submitAnswer").innerHTML = "E-I-E-I-O!";
    document.getElementById("submitAnswer").style.color = "#ff7f50";
  } else {
    alert("No... try that again.");
  }
}

//*** function that prints string + word from array, with querySelector ****
let mooOptions = [" here", " there"];
let mooBtn = document.querySelector("#withA");
let mooBtn2 = document.querySelector("#andA");

function firstMoo() {
  document.getElementById("moo1").innerHTML = "Moo Moo" + mooOptions[0];
}
function secondMoo() {
  document.getElementById("moo2").innerHTML = "Moo Moo" + mooOptions[1];
}

mooBtn.addEventListener("click", firstMoo);
mooBtn2.addEventListener("click", secondMoo);

//****functions that prints string, change backgroundColor and plays sound, with getElementsById ****
let hereMooBtn = document
  .getElementById("hereBtn")
  .addEventListener("click", mooText);
let thereMooBtn = document
  .getElementById("thereBtn")
  .addEventListener("click", mooText2);
let everywhereMooBtn = document
  .getElementById("everywhereMoo")
  .addEventListener("click", mooSound);
let mooNoise = document.getElementById("cowMoo");

function mooText() {
  document.getElementById("hereBtn").innerHTML = "";
  document.getElementById("hereBtn").style.backgroundImage =
    "url(cow_image2.jpg)";
  document.getElementById("hereBtn").style.backgroundSize = "cover";
  document.getElementById("hereBtn").style.backgroundRepeat = "no-repeat";
}

function mooText2() {
  document.getElementById("thereBtn").innerHTML = "Moo";
  document.getElementById("thereBtn").style.backgroundImage =
    "linear-gradient(to left, orange , yellow, green, cyan, blue, violet)";
}

function mooSound() {
  document.getElementById("everywhereMoo").innerHTML = "Moo";
  mooNoise.play();
}

//****functions that with click event with querySelector*****
let lastMcdonald = document.querySelector("#lastVerse");
let lastLine = document.querySelector("lastWord");

function finalMcdonald() {
  document.getElementById("lastWord").style.visibility = "visible";
  document.getElementById("lastWord").style.color = "#ff7f50";
  document.getElementById("lastWord").style.transform = "scale(3)";
  document.getElementById("lastWord").style.marginTop = "24px";
}

lastMcdonald.addEventListener("click", finalMcdonald);
