import React from "react";
import "./App.css";
import Shoppies from "./components/Shoppies";
import { Container } from "react-bootstrap";

require("dotenv").config();

function App() {
    return (
        <>
            <Container className="cont">
                <Shoppies />
            </Container>
        </>
    );
}

export default App;
