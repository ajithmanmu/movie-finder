import fetch from 'isomorphic-fetch';
const MOVIE_DB_API_KEY='36d6a5c3a0e708cd8b537e54dfaee4b1';
const YOUTUBE_AP_KEY='AIzaSyA1Hs44rqAYAV_usSvkU0rem09HS0NEJOI';
const MOVIE_DB_BASE_URL = 'https://api.themoviedb.org/3/';
const YOUTUBE_API_BASE_URL='https://www.googleapis.com/youtube/v3/';

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
    return await fetch(`${MOVIE_DB_BASE_URL}discover/movie?api_key=${MOVIE_DB_API_KEY}`).then(parseRequest);
};

export const searchMovies = async (text) => {
    return await fetch(`${MOVIE_DB_BASE_URL}search/movie?api_key=${MOVIE_DB_API_KEY}&query=${text}`).then(parseRequest);
};

export const getYoutubeList = async (filterText) => {
  return await fetch(`${YOUTUBE_API_BASE_URL}search/?key=${YOUTUBE_AP_KEY}&q=${filterText}&part=snippet&orderby=viewCount&maxResults=1`).then(parseRequest);
};

export const getYoutubeVideo = async (videoId) => {
  return await fetch(`${YOUTUBE_API_BASE_URL}videos/?key=${YOUTUBE_AP_KEY}&id=${videoId}&part=snippet&orderby=viewCount&max-results=1`).then(parseRequest);
};
