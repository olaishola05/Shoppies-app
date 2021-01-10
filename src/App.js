import React from "react";
import "./App.css";
import Shoppies from "./components/Shoppies";
import { Container } from "react-bootstrap";

require("dotenv").config();

function App() {
    return (
        <React.Fragment>
            <main>
                <Container>
                    <Shoppies />
                </Container>
            </main>
        </React.Fragment>
    );
}

export default App;
