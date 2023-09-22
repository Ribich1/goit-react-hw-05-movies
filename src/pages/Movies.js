import {useSearchParams } from 'react-router-dom';
import { getMoviesByNameFilm } from 'pages/service/movies-service';
import { useEffect, useState } from 'react';
import { LayoutStyled } from 'components/Layaout/Layaout.styled';
import { Error } from 'components/Error/Error.styled';
import { Loader } from 'components/Loader/Loader';
import { MovieList } from 'components/movieLIst/movieList';
import { Searchbar } from 'components/Searchbar/Searchbar';



const Movies = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [films, setFilms] = useState([]);
  const [searchParams] = useSearchParams();

  const query = searchParams.get('query') || '';

  useEffect(() => {
    const fetchMoviesQuery = async query => {
      setIsLoading(true);
      try {
        const response = await getMoviesByNameFilm(query);
        setFilms(response.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMoviesQuery(query);
  }, [query]);

  return (
    <LayoutStyled>
      {error && !isLoading && <Error>{error}</Error>}
      {isLoading && <Loader />}
      <Searchbar/>
      {films.length !== 0 && <MovieList movies={films} />}
    </LayoutStyled>
  );
};
export default Movies;
