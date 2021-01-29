import React from "react";
import { Button } from "react-bootstrap";

function SearchResult(props) {
    const list = props.data;

    return (
        <div>
            <div className="movie-container">
                <h5>Results for '{props.query}'</h5>
                <div className="movieList">
                    {list.map((movie) => {
                        return (
                            <ul
                                className="searchList"
                                key={movie.imdbID}
                            >
                                <li>{movie.Title} </li>

                                <Button
                                    variant="secondary"
                                    disabled={movie.isActive}
                                    size="sm"
                                    onClick={() =>
                                        props.handleNomination(
                                            movie.Title,
                                            movie.imdbID
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
// const btnStyle = {
//     display: "disabled",
// };

export default SearchResult;
// export default SearchResult;
