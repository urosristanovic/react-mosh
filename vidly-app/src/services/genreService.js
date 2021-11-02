import config from '../config.json';
import http from './httpService.js';

export async function getGenres() {
  const response = await http.get(config.apiEndPointGenres);
  return response.data;
}
