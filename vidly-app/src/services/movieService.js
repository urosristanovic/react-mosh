import config from '../config.json';
import { getGenres } from './genreService';
import http from './httpService.js';

export async function getMovies() {
  const response = await http.get(config.apiEndPointMovies);
  return response.data;
}

export async function getMovie(movieId) {
  const response = http.get(config.apiEndPointMovies + '/' + movieId);
  return (await response).data;
}
export async function deleteMovie(movieId) {
  return http.delete(config.apiEndPointMovies + '/' + movieId);
}

export async function saveMovie(movie) {
  if (movie._id) {
    const body = {
      ...movie,
    };
    delete body._id;
    return await http.put(config.apiEndPointMovies + '/' + movie._id, body);
  }

  return http.post(config.apiEndPointMovies, movie);
  // handleAdd = async () => {
  //   const obj = {
  //     title: 'a',
  //     body: 'b',
  //   };
  //   const { data: post } = await http.post(config.apiEndPoint, obj);
  //   const posts = [post, ...this.state.posts];
  //   this.setState({ posts });
  // };
}
