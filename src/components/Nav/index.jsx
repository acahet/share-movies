import React from 'react';
import requests from '../../api/requests';
import './styles.css';
const NavBar = ({ setSelectedOption }) => {
	return (
		<div className="nav">
			{/* <h2 onClick={() => setSelectedOption(requests.fetchTrending)}>Trending</h2> */}
			<h2 onClick={() => setSelectedOption(requests.fetchTopRated)}>Top Rated</h2>
			<h2 onClick={() => setSelectedOption(requests.fetchActionMovies)}>Action</h2>
			<h2 onClick={() => setSelectedOption(requests.fetchComedyMovies)}>Comedy</h2>
			<h2 onClick={() => setSelectedOption(requests.fetchHorrorMovies)}>Horror</h2>
			<h2 onClick={() => setSelectedOption(requests.fetchRomanceMovie)}>Romance</h2>
			<h2 onClick={() => setSelectedOption(requests.fetchMystery)}>Mystery</h2>
			<h2 onClick={() => setSelectedOption(requests.fetchSciFi)}>Sci-fi</h2>
			<h2 onClick={() => setSelectedOption(requests.fetchWestern)}>Western</h2>
			<h2 onClick={() => setSelectedOption(requests.fetchAnimation)}>Animation</h2>
			<h2 onClick={() => setSelectedOption(requests.fetchTV)}>TV</h2>
		</div>
	);
};

export default NavBar;
