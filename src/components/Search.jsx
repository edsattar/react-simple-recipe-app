import { useEffect, useState } from "react";
import { Form, Button, Row, Stack } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { useGlobalContext } from "../context";

const Search = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
  const { fetchMeals } = useGlobalContext();
  const [search, setSearch] = useState("");
  const [prevSearch, setPrevSearch] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // if search is the same as previous search, then do nothing
    if (search != prevSearch || search === "") {
      fetchMeals(search);
      setPrevSearch(search);
    }
  };

  // this is to handle the responsiveness of the search bar
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 576);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderButtonContent = () => {
    if (search === "") {
      return isSmallScreen ? <GiPerspectiveDiceSixFacesRandom /> : "Surprise me!";
    } else {
      return isSmallScreen ? <BsSearch /> : "Search";
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit} className="mb-4" style={{ width: "600px" }}>
        <Form.Group>
          <Stack gap={2} direction="horizontal">

            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              type="text"
              placeholder="Search for a meal"
              className="form-control-lg rounded-2"
            />

            <Button
              variant={search === "" ? "danger" : "dark"}
              className={`btn-lg rounded-2 text-nowrap ${isSmallScreen ? "btn-icon" : ""}`}
              type="submit"
            >
              {renderButtonContent()}
            </Button>
          </Stack>
        </Form.Group>
      </Form>
    </>
  );
};

export default Search;
