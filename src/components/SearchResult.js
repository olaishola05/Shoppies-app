import React from "react";
import { Button } from "react-bootstrap";

function SearchResult(props) {
    return (
        <div>
            <div className="movie-container">
                <h5>Results for '{props.query}'</h5>
                <div className="movieList">
                    {props.data.map((movie) => {
                        props.setmovieTitle(movie);
                        return (
                            <ul
                                className="searchList"
                                key={movie.imdbID}
                            >
                                <li>{movie.Title} </li>

                                <Button
                                    variant="secondary"
                                    size="sm"
                                    onClick={
                                        props.handleNomination
                                    }
                                >
                                    Nominate
                                </Button>
                            </ul>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default SearchResult;
