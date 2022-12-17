import React, { useState, useEffect } from "react";
import "./App.css";
import MovieBox from "./MovieBox";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.jpg";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=5c7d9a40d4aefdd461c130c286ebe7f0";
const API_SEARCH =
  "https://api.themoviedb.org/3/search/movie?api_key=5c7d9a40d4aefdd461c130c286ebe7f0&query";
function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  const searchMovie = async (e) => {
    e.preventDefault();
    console.log("Searching");
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=5c7d9a40d4aefdd461c130c286ebe7f0&query=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setMovies(data.results);
    } catch (e) {
      console.log(e);
    }
  };

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };
  return (
    <>
      <Navbar expand="lg" className="m-2 p-2">
        <Container>
          <Navbar.Brand href="/home">
            <img src={logo} />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>

          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-3"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>

            <Form
              className="d-flex mr-8"
              onSubmit={searchMovie}
              autoComplete="off"
            >
              <FormControl
                type="search"
                placeholder="Search for a movie"
                className="me-2"
                aria-label="search"
                name="query"
                value={query}
                onChange={changeHandler}
              ></FormControl>
              {/* <Button variant="secondary" type="submit">
                Search
              </Button> */}
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <p className="para">Most Recent Movies</p>
      <div>
        {movies.length > 0 ? (
          <div className="container">
            <div className="grid">
              {movies.map((movieReq) => (
                <MovieBox key={movieReq.id} {...movieReq} />
              ))}
            </div>
          </div>
        ) : (
          <h2>Sorry !! No Movies Found</h2>
        )}
      </div>
    </>
  );
}

export default App;
