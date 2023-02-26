import { useGlobalContext } from "../context";
import { Row, Container } from "react-bootstrap";
import { MealCard } from "./MealCard";

const Meals = () => {
  const { loading, meals } = useGlobalContext();

  if (loading) {
    return <h1 className="section-title">Loading...</h1>;
  }
  if (meals.length < 1) {
    return (
      <h3 className="section-title">
        No meals matched your search criteria
        </h3>
    );
  }

  return (
    <Container>
      <Row xs={1} sm={2} md={2} lg={3} xl={3} className="g-4">
        {meals.map((meal) => (
          <MealCard
            key={meal.idMeal}
            meal={meal}
          />
        ))}
      </Row>
    </Container>
  );
};
export default Meals;
