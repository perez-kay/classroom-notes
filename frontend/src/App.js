import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NoteFeed from './components/NoteFeed';
import NavBar from './components/NavBar';
import NoteDetails from './components/NoteDetails';
import NewPost from './components/NewPost';

function App() {
  return (
    <BrowserRouter>
      <Container fluid>
        <Row>
          <Col xs={3} xl={2} className="p-0">
            <NavBar />
          </Col>
          <Col>
            <Row>
              <Routes>
                <Route path="/" element={<NoteFeed />} />
                <Route path="/profile" element={<h1>Profile</h1>} />
                <Route path="/my-notes" element={<h1>My Notes</h1>} />
                <Route path="/notes/:id" element={<NoteDetails />} />
                <Route path="/new-post" element={<NewPost />} />
              </Routes>
            </Row>
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
