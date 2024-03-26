import { useEffect, useState } from "react";

export default function SelectedMovie({ selectedId }) {
  const [movie, setMovie] = useState({});

  async function fetchMovies() {
    const res = await fetch(
      `http://www.omdbapi.com/?apikey=47c66884&i=${selectedId}`
    );

    const data = await res.json();
    setMovie(data);
    console.log(data);
  }

  useEffect(
    function () {
      fetchMovies();
    },
    [selectedId]
  );

  return <div>{movie.Title}</div>;
}
