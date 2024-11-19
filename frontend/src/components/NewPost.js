import axios from 'axios';
import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Spinner from './Spinner';

function NewPost() {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [courseCode, setCourseCode] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  useEffect(function () {
    async function fetchCourses() {
      setIsLoading(true);
      try {
        const res = await axios.get('/api/courses');
        setCourses(res.data);
        if (res.data.length > 0) setCourseCode(res.data[0].code);
      } catch (err) {
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCourses();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await axios.post('/api/notes/', {
        course: courseCode,
        title,
        description,
      });
      /* TODO: Continue setting up alert for after a post */
      if (res.status === 201) {
        setAlertType('success');
        setAlertMessage('Note successfully uploaded!');
      }
      setTitle('');
      setDescription('');
    } catch (err) {
      console.log(err.message);
      setAlertType('danger');
      setAlertMessage('An error occurred when trying to upload your note.');
    } finally {
      setShowAlert(true);
    }
  }

  if (isLoading) return <Spinner />;

  /* TODO: This flashes on screen for a sec before the spinner. It's going to be the same for the notes page too. Figure out how to fix it! */
  if (courses.length < 1)
    return <h1>You need to add a course before you can add any notes.</h1>;

  return (
    <>
      {showAlert && (
        <Alert
          className="mt-3 position-fixed end-0 me-2"
          variant={alertType}
          onClose={() => setShowAlert(false)}
          dismissible
        >
          <p>{alertMessage}</p>
        </Alert>
      )}
      <div className="d-flex justify-content-center align-items-center mt-5">
        <div className=" bg-light rounded px-5 pb-5 w-75">
          <h1 className="py-3">Upload a New Note</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Course</Form.Label>
              <Form.Select
                className="mb-3"
                value={courseCode}
                onChange={(e) => setCourseCode(e.target.value)}
              >
                {courses.map((course) => (
                  <option key={course.code} value={course.code}>
                    {course.code}: {course.title}
                  </option>
                ))}
              </Form.Select>
              <Form.Label>Note Title</Form.Label>
              <Form.Control
                className="mb-3"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Note Title"
                required
              />
              <Form.Label>Notes</Form.Label>
              <Form.Control
                className="mb-3"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                as="textarea"
                rows={5}
                required
                placeholder="Type or Paste your notes here"
              />
            </Form.Group>
            <Button className="w-100 mt-3" size="lg" type="submit">
              Post
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}

export default NewPost;
