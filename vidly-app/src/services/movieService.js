import config from '../config.json';
import http from './httpService.js';

export async function getMovies() {
  const response = await http.get(config.apiEndPointMovies);
  return response.data;
}

export async function getMovie(id) {
  const movies = await getMovies();
  return movies.find(m => m._id === id);
}
export async function deleteMovie(id) {
  const movies = await getMovies();

  let movieInDb = movies.find(m => m._id === id);
  movies.splice(movies.indexOf(movieInDb), 1);
  return movieInDb;
}
