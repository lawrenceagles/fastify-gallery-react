import 'react-image-gallery/styles/css/image-gallery.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImageGallery from 'react-image-gallery';

const Gallery = () => {
	const [ images, setImages ] = useState([]);

	useEffect(() => {
		const fetchImages = async () => {
			const { data } = await axios.get('https://google-photos-album-demo2.glitch.me/4eXXxxG3rYwQVf948');
			if (data.length > 0) {
				setImages(
					data.map((url) => ({
						original: `${url}=w1024`,
						thumbnail: `${url}=w100`
					}))
				);
			}
		};
		fetchImages();
	}, []);

	return images ? <ImageGallery items={images} /> : null;
};

export default Gallery;
