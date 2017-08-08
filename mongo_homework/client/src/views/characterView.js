var CharacterView = function(characters){
  this.render(characters);
}

CharacterView.prototype = {
  render: function(characters){
    
    console.log(characters);
    characters.forEach( function(character){
      var li = document.createElement('li');
      var text = document.createElement('p');
      var ul = document.getElementById('characters');
      text.innerText = character.name + ": " + '"' + character.description + '"';
      li.appendChild(text);
      ul.appendChild(li);
    })
  }
}

 module.exports = CharacterView;