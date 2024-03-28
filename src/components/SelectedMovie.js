import { useEffect, useState } from "react";
import StarRating from "./StarRating";
import Loader from "./Loader";

export default function SelectedMovie({
  selectedId,
  onCloseMovie,
  onAddWatched,
}) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState("");
  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  function handleAdd() {

    const newMovie = {
      ...movie,
      userRating: userRating,
      runtime: Number(runtime.split(" ").at(0)),
    };

    onAddWatched(newMovie);
  }

  async function getMovieDetail() {
    setIsLoading(true);
    const res = await fetch(
      `http://www.omdbapi.com/?apikey=47c66884&i=${selectedId}`
    );

    const data = await res.json();
    setMovie(data);
    setIsLoading(false);
  }

  useEffect(
    function () {
      getMovieDetail();
    },
    [selectedId]
  );

  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={onCloseMovie}>
              &larr;
            </button>
            <img src={poster} alt={`poster for ${title} movie`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} - {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐️</span>
                {imdbRating} IMDb rating
              </p>
            </div>
          </header>
          <section>
            <StarRating maxRating={10} size={24} onSetRating={setUserRating} />
            <button className="btn-add" onClick={handleAdd}>
              + add to watched
            </button>
            <p>
              <em>{plot}</em>
            </p>
            <p>
              actors: <em>{actors}</em>
            </p>
            <p>
              director: <em>{director}</em>
            </p>
          </section>
        </>
      )}
    </div>
  );
}
