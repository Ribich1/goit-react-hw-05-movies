import { useParams } from 'react-router-dom';
import { getMoviesReviewsById } from 'pages/service/movies-service';
import { useEffect, useState } from 'react';
import { Loader } from 'components/Loader/Loader';
import { Error } from '../Error/Error.styled';
import { ListReviews, ReviewWrap, ReviewsText, ReviewsTitle } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMoviesReviews = async movieId => {
      setIsLoading(true);
      try {
        const response = await getMoviesReviewsById(movieId);
        if (response.results.length > 0) {
          setReviews(response.results);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMoviesReviews(movieId);
  }, [movieId]);

  return (
    <ReviewWrap>
      {error && !isLoading && <Error>{error}</Error>}
      {isLoading && <Loader />}

      <ListReviews>
        {(!reviews.length && (
          <Error>
            <p>We don't have any reviews for this movie.</p>
          </Error>
        )) ||
          reviews.map(rev => {
            return (
              <li key={rev.id}>
                <ReviewsTitle>Author: {rev.author}</ReviewsTitle>
                <ReviewsText>{rev.content}</ReviewsText>
              </li>
            );
          })}
      </ListReviews>
    </ReviewWrap>
  );
};

export default Reviews;
