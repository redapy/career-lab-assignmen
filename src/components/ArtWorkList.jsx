const ArtWorkList = ({ data, setSelectedArt }) => {
	return (
		<ul>
			{data.map((artWork) => (
				<li key={artWork.id}>
					<button onClick={() => setSelectedArt(artWork)}>
						{artWork.title}
						<span>created by: {artWork.artist_title}</span>
					</button>
				</li>
			))}
		</ul>
	);
};

export default ArtWorkList;
