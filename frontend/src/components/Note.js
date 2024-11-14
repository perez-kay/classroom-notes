import styles from './Note.module.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';

function Note({ id, author, course, title, description }) {
  const shortText = description.split(' ').slice(0, 15).join(' ') + '...';

  return (
    <div className="col-md-4 col-sm-6 d-flex align-items-stretch">
      <Card className={`${styles.noteCard} m-2`}>
        <Card.Body>
          <Card.Title>{course}</Card.Title>
          <Card.Subtitle className="text-muted">{title}</Card.Subtitle>
          <p className="fs-6 text-muted mb-0">{author}</p>
          <Card.Text>{shortText}</Card.Text>
          <Link to={`/notes/${id}`}>
            <Button variant="primary">See More</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Note;
