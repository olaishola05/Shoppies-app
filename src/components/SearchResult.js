import React from "react";

function SearchResult(props) {
    console.log(props);
    return (
        <div>
            <div className="movie-container">
                <h4>Results for search</h4>
                <ul className="movieList">
                    {props.data.map((movie, index) => {
                        return (
                            <li key={index}>{movie.Title}</li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default SearchResult;
