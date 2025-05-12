import React from 'react';
import { Box, Typography } from '@mui/material';
import dcBatmanPower from '../assets/dcBatmanPower.jpg';

const BatmanPowers = () => (
  <Box className="paragraphContainer">
    <img src={dcBatmanPower} alt="dcBatmanPower" className="dcBatmanPower" />
    <Box>
      <Typography variant="h4" style={{ fontFamily: 'Impact, sans-serif' }}>
        BATMAN'S POWER AND ABILITIES
      </Typography>
      <Typography component="p" sx={{ fontSize: 17.5 }}>
        Batman does not have any metahuman abilities. Instead, he relies on his sharp mind and disciplined body, 
        as well as his extensive combat and detective training. 
        A master of virtually every form of martial arts, a brilliant tactician and a genius-level forensic scientist, 
        Bruce also has access to his family’s fortune...<br/><br/>
        Housed in the Batcave beneath Wayne Manor is an armada of specialized Batmobiles and Batplanes, 
        troves of weaponry and armour and the Batcomputer, a supercomputer that links Bruce’s technology across the globe...<br/><br/>
        Armed with a utility belt full of Batarangs, a Batsuit loaded with cutting-edge technology and his own hair-trigger reflexes, 
        Batman is ready to strike fear into the hearts of criminals everywhere.
      </Typography>
    </Box>
  </Box>
);
export default BatmanPowers;
