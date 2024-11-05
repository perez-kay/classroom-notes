import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(function () {
    async function refreshNotes() {
      const res = await axios.get('/api/notes');
      setNotes(res.data);
    }
    refreshNotes();
  }, []);

  return (
    <div>
      {notes.map((note) => (
        <Note
          author={note.author}
          course={note.course}
          instructor={note.instructor}
          lectureNum={note.lectureNum}
          notes={note.notes}
        />
      ))}
    </div>
  );
}

function Note({ author, course, instructor, lectureNum, notes }) {
  return (
    <div>
      <h1>Course: {course}</h1>
      <h3>Instructor: {instructor}</h3>
      <h4>Lecture {lectureNum}/11</h4>
      <h5>Notes Author: {author}</h5>
      <p>{notes}</p>
    </div>
  );
}

export default App;
