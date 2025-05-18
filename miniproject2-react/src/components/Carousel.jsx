import React, { useState, useEffect } from 'react';
import { Box, IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const Carousel = ({ imageUrls }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % imageUrls.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [imageUrls.length]);

  return (
    <Box sx={{ position: 'relative', height: 'auto', width: '100%' }}>
      <Box
        component="img"
        src={imageUrls[index]}
        alt={`carousel-${index}`}
        sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <IconButton 
        onClick={() => setIndex((index - 1 + imageUrls.length) % imageUrls.length)} 
        sx={{ position: 'absolute', top: '50%', left: 16, color: 'limegreen' }}
      >
        <ArrowBackIos />
      </IconButton>
      <IconButton 
        onClick={() => setIndex((index + 1) % imageUrls.length)} 
        sx={{ position: 'absolute', top: '50%', right: 16, color: 'limegreen' }}
      >
        <ArrowForwardIos />
      </IconButton>
    </Box>
  );
};

export default Carousel;
