import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect}) => {
	return (
		<div className="ui relaxed divided list six wide column">
			{videos.map(video => (
				<VideoItem onVideoSelect={onVideoSelect} key={video.id.videoId} video={video} />
			))}
		</div>
	);
};

export default VideoList;
