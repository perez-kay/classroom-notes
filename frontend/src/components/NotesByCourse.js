import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Note from './Note';

function NotesByCourse() {
  const [notes, setNotes] = useState([]);
  const { courseCode } = useParams();

  useEffect(
    function () {
      async function refreshNotes() {
        const res = await axios.get(`/api/notes/course/${courseCode}`);
        setNotes(res.data);
      }
      refreshNotes();
    },
    [courseCode]
  );

  if (notes.length < 1) {
    return <h1>You haven't written any notes for this course yet!</h1>;
  }

  return (
    <Row>
      <h1>Notes for {courseCode}</h1>
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

export default NotesByCourse;
