function addNote (){
    var noteInput = document.getElementById('entree-notes');
    var noteText = noteInput.value;
  
    if (noteText.trim() !== '') {
      var noteList = document.getElementById('liste-notes');
      var noteElement = document.createElement('li');
      noteElement.className = 'note';
      noteElement.textContent = noteText;
      noteList.appendChild(noteElement);
      noteInput.value = '';
    }
}

