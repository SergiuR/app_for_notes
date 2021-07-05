const button = document.querySelector('#addNoteButton');
let noteNum = 0;


function addStyleToButton(button) {
  button.style.border = 'none';
  button.style.backgroundColor = '#4CAF50';
  button.style.color = 'white';
  button.style.padding = '15px 32px';
  button.style.fontSize = '16px';
  button.style.textDecoration = 'none';
  button.style.cursor = 'pointer';
  button.style.display = 'block';
}

function addStyleToDiv(container) {
  container.style.backgroundColor = '#4CAF50';
  container.style.padding = '25px';
  container.style.display = 'inline-block';
  container.style.width = '25%';
  container.style.minHeight = '150px';
  container.style.minWidth = '150px';
  container.style.margin = '10px';
  container.style.position = 'relative';
}

function addStyleToNote(note) {
  note.style.fontSize = '20px';
  note.style.color = 'white';
  note.style.display = 'inline-block';
  note.style.maxWidth = '75%';
}

function addStyleToDeleteButton(deleteButton) {
  deleteButton.style.border ='1px solid white';
  deleteButton.style.borderRadius = '3px';
  deleteButton.style.cursor = 'pointer';
  deleteButton.style.color = 'white';
  deleteButton.style.backgroundColor = '#4CAF50';
  deleteButton.style.fontSize = '16px';
  deleteButton.style.position = 'absolute';
  //deleteButton.style.top = '0';
  deleteButton.style.right = '20px';
}

addStyleToButton(button);


button.onclick = () => {
  newNote = prompt('Новая заметка');
  console.log(newNote);
  if (newNote === '' || newNote === null) {
    return;
  }
  const container = document.createElement('div');
  container.setAttribute('id', noteNum);
  noteNum += 1;
  const note = document.createElement('p');
  note.innerHTML = newNote;
  deleteButton = document.createElement('button');
  deleteButton.innerHTML = 'x';
  addStyleToDiv(container);
  addStyleToNote(note);
  addStyleToDeleteButton(deleteButton);
  document.body.append(container);
  container.append(note);
  container.append(deleteButton);

}
