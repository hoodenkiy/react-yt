import React from 'react';

const VideoDetail = ({ video }) => {
	if (!video) {
		return <div>Loading...</div>;
	} else {
		return (
			<div className="ui segment">
				<div className="ui embed">
					<iframe
						src={`https://www.youtube.com/embed/${video.id.videoId}`}
						title={video.snippet.title}
						frameBorder="0"
						allow="autoplay; encrypted-media"
						allowFullScreen
					/>
				</div>

				<h4 className="ua header">{video.snippet.title}</h4>
				<p>{video.snippet.description}</p>
			</div>
		);
	}
};

export default VideoDetail;
