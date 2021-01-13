import React, { Fragment } from "react";

function SearchBox(props) {
    return (
        <Fragment>
            <div className="search-container">
                <h3 className="app-name">The Shoppies</h3>
                <div className="search">
                    <span>Movie Title</span>
                    <input
                        type="text"
                        value={props.query}
                        placeholder="Enter movies title"
                        onChange={props.handleChange}
                    />
                </div>
            </div>
        </Fragment>
    );
}

export default SearchBox;
