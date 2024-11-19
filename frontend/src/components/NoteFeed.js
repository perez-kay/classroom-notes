import { useEffect, useState } from 'react';
import Note from './Note';
import Row from 'react-bootstrap/Row';
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

  if (notes.length < 1) {
    return <h1>You haven't written any notes yet!</h1>;
  }

  return (
    <Row>
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          course={note.course}
          title={note.title}
          description={note.description}
        />
      ))}
    </Row>
  );
}

export default NoteFeed;
