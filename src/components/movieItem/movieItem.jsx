import { useLocation } from 'react-router-dom';
import { MoviItemStyled, MovieItemLink } from './movieItem.styled';

export function MovieItem({ movie: { title, name, id } }) {
  const location = useLocation();
  return (
    <MoviItemStyled>
      <MovieItemLink to={`/movies/${id}`} state={{ from: location }}>
        {title || name}
      </MovieItemLink>
    </MoviItemStyled>
  );
}
