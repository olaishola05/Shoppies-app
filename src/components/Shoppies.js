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

    useEffect(() => {
        const url = `http://www.omdbapi.com/?apikey=${API_KEY}&r&s=${query}`;
        axios.get(url).then((res) => {
            setData(res.data.Search);
        });
    }, [query]);

    const handleNomination = (e) => {
        e.preventDefault();
    };

    return (
        <Container>
            <Row>
                <div className="search-container">
                    <h3 className="app-name">The Shoppies</h3>
                    <div className="search">
                        <span>Movie Title</span>
                        <input
                            type="text"
                            value={query}
                            placeholder="Enter movies title"
                            onChange={(event) =>
                                setQuery(event.target.value)
                            }
                        />
                    </div>
                </div>
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
                                />
                            )}
                        </Col>

                        <Col>
                            <Nominations />
                        </Col>
                    </Row>
                </Container>
            </div>
        </Container>
    );
}

export default Shoppies;
