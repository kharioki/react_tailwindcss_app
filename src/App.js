import React, { useState, useEffect } from 'react';

import ImageCard from './components/ImageCard';
import Spinner from './components/Spinner';
import ImageSearch from './components/ImageSearch';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${searchTerm}&image_type=photo&pretty=true`
    )
      .then(res => res.json())
      .then(data => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, [searchTerm]);

  return (
    <div className="container mx-auto">
      <ImageSearch searchText={text => setSearchTerm(text)} />

      {!isLoading && images.length === 0 && (
        <h1 className="text-5xl text-center mx-auto mt-32 text-gray-400">No images found for <strong className="text-gray-800">{searchTerm}</strong>!!</h1>
      )}

      {isLoading ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {images.map(image => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
