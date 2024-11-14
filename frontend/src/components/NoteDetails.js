import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';

function NoteDetails() {
  const { id } = useParams();
  const [note, setNote] = useState({});

  useEffect(
    function () {
      async function fetchNote() {
        try {
          const res = await axios.get(`/api/notes/${id}`);
          setNote(res.data);
        } catch (err) {
          console.error(err.message);
        }
      }
      fetchNote();
    },
    [id]
  );

  return (
    <Card className="col m-5">
      <Card.Body>
        <Card.Title>{note.course}</Card.Title>
        <Card.Subtitle className="text-muted">{note.title}</Card.Subtitle>
        <p className="fs-6 text-muted mb-0">{note.author}</p>
        <Card.Text>{note.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default NoteDetails;
