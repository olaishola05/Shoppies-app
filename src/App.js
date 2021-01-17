import React, { Fragment } from "react";
import "./App.css";
import Shoppies from "./components/Shoppies";
import { Container } from "react-bootstrap";

require("dotenv").config();

function App() {
    return (
        <Fragment>
            <Container className="cont">
                <Shoppies />
            </Container>
        </Fragment>
    );
}

export default App;
