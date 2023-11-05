import axios from 'axios';
import { useState, useEffect } from 'react';

function PexelPhoto({ query }) {
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    if (!query) return;

    const fetchPhotos = async () => {
      try {
        const response = await axios.get('https://api.pexels.com/v1/search', {
          headers: {
            Authorization: 'VK9JDtB0RrynjxJsKXJ1KXF7x0lyfjCcvMcW5400VyLsJVObjYflfj87' // Replace with your Pexels API key
          },
          params: {
            query: query,
            per_page: 1
          }
        });

        if (response.data.photos.length > 0) {
          setPhoto(response.data.photos[0].src.original); // Set the first photo's URL
        }
      } catch (error) {
        console.error('Error fetching photo from Pexels:', error);
      }
    };

    fetchPhotos();
  }, [query]); // The effect runs whenever the query changes

  if (!photo) {
    return <div>Loading...</div>;
  }

  return (
    <div className=' h-64 flex overflow-y-hidden justify-center items-center bg-gray-200'>
    <img src={photo} alt={query} className="object-cover w-full h-full"  />
    </div>)
  ;
}

export default PexelPhoto;
