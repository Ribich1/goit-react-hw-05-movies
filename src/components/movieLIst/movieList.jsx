import { MovieItem } from 'components/movieItem/movieItem';
import { MovieListStyled, MovieListTitle } from './movieList.styled';

export function MovieList({ movies }) {
  return (
    <MovieListStyled>
      <MovieListTitle>Trending movies</MovieListTitle>

      {movies.map(movie => {
        return <MovieItem key={movie.id} movie={movie} />;
      })}
    </MovieListStyled>
  );
}
