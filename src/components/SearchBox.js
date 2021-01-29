import React, { Fragment, forwardRef } from "react";

function SearchBox(props, ref) {
    return (
        <Fragment>
            <div className="search-container">
                <h3 className="app-name">The Shoppies</h3>
                <div className="search">
                    <span>Movie Title</span>
                    <input
                        ref={ref}
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

export default forwardRef(SearchBox);
