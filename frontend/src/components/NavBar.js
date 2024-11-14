import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import { NavLink } from 'react-router-dom';

import styles from './NavBar.module.css';
import { useAccordionButton } from 'react-bootstrap/esm/AccordionButton';
import { useState } from 'react';

function NavBar() {
  return (
    <nav className="position-sticky">
      <Nav
        className={`${styles.sidebar}  m-0 px-1 flex-column vh-100`}
        defaultActiveKey={'/'}
      >
        <h1 className="text-center px-4 pt-4">Sharing Notes</h1>
        <hr />

        <SearchBar />

        <Nav.Item>
          <NavLink to="/" className="ps-3 py-2 d-block">
            <i className="bi bi-house fs-5 pe-2"></i>Home
          </NavLink>
        </Nav.Item>

        <Nav.Item>
          <NavLink to="/profile" className="ps-3 py-2 d-block">
            <i className="bi bi-person-circle fs-5 pe-2"></i> Profile
          </NavLink>
        </Nav.Item>

        <Nav.Item>
          <NavLink to="/my-notes" className="ps-3 py-2 d-block">
            <i className="bi bi-journal fs-5 pe-2"></i> My Notes
          </NavLink>
        </Nav.Item>

        <Accordion flush>
          <CoursesToggle eventKey="courses" />
          <Accordion.Collapse eventKey="courses">
            <div className="ps-4">
              <Nav.Item>
                <NavLink to="/courses/course1">Course 1</NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/courses/course2">Course 2</NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/courses/course3">Course 3</NavLink>
              </Nav.Item>
            </div>
          </Accordion.Collapse>
        </Accordion>

        <Nav.Item>
          <NavLink to="new-post" className="ps-3 py-2 d-block">
            <i className="bi bi-pencil-square fs-5 pe-2"></i> Share a New Note
          </NavLink>
        </Nav.Item>
      </Nav>
    </nav>
  );
}

export default NavBar;

function CoursesToggle({ eventKey }) {
  const [isClicked, setIsClicked] = useState(false);
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    setIsClicked(!isClicked)
  );

  return (
    <Nav.Link onClick={decoratedOnClick}>
      <div className="d-flex justify-content-between">
        <span>
          <i className="bi bi-backpack3 fs-5 pe-2"></i> My Courses
        </span>
        <i className={` bi bi-chevron-${isClicked ? 'up' : 'down'}`}></i>
      </div>
    </Nav.Link>
  );
}

function SearchBar() {
  return (
    <Form>
      <InputGroup className="px-2 mb-3">
        <Form.Control placeholder="Search for Courses" />
        <Button variant="outline-secondary">
          <i className="bi bi-search"></i>
        </Button>
      </InputGroup>
    </Form>
  );
}
