import { Link, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieId = searchParams.get('movieId') ?? '';
  console.log('searchParams', movieId);

  const updateQueryString = evt => {
    const movieIdValue = evt.target.value;
    if (movieIdValue === '') {
      return setSearchParams({});
    }
    setSearchParams({ movieId: movieIdValue });
  };

  return (
    <div>
      <input type="text" value={movieId} onChange={updateQueryString} />
      <button onClick={() => setSearchParams({ c: 'hello' })}>change sp</button>
      {/* http://localhost:3000/goit-react-hw-05-movies/movies?a=5&b=10 */}
      {/* http://localhost:3000/goit-react-hw-05-movies/movies?c=hello */}
      {['film-1', 'film-2', 'film-3', 'film-4', 'film-5'].map(film => {
        return (
          <Link key={film} to={`${film}`}>
            {film}
          </Link>
        );
      })}
    </div>
  );
};
export default Movies;
