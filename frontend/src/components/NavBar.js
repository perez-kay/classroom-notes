import Nav from 'react-bootstrap/Nav';
import Accordion from 'react-bootstrap/Accordion';

import styles from './NavBar.module.css';
import { useAccordionButton } from 'react-bootstrap/esm/AccordionButton';
import { useState } from 'react';

function NavBar() {
  return (
    <Nav
      className={`${styles.sidebar}  m-0 flex-column vh-100`}
      defaultActiveKey={'/'}
    >
      <h1 className="text-center p-4">Sharing Notes</h1>

      <Nav.Link href="/">
        <i class="bi bi-house"></i> Home
      </Nav.Link>

      <Nav.Link>
        <i class="bi bi-person-circle"></i> Profile
      </Nav.Link>

      <Nav.Link>
        <i class="bi bi-journal"></i> My Notes
      </Nav.Link>

      <Accordion flush>
        <CoursesToggle eventKey="courses" />
        <Accordion.Collapse eventKey="courses">
          <div className="ps-4">
            <Nav.Link>Course 1</Nav.Link>
            <Nav.Link>Course 2</Nav.Link>
            <Nav.Link>Course 2</Nav.Link>
          </div>
        </Accordion.Collapse>
      </Accordion>

      <Nav.Link>
        <i class="bi bi-pencil-square"></i> Share a New Note
      </Nav.Link>
    </Nav>
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
          <i class="bi bi-backpack3"></i> My Courses
        </span>
        <i className={` bi bi-chevron-${isClicked ? 'up' : 'down'}`}></i>
      </div>
    </Nav.Link>
  );
}
