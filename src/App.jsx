// import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import "./App.scss";
import Favorites from "./components/Favorites";
import MealModal from "./components/MealModal";
import Meals from "./components/Meals";
import Search from "./components/Search";
import { useGlobalContext } from "./context";


export default function App() {
  const { showMealModal, setShowMealModal , favorites } = useGlobalContext();
  return (
    <Container className="my-4">
      <Row><Search /></Row>
      {favorites.length > 0 && <Row><Favorites /></Row>}
      <Row><Meals /></Row>
      {showMealModal && <MealModal show={showMealModal} onHide={() => setShowMealModal(false)} />}
    </Container>
  );
}
