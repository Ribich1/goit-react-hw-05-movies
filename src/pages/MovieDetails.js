import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMoviesById } from '../pages/service/movies-service';
import { useEffect, useRef, useState } from 'react';
import { Loader } from 'components/Loader/Loader';
import { GoBackBtn } from 'components/GoBackBtn/GoBackBtn';
import { LayoutStyled } from 'components/Layaout/Layaout.styled';
import { MovieComponent } from 'components/movieComponent/movieComponent';

const MovieDetails = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  useEffect(() => {
    const fetchMovies = async movieId => {
      setIsLoading(true);
      try {
        const response = await getMoviesById(movieId);
        setMovies(response);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies(movieId);
  }, [movieId]);


  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  return (
    <>
      <LayoutStyled>
        {error && <div>{error}</div>}
        {isLoading && <Loader />}
        {!isLoading && (
          <>
            <GoBackBtn path={backLinkLocationRef.current} />
            <MovieComponent movies={movies} />
            <Outlet />
          </>
        )}
      </LayoutStyled>
    </>
  );
};

export default MovieDetails;
