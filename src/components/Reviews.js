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
        if (response.results.length>0) {
          setReviews(response.results);
        }
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

  return (
    <>
      <ul>
        {(!reviews.length && <p>We don't have any reviews for this movie.</p>) ||
          reviews.map(rev => {
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
