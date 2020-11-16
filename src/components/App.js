import { useState } from 'react';
import requests from '../api/requests';
import './App.css';
import Header from './Header';
import NavBar from './Nav';
import Results from './Results';

function App() {
	const [selectedOption, setSelectedOption] = useState(requests.fetchActionMovies);
	return (
		<>
			<div className="app">
				<Header />
			</div>
			<div>
				<NavBar setSelectedOption={setSelectedOption} />
				<Results selectedOption={selectedOption} />
			</div>
		</>
	);
}

export default App;
