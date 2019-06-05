
const BASE_IMG_URL = 'http://image.tmdb.org/t/p/'  //TODO: Get this info from https://api.themoviedb.org/3/configuration?api_key=36d6a5c3a0e708cd8b537e54dfaee4b1

export const generatePosterPath = (size, filePath) =>{
    return `${BASE_IMG_URL}${size}/${filePath}`;
};
