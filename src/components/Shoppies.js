import React from "react";
import SearchBox from "./SearchBox";
import SearchResult from "./SearchResult";
import Nominations from "./Nominations";

function Shoppies() {
    return (
        <div>
            <SearchBox />
            <div className="result">
                <SearchResult />
                <Nominations />
            </div>
        </div>
    );
}

export default Shoppies;
