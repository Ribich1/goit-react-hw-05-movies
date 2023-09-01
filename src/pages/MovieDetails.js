import { Link, Outlet, useParams } from 'react-router-dom';
import { getMoviesById } from '../pages/service/movies-service';
import { useEffect, useState } from 'react';

const MovieDetails = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  console.log('movieId', movieId);
  useEffect(() => {
    const fetchMovies = async movieId => {
      setIsLoading(true);
      try {
        const response = await getMoviesById(movieId);
        setMovies(response);
        console.log('response', response);
      } catch (error) {
        console.log('error', error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies(movieId);
  }, [movieId]);
  console.log('movies123', movies);
  const { original_title, overview, genres, poster_path } = movies;
  const link = `https://image.tmdb.org/t/p/w500${poster_path}`;
  return (
    <>
      <div>
        <img src={link} alt="Film" />
      </div>
      <h1>{original_title}</h1>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h3>Genres</h3>
      <ul>
        {genres &&
          genres.map(genre => {
            return <li key={genre.id}>{genre.name}</li>;
          })}
      </ul>

      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
