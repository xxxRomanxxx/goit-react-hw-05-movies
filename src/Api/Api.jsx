import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3/'
const API_KEY = '1fe2d1e6f674f8fb835fda3144fa5e60';

export const fetchGetTraiding = async () => {
        const response = await axios.get('trending/movie/day', {
            params: {
                api_key: API_KEY,
            }
        });
    
        return response.data.results;
    };

export const fetchMovieDetail = async (movieId) => {
    const response = await axios.get(`movie/${movieId}`, {
        params: {
            api_key: API_KEY,
        }
    });
    return response.data;
}

export const fetchMoviesSearchQuery = async (searchQuery) => {
	const response = await axios.get('search/movie', {
		params: {
			api_key: API_KEY,
			query: searchQuery,
			page: 1,
		}
	});

	return response.data.results;
};

export const fetchMovieCast = async (movie_id) => {
	const response = await axios.get(`movie/${movie_id}/credits`, {
		params: {
			api_key: API_KEY,
		}
	});

	return response.data.cast;
};

export const fetchMovieRewiews = async (movie_id) => {
	const response = await axios.get(`movie/${movie_id}/reviews`, {
		params: {
			api_key: API_KEY,
			page: 1,
		}
	});

	return response.data.results;
}