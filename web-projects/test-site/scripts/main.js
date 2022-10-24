var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox21.png') {
      myImage.setAttribute ('src','images/firefox21.png');
    } else {
      myImage.setAttribute ('src','images/firefox21.png');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Ознакомьтесь с лучшей моделью осенней коллекции 2022, ' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Ознакомьтесь с лучшей моделью осенней коллекции 2022, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }