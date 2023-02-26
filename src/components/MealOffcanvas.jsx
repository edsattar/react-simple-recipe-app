import { useState } from "react";
import { Button } from "react-bootstrap";
import Offcanvas from 'react-bootstrap/Offcanvas'

export default function MealDetails() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <h1>test</h1>
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>
      
      <Offcanvas show={show} onHide={handleClose} backdrop={true}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas!!!!</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
