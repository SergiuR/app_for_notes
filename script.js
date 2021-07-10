const button = document.querySelector('#newNoteButton');
let noteNum = 0;


button.onclick = () => {
  newNote = prompt('Новая заметка');
  if (newNote === '' || newNote === null) {
    return;
  }
  const container = document.createElement('div');
  container.setAttribute('id', noteNum);
  container.setAttribute('class', 'noteDiv');
  const note = document.createElement('p');
  note.setAttribute('class', 'textNote');
  note.innerHTML = newNote;
  deleteButton = document.createElement('button');
  deleteButton.innerHTML = '&times';
  deleteButton.setAttribute('class', 'delButton');
  deleteButton.setAttribute('onclick', `delNote(${noteNum})`);
  noteNum += 1;
  document.body.append(container);
  container.append(note);
  container.append(deleteButton);

}

function delNote(idNote) {
  const delDiv = document.getElementById(idNote);
  delDiv.remove();
}
