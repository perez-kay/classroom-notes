import styles from './Note.module.css';
import Card from 'react-bootstrap/Card';

function Note({ author, course, title, description }) {
  return (
    <div className="col-md-4 col-sm-6">
      <Card className={`${styles.noteCard} m-2`}>
        <Card.Body>
          <Card.Title>{course}</Card.Title>
          <Card.Subtitle>{title}</Card.Subtitle>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Note;
