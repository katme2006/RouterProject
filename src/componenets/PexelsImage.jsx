import axios from 'axios';
import { useState, useEffect } from "react";

function Photo() {

  const [imageUrl, setImageUrl] = useState('');


  useEffect(() => {

    const getImage = async () => {
      try {
        const response = await axios.get('https://api.unsplash.com/photos/random', {
          params: {
            client_id: 'ksLDkW3dtzfJh-N8xpvFqFenDddkRzHK_aB5Ew07koo',

          }
        });
        setImageUrl(response.data.urls.regular);
      } catch (error) {
        console.error("Error getting Image: ", error);
      }
    };

    getImage();

  },[]);

    return (
      <>
        <h1 className="text-blue-400">Photo</h1>
        {imageUrl ? <img src={imageUrl} alt="Random from Unsplash" /> : <p>Loading...</p>}

      </>
    );
  }

export default Photo;
