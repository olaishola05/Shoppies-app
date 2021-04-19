import React from "react";
import { Button } from "react-bootstrap";

function Nominations({ nomination, delNomination }) {
    return (
        <div className="nominees">
            <h4>Nominees</h4>

            <div className="movieList">
                {nomination.map((movie, index) => {
                    return (
                        <div key={index} className="nomList">
                            <ul>
                                <li>{movie.Title}</li>
                            </ul>
                            <Button
                                variant="secondary"
                                size="sm"
                                onClick={() =>
                                    delNomination(movie.imdbID)
                                }
                            >
                                Remove
                            </Button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Nominations;
