import fetch from 'isomorphic-fetch';
const MOVIE_DB_API_KEY='36d6a5c3a0e708cd8b537e54dfaee4b1';
const BASE_URL = 'https://api.themoviedb.org/3/';

const parseRequest = (resp) => new Promise(async (resolve, reject) => {
    const contentType = resp.headers.get('Content-Type');
    const body = (contentType.indexOf('json') > -1) ?
      await resp.json() : await resp.text();
  
    if (resp.status > 200) {
      const status = resp.status;
      const errResponse = {
        ...body,
        status
      };
  
      return reject(errResponse);
    }
  
    return resolve(body);
  });

export const getMovies = async () => {
    return await fetch(`${BASE_URL}discover/movie?api_key=${MOVIE_DB_API_KEY}`).then(parseRequest);
};

export const searchMovies = async (text) => {
    return await fetch(`${BASE_URL}search/movie?api_key=${MOVIE_DB_API_KEY}&query=${text}`).then(parseRequest);
};
