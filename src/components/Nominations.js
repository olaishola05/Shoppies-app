import React from "react";
import { Button } from "react-bootstrap";

function Nominations(props) {
    return (
        <div className="nominees">
            <h4>Nominees</h4>
            <div className="movieList">
                {props.nomination.map((movie, index) => {
                    return (
                        <div className="nomList">
                            <ul key={index}>
                                <li>{movie.Title}</li>
                            </ul>
                            <Button
                                variant="secondary"
                                size="sm"
                                onClick={() =>
                                    props.delNomination(
                                        movie.Title
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
