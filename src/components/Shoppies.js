import React from "react";
import SearchBox from "./SearchBox";
import SearchResult from "./SearchResult";
import Nominations from "./Nominations";

import { Container, Row, Col } from "react-bootstrap";

function Shoppies() {
    return (
        <Container>
            <Row>
                <SearchBox />
            </Row>
            <div className="result">
                <Container>
                    <Row>
                        <Col>
                            <SearchResult />
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
