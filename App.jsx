import React, { useState } from 'react'
import './App.css'

const App = () => {
 
  const [noteHeading, setNoteHeading] = useState('');
  const [noteDetails, setNotesDetails] = useState('');

  const [notesList, setNotesList] = useState([]);

  const recentNotesHeading = (e) => {
    setNoteHeading(e.target.value);
  }

  const recentNotesDetails = (e) => {
    setNotesDetails(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    
    if (!noteHeading.trim() && !noteDetails.trim()) return;

    
    const newNote = {
      id: Date.now(), 
      heading: noteHeading,
      details: noteDetails
    };

    setNotesList([...notesList, newNote]);
    setNoteHeading('');
    setNotesDetails('');
  }

  return (
    <div id='main'>
      <form onSubmit={submitHandler} id='add-notes'>
        <h1>Add Notes</h1>
        <input 
          id='heading' 
          onChange={recentNotesHeading} 
          placeholder='Enter notes heading' 
          value={noteHeading} 
        />
        <textarea 
          id="details" 
          onChange={recentNotesDetails} 
          placeholder="Write details here" 
          value={noteDetails} 
        />
        <button type="submit">Add note</button>
      </form>

      <div className="vertical-line"></div>

      <div id='recent'>
        <h1>Recent Notes</h1>
        <div id='img-div'>
          {notesList.map((note) => (
            <div className='first-image' key={note.id}>
              <img 
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtj0b7BdjLx2TC6vb6RsQUBba8gdXLbqJJGV3PNsDvTQ&s=10' 
                alt="note background" 
              />
              <div className='overlay'>
                <h3>{note.heading}</h3>
                <p>{note.details}</p>
              </div>
            </div>
          ))}
          </div>
      </div>
    </div>
  )
}

export default App
