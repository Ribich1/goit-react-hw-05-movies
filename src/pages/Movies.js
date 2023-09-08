import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getMoviesByNameFilm } from 'pages/service/movies-service';
import { useEffect, useState } from 'react';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieId = searchParams.get('movieId') ?? '';
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [films, setFilms] = useState([]);
  const [movieIdValue, setMovieIdValue] = useState('');

  const handleChangeMovieId = event => {
    setMovieIdValue(event.currentTarget.value.toLowerCase());
  };

  const updateQueryString = evt => {
    evt.preventDefault();
    // const movieIdValue = evt.target.value;
    if (movieIdValue === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: movieIdValue });
  };

  const handleSerchFilm = e => {
    setSearchParams({ movieId: e.target.value });
  };
  const query = searchParams.get('query') || '';

  useEffect(() => {
    const fetchMoviesQuery = async query => {
      setIsLoading(true);
      try {
        const response = await getMoviesByNameFilm(query);
        setFilms(response);
        console.log('response', response);
      } catch (error) {
        console.log('error', error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMoviesQuery(query);
  }, [query]);

  console.log('films123', films);
  console.log('query', query);
  const arrayFilms = films.results;
  const location = useLocation();
  return (
    <>
      <form onSubmit={updateQueryString}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          value={movieIdValue}
          onChange={handleChangeMovieId}
        />
        <button type="submit">Search</button>
      </form>
      {/* http://localhost:3000/goit-react-hw-05-movies/movies?a=5&b=10 */}
      {/* http://localhost:3000/goit-react-hw-05-movies/movies?c=hello */}
      <ul>
        {arrayFilms?.map(film => {
          return (
            <li key={film.id}>
              <Link to={`/movies/${film.id}`} state={{ from: location }}>
                {film.original_title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default Movies;
