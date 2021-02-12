import React, {
    useState,
    useEffect,
    useRef,
    useReducer,
} from "react";
import SearchBox from "./SearchBox";
import SearchResult from "./SearchResult";
import Nominations from "./Nominations";
import Modal from "./Modal";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { reducer } from "./Reducer";
import "../App.css";

const API_KEY = process.env.REACT_APP_API_KEY;

const defaultState = {
    isModalOpen: false,
    modalContent: "",
};

function Shoppies() {
    const [query, setQuery] = useState("");
    const [nomination, setnomination] = useState([]);
    const [state, dispatch] = useReducer(reducer, defaultState);
    const [data, setData] = useState([]);

    let inputRef = useRef(null);

    useEffect(() => {
        const fetchMovies = () => {
            const url = `https://www.omdbapi.com/?apikey=${API_KEY}&r&s=${query}`;
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
            dispatch({ type: "LENGHT" });
        } else {
            const addTitle = nomination.concat({
                Title,
                imdbID,
            });
            dispatch({ type: "ADD_MOVIE" });
            setnomination(addTitle);
        }
    };

    // delete nominees
    const delNomination = (imdbID) => {
        const newMovie = nomination.filter(
            (item) => item.imdbID !== imdbID
        );
        setnomination(newMovie);
        dispatch({ type: "REMOVE" });
    };

    useEffect(() => {
        inputRef.current.focus();
    });

    const closeModal = () => {
        dispatch({ type: "CLOSE_MODAL" });
    };

    // LocalStorage section
    useEffect(() => {
        const nomination = JSON.parse(
            localStorage.getItem("nominations")
        );
        if (nomination) {
            setnomination(nomination);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(
            "nominations",
            JSON.stringify(nomination)
        );
    }, [nomination]);

    useEffect(() => {
        localStorage.removeItem("nominations");
    }, []);

    return (
        <>
            <Container>
                {state.isModalOpen && (
                    <Modal
                        modalContent={state.modalContent}
                        closeModal={closeModal}
                    />
                )}
                <Row>
                    <SearchBox
                        query={query}
                        handleChange={handleChange}
                        ref={inputRef}
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
        </>
    );
}

export default Shoppies;
