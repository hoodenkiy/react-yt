import { useState, useEffect } from 'react';
import axios from '../api/youtube';

const useVideos = defaultTerm => {
	const [videos, setVideos] = useState([]);

	const search = async term => {
		try {
			const data = await axios.get(term);
			setVideos(data.data.items);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		search(defaultTerm);
	}, [defaultTerm]);

	return [videos, search]
};

export default useVideos;
