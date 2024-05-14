import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BiDownArrowCircle } from "react-icons/bi";
import '../custom.css';

const VideoDescription2 = () => {
  const { category, songName } = useParams();
  const [apiData, setApiData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [youtubeId, setYoutubeId] = useState('');
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

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
  }, [category, songName]);

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
      document.title = filtered[0].name;
    }
  }, [filtered]);

  console.log(filtered);
  console.log(apiData);

  return (
    <>
      <section className='dark-screen'>
        <div className='container'>
          {filtered && filtered.length > 0 && (
            <div className="video-container">
              <iframe
                src={`https://www.youtube.com/embed/${youtubeId}`}
                title="YouTube video"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>

        <button onClick={handleClick} className='m-5'>
          {/* <BiDownArrowCircle /> */}
          show info
        </button>

        <br />
        <br />
        {toggle && filtered && filtered.length > 0 && (
          <>
            {filtered.map((elem) => (
              <section className='container' key={elem.id}>
                <div className='outer-div'>
                  <div className='outer-div-content'>
                    <ul>
                      <li>
                        <span>Label  :</span>
                        <span> {elem.label} </span>
                      </li>
                      <li>
                        <span>Producer  :</span>
                        <span>{elem.producer}</span>
                      </li>
                      <li>
                        <span>Singer :</span>
                        <span>{elem.singer}</span>
                      </li>
                      <li>
                        <span>Featuring :</span>
                        <span>{elem.featuring}</span>
                      </li>
                      <li>
                        <span>Lyrics  :</span>
                        <span>{elem.lyrics}</span>
                      </li>
                      <li>
                        <span>Music  :</span>
                        <span>{elem.music}</span>
                      </li>
                      <li>
                        <span>Director  :</span>
                        <span> {elem.director} </span>
                      </li>
                    </ul>
                  </div>
                  <div className='outer-div-content'>
                    <ul>
                      <li>
                        <span>Makeup  :</span>
                        <span>{elem.makeup}</span>
                      </li>
                      <li>
                        <span>Studio  :</span>
                        <span>{elem.studio}</span>
                      </li>
                      <li>
                        <span>Creative Head  :</span>
                        <span>{elem.creativeHead}</span>
                      </li>
                      <li>
                        <span>Editor  :</span>
                        <span>{elem.editor}</span>
                      </li>
                      <li>
                        <span>Camera  :</span>
                        <span>{elem.camera}</span>
                      </li>
                      <li>
                        <span>Choreographer  :</span>
                        <span>{elem.choreographer}</span>
                      </li>
                    </ul>
                  </div>
                  <div className='outer-div-content'>
                    <ul>
                      <li>
                        <span>Co-Producer  :</span>
                        <span>{elem.coproducer}</span>
                      </li>
                      <li>
                        <span>Line Producer  :</span>
                        <span>{elem.lineproducer}</span>
                      </li>
                      <li>
                        <span>Executive Producer  :</span>
                        <span>{elem.executiveproducer}</span>
                      </li>
                      <li>
                        <span>Writer  :</span>
                        <span>{elem.writer}</span>
                      </li>
                      <li>
                        <span>Mixing &amp; Mastering  :</span>
                        <span>{elem.mixingmastering}</span>
                      </li>
                      <li>
                        <span>Release Date :</span>
                        <span>{elem.date}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            ))}
          </>
        )}
      </section>
    </>
  );
};

export default VideoDescription2;
