import { Link } from "react-router-dom";

export const MovieCard = ({ movies }) => {
  return (
    <div className="movie-card-container">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <Link to={`/movies/${movie.title.toLowerCase().replace(/ /g, "-")}`}>
            <div className="movie-card-image-container">
              <img
                className="movie-card-image"
                srcSet={`
https://image.tmdb.org/t/p/w300${movie.poster_path} 300w,
https://image.tmdb.org/t/p/w780${movie.poster_path} 745w,
https://image.tmdb.org/t/p/w1280${movie.poster_path} 1024w
`}
                sizes="(max-width: 745px) 300px,
       (max-width: 1024px) 745px,
       1024px"
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={`${movie.title} poster`}
              />
            </div>

            <h2 className="movie-card-title">{movie.title}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};
