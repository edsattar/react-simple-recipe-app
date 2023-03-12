import { createContext, useContext, useState } from "react";
import axios from "axios";

const searchMealsURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const randomMealURL = "https://www.themealdb.com/api/json/v1/1/random.php";

const AppContext = createContext();

// get favorites from local storage
const getLocalStorage = (label) => {
  let data = localStorage.getItem(label);
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};


const AppProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [showMealModal, setShowMealModal] = useState(false);
  const [favorites, setFavorites] = useState(getLocalStorage("favorites"));

  const fetchMeals = async (searchTerm) => {
    const url = searchTerm === "" ? randomMealURL : `${searchMealsURL}${searchTerm}`;
    setLoading(true);

    try {
      const { data } = await axios(url);
      data.meals ? setMeals(data.meals) : setMeals([]);
    } catch (error) {
      console.log(error.response);
    }
    setLoading(false);
  };

  const addToFavorites = (meal) => {
    // check if the meal is already in the favorites
    const isMealInFavorites = favorites.some((favorite) => favorite.idMeal === meal.idMeal);
    
    if (isMealInFavorites) return;

    const updatedFavorites = [...favorites, meal];
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const removeFromFavorites = (meal) => {
    const updatedFavorites = favorites.filter((favorite) => favorite.idMeal !== meal.idMeal);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };


  return (
    <AppContext.Provider
      value={{
        loading,
        meals,
        selectedMeal,
        favorites,
        fetchMeals,
        showMealModal,
        setShowMealModal,
        setSelectedMeal,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// export the AppContext and the AppProvider components so that we can import them in the index.jsx file and wrap the App component around the AppProvider component 
export { AppProvider };

export const useGlobalContext = () => {
  return useContext(AppContext);
};
