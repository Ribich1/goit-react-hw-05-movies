import { useEffect, useState } from 'react';
import { getMovies } from './service/movies-service';
import { Link } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const response = await getMovies();
        setMovies(response);
      } catch (error) {
        console.log('error', error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, []);

  //   useEffect(() => {
  // HTTP request
  // }, []);
  return (
    <>
      {error && <div>{error}</div>}
      <div>Home page</div>

      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/:${movie.id}`}>
                {movie.title || movie.name}
              </Link>
            </li>
          );
        })}
      </ul>
      {isLoading && <div>Loading....</div>}
    </>
  );
};
export default Home;
