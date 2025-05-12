import React, { useState, useEffect } from 'react';
import { Box, IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

import img1 from '../assets/BatmanArkhamAsylum.jpg';
import img2 from '../assets/BatmanArkhamCity.jpg';
import img3 from '../assets/BatmanArkhamOrigins.jpg';
import img4 from '../assets/BatmanArkhamKnight.jpg';
import img5 from '../assets/GothamKnights.jpg';

const images = [img1, img2, img3, img4, img5];

const GamesCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box sx={{ position: 'relative', height: 'auto', width: '100%' }}>
      <Box
        component="img"
        src={images[index]}
        alt={`carousel-${index}`}
        sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <IconButton onClick={() => setIndex((index - 1 + images.length) % images.length)} sx={{ position: 'absolute', top: '50%', left: 16, color: 'limegreen' }}>
        <ArrowBackIos />
      </IconButton>
      <IconButton onClick={() => setIndex((index + 1) % images.length)} sx={{ position: 'absolute', top: '50%', right: 16, color: 'limegreen' }}>
        <ArrowForwardIos />
      </IconButton>
    </Box>
  );
};

export default GamesCarousel;
