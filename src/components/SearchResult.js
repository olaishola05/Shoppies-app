import React, { useState } from "react";
import { Button } from "react-bootstrap";

function SearchResult(props) {
    const [list, setlist] = useState(props.data);

    return (
        <div>
            <div className="movie-container">
                <h5>Results for '{props.query}'</h5>
                <div className="movieList">
                    {list.map((movie) => {
                        props.setmovieTitle(list);
                        return (
                            <ul
                                className="searchList"
                                key={movie.imdbID}
                            >
                                <li>{movie.Title} </li>

                                <Button
                                    variant="secondary"
                                    size="sm"
                                    onClick={() =>
                                        props.handleNomination(
                                            movie.Title
                                        )
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
