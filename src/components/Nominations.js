import React from "react";
import { Button } from "react-bootstrap";

function Nominations(props) {
    return (
        <div className="nominees">
            <h4>Nominees</h4>
            <ul className="movieList">
                {props.nomination.map((nominate) => {
                    return (
                        <div className="nomList">
                            <ul key={nominate.imdbID}>
                                <li>{nominate.Title}</li>
                            </ul>

                            <Button
                                variant="secondary"
                                size="sm"
                                onClick={props.delNomination}
                            >
                                Remove
                            </Button>
                        </div>
                    );
                })}
            </ul>
        </div>
    );
}

export default Nominations;
