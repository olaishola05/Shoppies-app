import React from "react";
import { Button } from "react-bootstrap";

function Nominations(props) {
    return (
        <div className="nominees">
            <h4>Nominees</h4>
            <ul className="movieList">
                {
                    <div className="nomList">
                        <ul>
                            <li>{props.movieTitle.Title}</li>
                        </ul>

                        <Button
                            variant="secondary"
                            size="sm"
                            onClick={() => props.delNomination()}
                        >
                            Remove
                        </Button>
                    </div>
                }
            </ul>
        </div>
    );
}

export default Nominations;
