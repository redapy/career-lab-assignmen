const ImageDetailsPage = ({ imageId, setSelectedArt }) => {
	return (
		<div>
			<button onClick={() => setSelectedArt(null)}>
				Go back to the list of artworks
			</button>
			<img
				alt="artwork"
				src={`https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`}
			/>
		</div>
	);
};

export default ImageDetailsPage;
