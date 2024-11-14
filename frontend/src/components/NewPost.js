import axios from 'axios';
import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function NewPost() {
  const [courses, setCourses] = useState([]);

  const [courseCode, setCourseCode] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(function () {
    async function fetchCourses() {
      const res = await axios.get('/api/courses');
      setCourses(res.data);
      setCourseCode(res.data[0].code);
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
      console.log(res);
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Course</Form.Label>
        <Form.Select
          value={courseCode}
          onChange={(e) => setCourseCode(e.target.value)}
        >
          {courses.map((course) => (
            <option key={course.code} value={course.code}>
              {course.code}: {course.title}
            </option>
          ))}
        </Form.Select>
        <Form.Control
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Note Title"
        />
        <Form.Control
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="textarea"
          placeholder="Type or Past your notes here"
        />
      </Form.Group>
      <Button type="submit">Post</Button>
    </Form>
  );
}

export default NewPost;
