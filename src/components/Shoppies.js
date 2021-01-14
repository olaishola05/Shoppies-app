import React, { useState, useEffect } from "react";
import SearchBox from "./SearchBox";
import SearchResult from "./SearchResult";
import Nominations from "./Nominations";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

function Shoppies() {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");
    const [movieTitle, setmovieTitle] = useState("");
    const [nomination, setnomination] = useState([]);
    const [button, setbutton] = useState(true);

    useEffect(() => {
        const fetchMovies = () => {
            const url = `http://www.omdbapi.com/?apikey=${API_KEY}&r&s=${query}`;
            axios.get(url).then((res) => {
                setData(res.data.Search);
            });
        };

        fetchMovies();
    }, [query]);

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    const handleNomination = (Title) => {
        const nominate = nomination.concat({ Title });

        setnomination(nominate);
        setbutton(false);
    };

    // delete nominees
    const delNomination = (Title) => {
        const newMovie = nomination.filter(
            (item) => item.Title !== Title
        );
        setnomination(newMovie);
    };

    return (
        <Container>
            <Row>
                <SearchBox
                    query={query}
                    handleChange={handleChange}
                />
            </Row>
            <div className="result">
                <Container>
                    <Row>
                        <Col>
                            {!data ? (
                                <div className="movie-container">
                                    {query}

                                    <h5>
                                        Search for favorite
                                        movies to nominate
                                    </h5>
                                </div>
                            ) : (
                                <SearchResult
                                    data={data}
                                    query={query}
                                    handleNomination={
                                        handleNomination
                                    }
                                    setmovieTitle={setmovieTitle}
                                />
                            )}
                        </Col>

                        <Col>
                            <Nominations
                                nomination={nomination}
                                delNomination={delNomination}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        </Container>
    );
}

export default Shoppies;
