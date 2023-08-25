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
      console.log(response.data.results);
      return response.data.results;
    })
    .catch(function (error) {
      console.error(error);
    });
