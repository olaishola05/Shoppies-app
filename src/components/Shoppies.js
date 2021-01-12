import React, { useState, useEffect } from "react";
import SearchBox from "./SearchBox";
import SearchResult from "./SearchResult";
import Nominations from "./Nominations";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const url = `http://www.omdbapi.com/?apikey=${API_KEY}&r&s=boondocks`;

function Shoppies() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(url).then((res) => {
            setData(res.data.Search);
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
                            <SearchResult data={data} />
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
