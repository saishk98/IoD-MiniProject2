import React from 'react';
import { Box, IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

import BatmanAnimatedSeries1 from '../assets/BatmanAnimatedSeries1.jpg';
import BatmanAnimatedSeries2 from '../assets/BatmanAnimatedSeries2.jpg';
import DK1 from '../assets/DK1.jpg';
import DK2 from '../assets/DK2.jpg';
import BatmanArkhamAsylum from '../assets/BatmanArkhamAsylum.jpg';
import BatmanArkhamCity from '../assets/BatmanArkhamCity.jpg';
import BatmanArkhamOrigins from '../assets/BatmanArkhamOrigins.jpg';
import BatmanArkhamKnight from '../assets/BatmanArkhamKnight.jpg';

const images = [BatmanAnimatedSeries1, BatmanAnimatedSeries2, DK1, DK2, BatmanArkhamAsylum, BatmanArkhamCity, BatmanArkhamOrigins, BatmanArkhamKnight];

const HomeCarousel = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
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

export default HomeCarousel;
