import React from "react";
import { Button } from "react-bootstrap";

function SearchResult(props) {
    console.log(props);
    return (
        <div>
            <div className="movie-container">
                <h5>Results for '{props.query}'</h5>
                <ul className="movieList">
                    {props.data.map((movie, index) => {
                        return (
                            <div className="searchList">
                                <li key={index}>
                                    {movie.Title}{" "}
                                </li>

                                <Button
                                    variant="secondary"
                                    size="sm"
                                >
                                    Nominate
                                </Button>
                            </div>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default SearchResult;
