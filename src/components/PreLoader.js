// src/components/Preloader.js
import React from 'react';
import styled from 'styled-components';
import preloaderImage from '../assets/images/loader.gif'; // Update with your preloader image path

const Preloader = () => {
  return (
    <PreloaderWrapper>
      <img src={preloaderImage} alt="Loading..." />
    </PreloaderWrapper>
  );
};

export default Preloader;

const PreloaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8); // Optional: Add background color or opacity
  z-index: 9999; // Ensure it appears above all other content
`;
