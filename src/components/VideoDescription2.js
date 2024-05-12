import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from './Product';

const VideoDescription2 = () => {
  const { category, songName } = useParams();
  const [apiData, setApiData] = useState([]);
  const [filtered, setFiltered] = useState(null);
  const [youtubeId, setYoutubeId] = useState('');

  const fetchApi = async () => {
    try {
      const response = await fetch(`https://shreehansarts.com/api/apis/musicbycategory.php?category=${category}`);
      const jsonData = await response.json();
      setApiData(jsonData);
    } catch (error) {
      console.error('Error fetching API data:', error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, [category, songName,fetchApi]);

  useEffect(() => {
    // Filter the data when apiData or songName changes
    const filteredData = apiData.filter(elem => elem.slug === songName);
    setFiltered(filteredData);
  }, [apiData, songName]);

  useEffect(() => {
    // Extract YouTube video ID from the first element of filtered
    if (filtered && filtered.length > 0) {
      const url = filtered[0].url;
      let videoId = '';

      // Extract video ID based on different YouTube URL formats
      if (url.includes('youtube.com/watch?v=')) {
        videoId = url.split('v=')[1];
      } else if (url.includes('youtu.be/')) {
        videoId = url.split('youtu.be/')[1];
      }

      setYoutubeId(videoId);
    }
  }, [filtered]);

  console.log(filtered);
  console.log(apiData);

  return (
    <>
 <Product/>

      <h2>Category: {category} and Video Song: {songName}</h2>
      <p>API Data Length: {apiData.length}</p>
      {filtered && filtered.length > 0 && (
        <>
          <h1>Filtered Data URL: {filtered[0].url}</h1>
          {youtubeId && (
            <iframe src={`https://www.youtube.com/embed/${youtubeId}`} title="YouTube video" allowFullScreen></iframe>
          )}
        </>
      )}
    </>
  );
};

export default VideoDescription2;

