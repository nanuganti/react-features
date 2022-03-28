//If your component renders the same result given the same props,
// you can wrap it in a call to React.memo for a performance boost 
//in some cases by memoizing the result
//React memoizes the rendered output of the wrapped component then skips unnecessary renderings.
import React from "react"

const Movie = (title, releaseDate) => {
    return (
        <div>
            {console.log("rendering...")}
            <div>Movie Title: {title}</div>
            <div>Movie Release Date: {releaseDate}</div>
        </div>
    )

};

const MemoizedMovie = React.memo(Movie);
const Memo = () => {
    return (
        <div>
            <p>This is Memo Example</p><br />
            {/* <MemoizedMovie title="prasthanam" releaseDate="2017" /> */}

        </div>
    )
}

export default Memo;