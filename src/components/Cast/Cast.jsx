import { useParams } from 'react-router-dom';
import { getMoviesCastById } from 'pages/service/movies-service';
import { useEffect, useState } from 'react';
import { Error } from 'components/Error/Error.styled';
import { Loader } from 'components/Loader/Loader';
import { CardCast, CardItem, CastWrap } from './Cast.styled';
import { PreLoaderCast } from 'components/PreLoader/PreLoader.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMoviesCast = async movieId => {
      setIsLoading(true);
      try {
        const response = await getMoviesCastById(movieId);
        if (response.cast.length === 0) setError('There are no describe casts in this film ');
        setCast(response);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMoviesCast(movieId);
  }, [movieId]);
  const arrayCast = cast.cast;

  return (
    <CastWrap>
      {error && !isLoading && <Error>{error}</Error>}
      {isLoading && <Loader />}
      <CardCast>
        {arrayCast &&
          arrayCast.map(hero => {
            return (
              // key={hero.id}
              <CardItem key={hero.id}>
                <ul>
                  <li>
                    {hero.profile_path ? (
                      <img
                        src={`https://image.tmdb.org/t/p/w92${hero.profile_path}`}
                        alt={hero.name}
                      />
                    ) : (
                      <PreLoaderCast />
                    )}
                  </li>
                  <li>{hero.name}</li>
                  <li>{hero.character}</li>
                </ul>
              </CardItem>
            );
          })}
      </CardCast>
    </CastWrap>
  );
};

export default Cast;
