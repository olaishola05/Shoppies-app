import React, { useState, useEffect, useRef } from "react";
import SearchBox from "./SearchBox";
import SearchResult from "./SearchResult";
import Nominations from "./Nominations";

import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

function Shoppies() {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");
    const [nomination, setnomination] = useState([]);

    let btnRef = useRef(null);

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

    const handleNomination = (Title, imdbID) => {
        if (nomination.length >= 5) {
            alert("nomination exhausted");
        } else {
            const nominate = nomination.concat({
                Title,
                imdbID,
            });
            setnomination(nominate);
            localStorage.setItem(
                "nominations",
                JSON.stringify(nominate)
            );
            btnState();
        }
    };

    useEffect(() => {
        const storedData = localStorage.getItem("nominations");
        if (storedData) {
            setnomination(JSON.parse(storedData));
        }
    }, []);

    const btnState = (Title) => {
        nomination.map((item) => {
            if (item.Title === Title) {
                btnRef.current.setAttribute(
                    "disabled",
                    "disabled"
                );
            }
            return item;
        });
    };

    // delete nominees
    const delNomination = (imdbID) => {
        const newMovie = nomination.filter(
            (item) => item.imdbID !== imdbID
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
                                    <h5>
                                        Search for favorite
                                        movies to nominate
                                    </h5>
                                </div>
                            ) : (
                                <SearchResult
                                    data={data}
                                    ref={btnRef}
                                    query={query}
                                    handleNomination={
                                        handleNomination
                                    }
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
