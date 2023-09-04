import { useParams } from 'react-router-dom';
import { getMoviesReviewsById } from 'pages/service/movies-service';
import { useEffect, useState } from 'react';
import { Loader } from 'components/Loader/Loader';

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
        setReviews(response);
        console.log('response', response);
      } catch (error) {
        console.log('error', error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMoviesReviews(movieId);
  }, [movieId]);
  console.log('reviews', reviews.results);
  const arrayReviews = reviews.results;

  return (
    <>
      <ul>
        {arrayReviews &&
          arrayReviews.map(rev => {
            return (
              <li key={rev.id}>
                <h2>Author: {rev.author}</h2>
                <p>{rev.content}</p>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Reviews;
