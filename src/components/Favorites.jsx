import React from "react";
import { Row, Stack } from "react-bootstrap";
import { useGlobalContext } from "../context";
import { FaTimes } from "react-icons/fa";

const Favorites = () => {
  const { favorites, removeFromFavorites, setSelectedMeal, setShowMealModal } = useGlobalContext();

  return (
    <section>
      <h5 className="text-start mx-1">Favorites</h5>
      <Row className="favorites rounded mx-0 mb-3">
        
        <Row>
          <Stack direction="horizontal" gap={"2"}>
            {favorites.map((meal) => {
              return (
                <Stack key={meal.idMeal} direction="vertical" style={{ maxWidth: "60px" }}>
                  <img
                    onClick={() => {
                      setSelectedMeal(meal);
                      setShowMealModal(true);
                    }}
                    className="favorites-img"
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                  />
                  <button className="remove-btn" onClick={() => removeFromFavorites(meal)}>
                    <FaTimes />
                  </button>
                </Stack>
              );
            })}
          </Stack>
        </Row>
      </Row>
    </section>
  );
};

export default Favorites;
