import { useParams } from 'react-router-dom';
import { getMoviesCastById } from 'pages/service/movies-service';
import { useEffect, useState } from 'react';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMoviesCast = async movieId => {
      setIsLoading(true);
      try {
        const response = await getMoviesCastById(movieId);
        setCast(response);
        console.log('response', response);
      } catch (error) {
        console.log('error', error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMoviesCast(movieId);
  }, [movieId]);
  const arrayCast = cast.cast;

  return (
    <>
      <ul>
        {arrayCast &&
          arrayCast.map(hero => {
            return (
              <li key={hero.id}>
                <ul>
                  <li>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${hero.profile_path}`}
                      alt={hero.name}
                    />
                  </li>
                  <li>{hero.name}</li>
                  <li>{hero.character}</li>
                </ul>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Cast;
