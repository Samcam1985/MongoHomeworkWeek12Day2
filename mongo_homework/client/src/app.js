var CharacterView = require('./views/characterView');

var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener("load", callback)
  request.send();
}

var requestComplete = function() {
  if(this.status !== 200) return;

  var characterString = this.responseText;
  var characters = JSON.parse(characterString);
  var characterView = new CharacterView(characters);
}

var app = function(){
  var url = "http://localhost:3000/characters";
  makeRequest(url, requestComplete);
  
}


window.addEventListener('load', app);