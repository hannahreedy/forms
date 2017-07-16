console.log('hi');

var firstSentence = 'Lay on a beach';
var secondSentence = 'Go on an adventure';
var thirdSentence = 'Go abroad';
var fourthSentence = 'Stay stateside';
var fifthSentence = 'Take a plane';
var sixthSentence = 'Take a train';
var seventhSentence = 'Eat a lot of food';
var eighthSentence = 'Drink a lot of booze';
var ninthSentence = 'Go hiking';
var tenthSentence = 'Go skiing';
var eleventhSentence = 'Do some shopping';
var twelthSentence = 'Go to a museum';
var thirteenthSentence = 'All inclusive';
var fourteenthSentence = 'DIY vacation';
var fiftheenthSentence = 'Rent a car';
var sixteenthSentence = 'Take public transportation';


window.onload = function(event) {

  var nameInput = document.getElementById('first_name');
  var nameBtn = document.getElementById('name_btn');
  var firstChoice = document.getElementById('choice-one');
  var secondChoice = document.getElementById('choice-two');
  var thirdChoice = document.getElementById('choice-three');
  var fourthChoice = document.getElementById('choice-four');
  var fifthChoice = document.getElementById('choice-five');
  var sixthChoice = document.getElementById('choice-six');
  var seventhChoice = document.getElementById('choice-seven');
  var eighthChoice = document.getElementById('choice-eight');
  var ninthChoice = document.getElementById('choice-nine');
  var tenthChoice = document.getElementById('choice-ten');
  var eleventhChoice = document.getElementById('choice-eleven');
  var twelthChoice = document.getElementById('choice-twelve');
  var thirteenthChoice = document.getElementById('choice-thirteen');
  var fourtheenthChoice = document.getElementById('choice-fourteen');
  var fifteenthChoice = document.getElementById('choice-fifteen');
  var sixteenthChoice = document.getElementById('choice-sixteen');

  firstChoice.onclick = function(event) {
    createRow(firstSentence);
    document.getElementById('first-step').style.display = 'none';
  }

  secondChoice.onclick = function(event) {
    createRow(secondSentence);
    document.getElementById('first-step').style.display = 'none';
  }

  thirdChoice.onclick = function(event) {
    createRow(thirdSentence);
    document.getElementById('second-step').style.display = 'none';
  }

  fourthChoice.onclick = function(event) {
    createRow(fourthSentence);
    document.getElementById('second-step').style.display = 'none';
  }

  fifthChoice.onclick = function(event) {
    createRow(fifthSentence);
    document.getElementById('third-step').style.display = 'none';
  }

  sixthChoice.onclick = function(event) {
    createRow(sixthSentence);
    document.getElementById('third-step').style.display = 'none';
  }

  seventhChoice.onclick = function(event) {
    createRow(seventhSentence);
    document.getElementById('fourth-step').style.display = 'none';
  }

  eighthChoice.onclick = function(event) {
    createRow(eighthSentence);
    document.getElementById('fourth-step').style.display = 'none';
  }

  ninthChoice.onclick = function(event) {
    createRow(ninthSentence);
    document.getElementById('fifth-step').style.display = 'none';
  }

  tenthChoice.onclick = function(event) {
    createRow(tenthSentence);
    document.getElementById('fifth-step').style.display = 'none';
  }

  eleventhChoice.onclick = function(event) {
    createRow(eleventhSentence);
    document.getElementById('sixth-step').style.display = 'none';
  }

  twelthChoice.onclick = function(event) {
    createRow(twelthSentence);
    document.getElementById('sixth-step').style.display = 'none';
  }

  thirteenthChoice.onclick = function(event) {
    createRow(thirteenthSentence);
    document.getElementById('seventh-step').style.display = 'none';
  }

  fourteenthChoice.onclick = function(event) {
    createRow(fourteenthSentence);
    document.getElementById('seventh-step').style.display = 'none';
  }

  fifteenthChoice.onclick = function(event) {
    createRow(fifteenthSentence);
    document.getElementById('eighth-step').style.display = 'none';
  }

  sixteenthChoice.onclick = function(event) {
    createRow(sixteenthSentence);
    document.getElementById('eighth-step').style.display = 'none';
  }

  nameBtn.onclick = function(event) {
    // console.log(event);
    console.log(nameInput.value);
    createRow('Welcome aboard, ' + nameInput.value);
  }

    console.log(nameInput, nameBtn);

}

//this function creates and adds rows to our app
function createRow(words) {

  console.log(words);
  //we need a new div
  var row = document.createElement('div');
  var col = document.createElement('div');
  var p = document.createElement('p');
  p.innerHTML = words;
  row.append(col);
  row.className = 'row';
  col.className = 'col s12';
  col.append(p);
  console.log(row);
  //append the whole thing to append
  var app = document.getElementById('app');
  app.append(row);

}
