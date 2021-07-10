const button = document.querySelector('#newNoteButton');
const modal = document.querySelector('#modal');
const text = document.querySelector('#textNewNote');
const noteStorage = window.localStorage;
let noteNum = 0;

function loadNotes() {
  for (var i = 1; i <= noteStorage.length; i++) {
    let textNote = noteStorage[i];
    const container = document.createElement('div');
    container.setAttribute('id', i);
    container.setAttribute('class', 'noteDiv');
    const note = document.createElement('p');
    note.setAttribute('class', 'textNote');
    note.innerHTML = textNote;
    deleteButton = document.createElement('button');
    deleteButton.innerHTML = '&times';
    deleteButton.setAttribute('class', 'delButton');
    deleteButton.setAttribute('onclick', `delNote(${i})`);
    document.body.append(container);
    container.append(note);
    container.append(deleteButton);
    noteNum = i;
  }
  noteNum++;
}


button.onclick = () => {
  modal.setAttribute('class', 'modalDiv');
}

function saveNote() {
  if (text.value === '') {
    return;
  }
  const container = document.createElement('div');
  container.setAttribute('id', noteNum);
  container.setAttribute('class', 'noteDiv');
  const note = document.createElement('p');
  note.setAttribute('class', 'textNote');
  note.innerHTML = text.value;
  deleteButton = document.createElement('button');
  deleteButton.innerHTML = '&times';
  deleteButton.setAttribute('class', 'delButton');
  deleteButton.setAttribute('onclick', `delNote(${noteNum})`);
  noteStorage.setItem(noteNum, text.value);

  document.body.append(container);
  container.append(note);
  container.append(deleteButton);
  noteNum += 1;
  modal.setAttribute('class', 'displayOff');
  text.value = '';
}

function cancel() {
  modal.setAttribute('class', 'displayOff');
  text.value = '';
}

function delNote(idNote) {
  const delDiv = document.getElementById(idNote);
  noteStorage.removeItem(idNote);
  delDiv.remove();
}
