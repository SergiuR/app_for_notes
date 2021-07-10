const button = document.querySelector('#newNoteButton');
const modal = document.querySelector('#modal');
const text = document.querySelector('#textNewNote');
let noteNum = 0;


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
  deleteButton.setAttribute('onclick', `delNote(${text.value})`);
  noteNum += 1;
  document.body.append(container);
  container.append(note);
  container.append(deleteButton);
  modal.setAttribute('class', 'displayOff');
  text.value = '';
}

function cancel() {
  modal.setAttribute('class', 'displayOff');
  text.value = '';
}

function delNote(idNote) {
  const delDiv = document.getElementById(idNote);
  delDiv.remove();
}
