document.getElementById('noteForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const noteText = document.getElementById('noteText').value;
    if (noteText.trim() !== "") {
        addNote(noteText);
        document.getElementById('noteText').value = "";
    }
});

function addNote(text) {
    const note = document.createElement('div');
    note.className = 'note';
    note.textContent = text;
    document.getElementById('notesContainer').appendChild(note);
}

