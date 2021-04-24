import 'react-image-gallery/styles/css/image-gallery.css';
import React, { useState, useEffect } from 'react';
import ImageGallery from 'react-image-gallery';
import axios from 'axios';
import ErrorMessage from './ErrorMessage';

const Gallery = () => {
	const [ images, setImages ] = useState(null);
	useEffect(() => {
		const fetchImages = async () => {
			const { data: { data } } = await axios.get(' http://127.0.0.1:5000/gallery');
			if (data.length > 0) {
				setImages(
					data.map((image) => ({
						original: `${image.url}`,
						thumbnail: `${image.url}`
					}))
				);
			}
		};
		fetchImages();
	}, []);

	console.log('image', images);
	return images ? <ImageGallery lazyLoad={true} items={images} /> : <ErrorMessage message={'No Image found!'} />;
};

export default Gallery;
