const notesList = document.getElementById("notes_list");
const searchInput = document.getElementById("search");
const titleInput = document.getElementById("note_title");
const contentInput = document.getElementById('note_content');
const tagsInput = document.getElementById('note_tags');
const addNoteBtn = document.getElementById('add_note_btn');
const noNotesMsg = document.getElementById('no_notes');

//Edit Modal Elements
const editModal = document.getElementById('edit_modal');
const editTitleInput = document.getElementById('edit_title');
const editContentInput = document.getElementById('edit_content');
const editTagsInput = document.getElementById('edit_tags');
const saveEditBtn = document.getElementById('save_edit_btn');
const cancelEditBtn = document.getElementById('cancel_edit_btn');

// View Modal Elements
const viewModal = document.getElementById('view_modal');

const viewTitle = document.getElementById("view_title");
const viewContent = document.getElementById('view_content');
const viewTags = document.getElementById('view_tags');
const closeViewBtn = document.getElementById('close_view_btn');

// Retrieve Notes from localStorage

let notes = JSON.parse(localStorage.getItem('notes')) || [];

let currentEditIndex = null;

displayNotes(notes);

addNoteBtn.addEventListener('click', () => {
    const title = titleInput.value.trim();
    const content = contentInput.value.trim();
    const tags = tagsInput.value.trim().split(', ').map(tag => tag.trim()).filter(Boolean);

    if(!title && !content){
        alert('Please enter at least a title or content for the note.');
        return;
    }

    const note = {title: title, content: content, tags: tags};

    notes.push(note);

    localStorage.setItem('notes', JSON.stringify(notes));

    titleInput.value = '';
    contentInput.value = '';
    tagsInput.value = '';

    displayNotes(notes);
    
});

searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase().trim();

    const filtered = notes.filter(note => {
        const inTitle = note.title.toLowerCase().includes(query);
        const inContent = note.content.toLowerCase().includes(query);
        const inTags = note.tags.some(tag => tag.toLowerCase().includes(query));

        return inTitle || inContent || inTags;
    });
    displayNotes(filtered);
});

function displayNotes(notesToDisplay){
    notesList.innerHTML = '';

    if(notesToDisplay.length === 0){
        noNotesMsg.style.display = 'block';
        return;
    }
    else{
        noNotesMsg.style.display = 'none';
    }

    notesToDisplay.forEach((note, index) => {
        const li = document.createElement('li');
        
        const titleEl = document.createElement('h3');
        titleEl.textContent = note.title || '(No Title)';

        const contentEl = document.createElement('p');

        const preview = note.content.length > 100 ? note.content.substring(0, 100) + '...' : note.content;

        contentEl.textContent = preview || '(No Content)';

        const tagsEl = document.createElement('p');
        tagsEl.textContent = note.tags.length ? 'Tags: ' + note.tags.join(', ') : 'No Tags';

        const actionsDiv = document.createElement('div');
        actionsDiv.className = 'note_actions';

        // View button
        const viewBtn = document.createElement('button');
        viewBtn.textContent = 'View';
        viewBtn.className = 'view-btn';
        viewBtn.addEventListener('click', () => openViewModal(index));

        //Edit button
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.className = 'edit-btn';
        editBtn.addEventListener('click', () => openEditModal(index));

        // Delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.addEventListener('click', () => deleteNote(index));

        actionsDiv.appendChild(viewBtn);
        actionsDiv.appendChild(editBtn);
        actionsDiv.appendChild(deleteBtn);

        li.appendChild(titleEl);
        li.appendChild(contentEl);
        li.appendChild(tagsEl);
        li.appendChild(actionsDiv);

        notesList.appendChild(li);
    });

}

function deleteNote(index) {
  if (confirm('Are you sure you want to delete this note?')) {
    notes.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notes));
    displayNotes(notes);
  }
}

function openEditModal(index) {
  currentEditIndex = index;
  const note = notes[index];
  editTitleInput.value = note.title;
  editContentInput.value = note.content;
  editTagsInput.value = note.tags.join(', ');
  editModal.style.display = 'flex';
}

saveEditBtn.addEventListener('click', () => {
  const title = editTitleInput.value.trim();
  const content = editContentInput.value.trim();
  const tags = editTagsInput.value.trim().split(',').map(tag => tag.trim()).filter(Boolean);

  if (!title && !content) {
    alert('Please enter at least a title or content for the note.');
    return;
  }

  notes[currentEditIndex] = { title, content, tags };
  localStorage.setItem('notes', JSON.stringify(notes));
  editModal.style.display = 'none';
  currentEditIndex = null;
  displayNotes(notes);
});

cancelEditBtn.addEventListener('click', () => {
  editModal.style.display = 'none';
  currentEditIndex = null;
});

window.addEventListener('click', (e) => {
  if (e.target === editModal) {
    editModal.style.display = 'none';
    currentEditIndex = null;
  }
});

function openViewModal(index) {
  const note = notes[index];
  viewTitle.textContent = note.title || '(No Title)';
  viewContent.textContent = note.content || '(No Content)';
  viewTags.textContent = note.tags.length ? 'Tags: ' + note.tags.join(', ') : 'No Tags';
  viewModal.style.display = 'flex';
}

closeViewBtn.addEventListener('click', () => {
  viewModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === viewModal) {
    viewModal.style.display = 'none';
  }
});