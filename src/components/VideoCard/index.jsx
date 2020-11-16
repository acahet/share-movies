import React, { forwardRef } from 'react';
import TextTruncate from 'react-text-truncate';
import { ThumbUpAltSharp } from '@material-ui/icons';

import './styles.css';

const base_url = 'https://image.tmdb.org/t/p/original/';

const VideoCard = forwardRef(({ movie }, ref) => (
	<div ref={ref} className="videoCard">
		<img src={`${base_url}${movie.backdrop_path || movie.poster_path}`} alt="movie poster" />
		<TextTruncate
			line={2}
			element="span"
			truncateText="..."
			textTruncateChild={
				<a style={{ textDecoration: 'none', color: 'white' }} href="/">
					<strong>View More</strong>
				</a>
			}
			text={movie.overview}
		/>
		<h2>{movie.title || movie.original_name || movie.name}</h2>

		<p className="videoCard__stats">
			{movie.release_date || movie.first_air_date} •
			<ThumbUpAltSharp /> •{movie.vote_count}
		</p>
	</div>
));

export default VideoCard;
