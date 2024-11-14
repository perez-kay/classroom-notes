import { useEffect, useState } from 'react';
import Note from './Note';
import axios from 'axios';

function NoteFeed() {
  const [notes, setNotes] = useState([]);

  useEffect(function () {
    async function refreshNotes() {
      const res = await axios.get('/api/notes');
      setNotes(res.data);
    }
    refreshNotes();
  }, []);

  return (
    <>
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          author={note.author}
          course={note.course}
          title={note.title}
          description={note.description}
        />
      ))}
    </>
  );
}

export default NoteFeed;
