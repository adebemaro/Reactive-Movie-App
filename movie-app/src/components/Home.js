import Hero from "./Hero";
import { Link } from "react-router-dom";

//example link:https://api.themoviedb.org/3/search/movie?api_key=e65371827c08bf1de82a0f186dc1b813&language=en-US&query=top%20gun&page=1&include_adult=false

const MovieCard = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const overview = `${movie.overview}`;
  const movieid = `/movies/${movie.id}`;
  return (
    <>
      <div className="col-lg-3 col-md-4 col-3 my-4">
        <div className="card">
          <img
            src={posterUrl}
            className="card-img-top"
            alt={movie.original_title}
          />
          <div className="card-body">
            <h5 className="card-title">{movie.original_title}</h5>
            <p className="card-text">{overview.substring(0, 50)}...</p>
            <Link to={movieid} className="btn btn-primary">
              View Movie
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const HomeView = ({ popularResults, keyword }) => {
  const resultsHtml = popularResults.map((obj, i) => {
    return <MovieCard movie={obj} key={i} />;
  });
  return (
    <>
      <Hero text="Maro's Movie Browser" />
      {resultsHtml && (
        <div className="container">
          <div className="row">{resultsHtml}</div>
        </div>
      )}
    </>
  );
};
export default HomeView;
