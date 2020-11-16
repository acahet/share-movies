/* eslint-disable import/no-anonymous-default-export */
const API_KEY = `${process.env.TMDB_SECRET_KEY}`;
const REQUEST_MOVE_BY_GENRE = `discover/movie?api_key=${API_KEY}&with_genres=`;

const ACTION_MOVIE = 28;
const COMEDY_MOVIE = 35;
const HORROR_MOVIE = 27;
const ROMANCE_MOVIE = 10749;
const MYSTERY_MOVIE = 9648;
const SCI_FI_MOVIE = 878;
const WESTERN_MOVIE = 37;
const ANIMATION = 16;
const TV = 10770;

export default {
	fetchTrending: `trending/tv/week?api_key=${API_KEY}`,
	fetchTopRated: `movie/top_rated?api_key=${API_KEY}&language=en-US`,
	fetchActionMovies: `${REQUEST_MOVE_BY_GENRE}${ACTION_MOVIE}`,
	fetchComedyMovies: `${REQUEST_MOVE_BY_GENRE}${COMEDY_MOVIE}`,
	fetchHorrorMovies: `${REQUEST_MOVE_BY_GENRE}${HORROR_MOVIE}`,
	fetchRomanceMovie: `${REQUEST_MOVE_BY_GENRE}${ROMANCE_MOVIE}`,
	fetchMystery: `${REQUEST_MOVE_BY_GENRE}${MYSTERY_MOVIE}`,
	fetchSciFi: `${REQUEST_MOVE_BY_GENRE}${SCI_FI_MOVIE}`,
	fetchWestern: `${REQUEST_MOVE_BY_GENRE}${WESTERN_MOVIE}`,
	fetchAnimation: `${REQUEST_MOVE_BY_GENRE}${ANIMATION}`,
	fetchTV: `${REQUEST_MOVE_BY_GENRE}${TV}`,
};
