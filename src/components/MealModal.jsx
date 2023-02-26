import React from "react";
import { Modal, Button, Row, Card } from "react-bootstrap";
import { useGlobalContext } from "../context";

export default function MealModal({ ...props }) {
  const { selectedMeal } = useGlobalContext();
  
  return (
    <Modal
      {...props}
      dialogClassName="modal-dialog-scrollable"
      size="xl"
      centered
    >
      <Modal.Header closeButton>
        <h3>{selectedMeal.strMeal}</h3>
      </Modal.Header>
      <Modal.Body className="p-0">
        <Card.Img
          variant="top"
          src={selectedMeal.strMealThumb}
          className="object-fit-cover"
        />
        <Row className="m-5 align-items-center">
          <h5>{selectedMeal.strInstructions}</h5>
          <a href={selectedMeal.strYoutube}>Youtube</a>
          <a href={selectedMeal.strSource} target="_blank">Source</a>
        </Row>
        <Row></Row>
      </Modal.Body>
    </Modal>
  );
}
