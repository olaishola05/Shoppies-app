import React from "react";

function SearchResult(data) {
    const { Title } = data;
    console.log(Title);

    return (
        <div>
            <div className="movie-container">
                <h4>Results for search</h4>
                <ul className="movieList">
                    <li>Title</li>
                </ul>
            </div>
        </div>
    );
}

export default SearchResult;
