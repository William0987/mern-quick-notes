import { useState } from 'react';

export default function AddForm({ addNote }) {
    const [notes, setNotes] = useState('');

    function handleSubmit(evt) {
        evt.preventDefault();
        addNote(notes);
        setNotes({text: ""});
    }

    function handleChange(evt) {
        setNotes({...notes, [evt.target.name]: evt.target.value})
    }

    return (
       <div> 
         <p>Add a new note: </p>
         <form onSubmit={handleSubmit}>
            <textarea
                placeholder="New Note"
                value={notes}
                onChange={handleChange}
            ></textarea>
            <button type="submit">Add Note</button>
         </form>
       </div> 
    );
}