import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StarRating from "./components/StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <App />
);

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <>
//       <StarRating
//         maxRating={5}
//         size={24}
//         defaultRating={movieRating}
//         color="green"
//         className="test"
//         messages={["дуже погано", "погано", "норм", "добре", "дуже добре"]}
//         onSetRating={setMovieRating}
//       />
//       <p>movie was rated {movieRating} stars</p>
//     </>
//   );
// }
