import axios from 'axios';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3/search?q=',
	params: {
		key: 'AIzaSyDmgmgha4u14-he0nR65V8Kf5Pq8JWzBxM',
		part: 'snippet',
		type: 'video',
		maxResults: 5
	}
});
