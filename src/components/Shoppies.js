import React, { useState, useEffect } from "react";
import SearchBox from "./SearchBox";
import SearchResult from "./SearchResult";
import Nominations from "./Nominations";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const url = `http://www.omdbapi.com/?apikey=${API_KEY}&s=24`;

function Shoppies() {
    const [data, setData] = useState({ movies: [] });

    useEffect(() => {
        axios.get(url).then((res) => {
            const movieList = res.data;

            setData({ movies: movieList });
            console.log(data.movies);
        });
    }, []);

    return (
        <Container>
            <Row>
                <SearchBox />
            </Row>
            <div className="result">
                <Container>
                    <Row>
                        <Col>
                            <SearchResult data={data.movies} />
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
