import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Note from './components/Note';
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
    <Container>
      <Row>
        {notes.map((note) => (
          <Note
            author={note.author}
            course={note.course}
            title={note.title}
            description={note.description}
          />
        ))}
      </Row>
    </Container>
  );
}

// function Note({ author, course, instructor, lectureNum, notes }) {
//   return (
//     <div>
//       <h1>Course: {course}</h1>
//       <h3>Instructor: {instructor}</h3>
//       <h4>Lecture {lectureNum}/11</h4>
//       <h5>Notes Author: {author}</h5>
//       <p>{notes}</p>
//     </div>
//   );
// }

export default App;
