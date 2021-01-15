import React from "react";
import { Button } from "react-bootstrap";

function Nominations(props) {
    console.log(props);
    return (
        <div className="nominees">
            <h4>Nominees</h4>
            <div className="movieList">
                {props.nomination.map((movie, index) => {
                    return (
                        <div key={index} className="nomList">
                            <ul>
                                <li>{movie.Title}</li>
                            </ul>
                            <Button
                                variant="secondary"
                                size="sm"
                                onClick={() =>
                                    props.delNomination(
                                        movie.imdbID
                                    )
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
