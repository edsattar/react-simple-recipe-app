import React from "react";
import { Row, Col, Button, Card } from "react-bootstrap";
import { BsHandThumbsUp } from "react-icons/bs";
import { useGlobalContext } from "../context";

export const MealCard = ({ meal }) => {
  const { addToFavorites, setSelectedMeal, setShowMealModal } = useGlobalContext();
  
  const handleModal = () => {
    setSelectedMeal(meal);
    setShowMealModal(true);
  };

  return (
    <Col>
      <Card className="meal-card border-0 shadow rounded">
        <Card.Img onClick={handleModal}  variant="top" src={meal.strMealThumb} className="object-fit-cover" />

        <Card.Body>
          <Row className="align-items-center">
            <Col>
              <Card.Title className="m-0 text-start">{meal.strMeal}</Card.Title>
            </Col>

            <Col xs="auto">
              <Button
                onClick={() => addToFavorites(meal)}
                variant="outline-danger"
                className="like pb-2 pt-1 px-3"
              >
                <BsHandThumbsUp />
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
};
