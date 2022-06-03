import './App.css';

import { searchArtworks } from '../utils/api';
import { SearchForm } from './SearchForm';
import { Footer } from './Footer';
import { useState } from 'react';
import ArtWorkList from './ArtWorkList';
import ImageDetailsPage from './ImageDetailsPage';

export function App() {
	const [data, setData] = useState(null);
	const [selectedArt, setSelectedArt] = useState(null);
	function onSearchSubmit(query) {
		// Search for the users's query.
		// TODO: render the results, instead of logging them to the console.
		// NOTE: `searchArtworks` currently returns local data, so that we
		// don't make too many requests to the API! Once we've built out
		// our UI, we need to make real requests!
		// @see: ./src/uitls/api.js
		searchArtworks(query).then((json) => {
			setData(json.data);
		});
	}

	return (
		<div className="App">
			<h1>TCL Career Lab Art Finder</h1>
			{!selectedArt && <SearchForm onSearchSubmit={onSearchSubmit} />}
			{data && !selectedArt && (
				<ArtWorkList data={data} setSelectedArt={setSelectedArt} />
			)}
			{selectedArt && (
				<ImageDetailsPage
					imageId={selectedArt.image_id}
					setSelectedArt={setSelectedArt}
				/>
			)}
			<Footer />
		</div>
	);
}
