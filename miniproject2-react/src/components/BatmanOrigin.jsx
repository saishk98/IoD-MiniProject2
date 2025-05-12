import React from 'react';
import { Box, Typography } from '@mui/material';
import dcBatmanOrigins from '../assets/dcBatmanOrigins.jpg';

const BatmanOrigin = () => (
  <Box className="paragraphContainer">
    <Box>
      <img src={dcBatmanOrigins} alt="dcBatmanOrigins" className="dcBatmanOrigins" />
      <Typography variant="h4" sx={{ fontFamily: 'Impact, sans-serif' }}>BATMAN'S ORIGIN</Typography>
      <Typography component="p" sx={{ fontSize: 17.5 }}>
        Young Bruce Wayne was a child of privilege, raised under the watchful eye of his parents, 
        Thomas and Martha, in the upper echelons of Gotham City’s high society. 
        Far removed from the city’s slow descent into corruption and chaos, 
        Bruce enjoyed a carefree childhood with the promise of a bright and easy future... <br/><br/>
        But fate intervened before that future could ever become a reality. 
        One night, after the Waynes exited a movie theater in one of Gotham’s rougher neighborhoods, 
        they were caught in a mugging that left both Thomas and Martha shot dead before Bruce’s eyes. 
        Suddenly orphaned, Bruce was left in the care of his family’s butler, Alfred Pennyworth...<br/><br/>
        Bruce slowly turned his grief into fuel for a lifelong obsession. 
        Instead of succumbing to self-destruction, he swore an oath to “war on all criminals” for the rest of his life, 
        to prevent the tragedy that occurred to him from happening to anyone else in Gotham.
        Inspired by the bats that infested his family’s property, 
        and his lifelong fear of them, he took on the identity of Batman, 
        the hero that Gotham—and the rest of the DC universe—needs. 
        Summoned to action by the glow of the Bat-Signal, 
        a floodlight used by his ally Commissioner Jim Gordon of the Gotham City Police Department, 
        Batman watches over his domain as a vigilant protector and stalwart Dark Knight.
         <br/><br/>
      </Typography>
    </Box>
  </Box>
);
export default BatmanOrigin;
