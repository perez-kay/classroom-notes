import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NoteFeed from './components/NoteFeed';
import NavBar from './components/NavBar';
import NoteDetails from './components/NoteDetails';
import NewPost from './components/NewPost';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Container fluid>
        <Row>
          <Col xs={3} xl={2} className="p-0">
            <NavBar />
          </Col>
          <Col>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/profile" element={<h1>Profile</h1>} />
              <Route path="/my-notes" element={<NoteFeed />} />
              <Route path="/notes/:id" element={<NoteDetails />} />
              <Route path="/new-post" element={<NewPost />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
