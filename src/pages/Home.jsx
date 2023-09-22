import { useEffect, useState } from 'react';
import { getMovies } from './service/movies-service';
import { Loader } from 'components/Loader/Loader';
import { MovieList } from 'components/movieLIst/movieList';
import { LayoutStyled } from 'components/Layaout/Layaout.styled';
import { Error } from '../components/Error/Error.styled';

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
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, []);

  return (
    <LayoutStyled>
      {error && !isLoading && <Error>{error}</Error>}
      {isLoading && <Loader />}
      <MovieList movies={movies} />
    </LayoutStyled>
  );
};
export default Home;
