import { Link } from 'react-router-dom';
import {
  MovieDetailWrap,
  MovieTitle,
  DetailTitle,
  MovieText,
  AdditionalLink,
  AdditionalWrap,
} from './movieComponent.styled';
import { PreLoaderMovie } from 'components/PreLoader/PreLoader.styled';

export function MovieComponent({ movies }) {
  const { original_title, overview, genres, poster_path, vote_average } =
    movies;
  const link = `https://image.tmdb.org/t/p/w342${poster_path}`;

  return (
    <>
      <MovieDetailWrap>
        {poster_path ? (<img src={link} alt="Film" />) : (<PreLoaderMovie/>)}
        <div>
          <MovieTitle>{original_title}</MovieTitle>
          <MovieText>
            User Score: {vote_average ? Math.round(vote_average * 10) : 0} %
          </MovieText>
          <DetailTitle>Overview</DetailTitle>
          <MovieText>{overview}</MovieText>
          <DetailTitle>Genres</DetailTitle>
          <ul>
            {genres && (
              <MovieText>{genres.map(({ name }) => name).join(', ')}</MovieText>
            )}
          </ul>
        </div>
      </MovieDetailWrap>
      <AdditionalWrap>
      <DetailTitle>Additional information</DetailTitle>
      <ul>
        <li>
          <AdditionalLink to="cast">Cast</AdditionalLink>
        </li>
        <li>
          <AdditionalLink to="reviews">Reviews</AdditionalLink>
        </li>
      </ul>
      </AdditionalWrap>
    </>
  );
}
