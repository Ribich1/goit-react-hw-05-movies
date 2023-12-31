import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/trending/all/day',
  params: { language: 'en-US' },
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNzIwODc0MjAyYzIwOGQ5ZWQ3OGQ1MjFmMjY2Y2U2NyIsInN1YiI6IjY0ZTkxN2ZlMDZmOTg0MDBhZTQ5MGI5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.btoi06h0ihOod2yP9dAWcgLoOwdiNZUBYXKL2PUWqSY',
  },
};

export const getMovies = () =>
  axios
    .request(options)
    .then(function (response) {
      return response.data.results;
    })
    .catch(function (error) {
      console.error(error);
    });

const optionsFilmId = movie_id => {
  return {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${movie_id}`,
    params: { language: 'en-US' },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNzIwODc0MjAyYzIwOGQ5ZWQ3OGQ1MjFmMjY2Y2U2NyIsInN1YiI6IjY0ZTkxN2ZlMDZmOTg0MDBhZTQ5MGI5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.btoi06h0ihOod2yP9dAWcgLoOwdiNZUBYXKL2PUWqSY',
    },
  };
};

export const getMoviesById = movie_id =>
  axios
    .request(optionsFilmId(movie_id))
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });

const optionsCast = movie_id => {
  return {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${movie_id}/credits`,
    params: { language: 'en-US' },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNzIwODc0MjAyYzIwOGQ5ZWQ3OGQ1MjFmMjY2Y2U2NyIsInN1YiI6IjY0ZTkxN2ZlMDZmOTg0MDBhZTQ5MGI5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.btoi06h0ihOod2yP9dAWcgLoOwdiNZUBYXKL2PUWqSY',
    },
  };
};

export const getMoviesCastById = movie_id =>
  axios
    .request(optionsCast(movie_id))
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });

const optionsReviews = movie_id => {
  return {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${movie_id}/reviews`,
    params: { language: 'en-US', page: '1' },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNzIwODc0MjAyYzIwOGQ5ZWQ3OGQ1MjFmMjY2Y2U2NyIsInN1YiI6IjY0ZTkxN2ZlMDZmOTg0MDBhZTQ5MGI5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.btoi06h0ihOod2yP9dAWcgLoOwdiNZUBYXKL2PUWqSY',
    },
  };
};

export const getMoviesReviewsById = movie_id =>
  axios
    .request(optionsReviews(movie_id))
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });

const optionsQuery = nameFilm => {
  return {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/search/movie',
    params: {
      query: `${nameFilm}`,
      include_adult: 'false',
      language: 'en-US',
      page: '1',
    },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNzIwODc0MjAyYzIwOGQ5ZWQ3OGQ1MjFmMjY2Y2U2NyIsInN1YiI6IjY0ZTkxN2ZlMDZmOTg0MDBhZTQ5MGI5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.btoi06h0ihOod2yP9dAWcgLoOwdiNZUBYXKL2PUWqSY',
    },
  };
};

export const getMoviesByNameFilm = nameFilm =>
  axios
    .request(optionsQuery(nameFilm))
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });
