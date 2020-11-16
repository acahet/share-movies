import React, { useEffect, useState } from 'react';
import FlipMove from 'react-flip-move';

import VideoCard from '../VideoCard';
import axios from '../../api/axios';
import './styles.css';
const Results = ({ selectedOption }) => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const response = await axios.get(selectedOption);
			
			setMovies(response.data.results);
			return response;
		}
		fetchData();
	}, [selectedOption]);

	return (
		<div className="results">
			<FlipMove>
				{movies.map((movie) => (
					<div key={movie.id}>
						<VideoCard movie={movie} />
					</div>
				))}
			</FlipMove>
		</div>
	);
};

export default Results;
