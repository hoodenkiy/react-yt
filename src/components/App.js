import React, { useState, useEffect } from 'react';
import useVideos from '../hooks/useVideos';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const App = () => {
	const [videos, search] = useVideos('radiohead');
	const [selectedVideo, setSelectedVideo] = useState(null);

	useEffect(() => {
		setSelectedVideo(videos[0]);
	}, [videos]);

	return (
		<div className="ui container">
			<SearchBar onSubmit={search} />
			<div className="ui grid">
				<div className="ui row">
					<div className="eleven wide column">
						<VideoDetail video={selectedVideo} />
					</div>
					<div className="five wide column">
						<VideoList
							videos={videos}
							onVideoSelect={setSelectedVideo}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
