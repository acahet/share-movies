import React from 'react';
import './styles.css';
import HomeIcon from '@material-ui/icons/Home';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';

function Header() {
	return (
		<header className="header">
			<img src="https://fontmeme.com/permalink/201106/6fc8dadc68de3aec91790cca0b65572c.png" alt="" />
			<div className="header__icons">
				<div className="header__icon header__icon--active">
					<HomeIcon />
					<p>Home</p>
				</div>
				<div className="header__icon">
					<FlashOnIcon />
					<p>Trending</p>
				</div>
				<div className="header__icon">
					<LiveTvIcon />
					<p>Verified</p>
				</div>
				<div className="header__icon">
					<VideoLibraryIcon />
					<p>Collections</p>
				</div>
				<div className="header__icon">
					<SearchIcon />
					<p>Search</p>
				</div>
				<div className="header__icon">
					<PersonOutlineIcon />
					<p>Account</p>
				</div>
			</div>
		</header>
	);
}

export default Header;
