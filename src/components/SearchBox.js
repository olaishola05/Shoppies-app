import React from "react";

function SearchBox() {
    return (
        <div className="search-container">
            <h3 className="app-name">The Shoppies</h3>
            <div className="search">
                <span>Movie Title</span>
                <input
                    type="text"
                    name="title"
                    id=""
                    placeholder="Enter movies title"
                />
            </div>
        </div>
    );
}

export default SearchBox;
