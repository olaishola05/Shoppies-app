import React from "react";
import { Button } from "react-bootstrap";

function SearchResult(props) {
    return (
        <div>
            <div className="movie-container">
                <h5>Results for '{props.query}'</h5>
                <div className="movieList">
                    {props.data.map((movie) => {
                        return (
                            <div
                                className="searchList"
                                key={movie.imdbID}
                            >
                                <ul>
                                    <li>{movie.Title} </li>
                                </ul>

                                <Button
                                    variant="secondary"
                                    size="sm"
                                    onClick={
                                        props.handleNomination
                                    }
                                >
                                    Nominate
                                </Button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default SearchResult;
