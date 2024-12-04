import styles from './Note.module.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Note({ id, author, course, title, description }) {
  const shortText =
    description.split(' ').length < 15
      ? description
      : description.split(' ').slice(0, 15).join(' ') + '...';

  function handleDelete() {
    axios.delete(`/api/notes/${id}/`);
    console.log('deleted note');
  }

  return (
    <div className="col-md-4 col-sm-6 d-flex align-items-stretch">
      <Card className="w-100 m-2">
        <Card.Body className="d-flex flex-column justify-content-between">
          <div>
            <Card.Title>{course}</Card.Title>
            <Card.Subtitle className="text-muted pb-2">{title}</Card.Subtitle>

            <Card.Text>{shortText}</Card.Text>
          </div>
          <div className="pt-2 d-flex justify-content-between">
            <Link to={`/notes/${id}`}>
              <Button variant="primary">See More</Button>
            </Link>
            <Button variant="danger" onClick={handleDelete}>
              Delete
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Note;
