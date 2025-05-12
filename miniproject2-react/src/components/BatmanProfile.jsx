import React from 'react';
import { Box, Typography } from '@mui/material';
import dcBatman from '../assets/dcBatman.jpg';

const BatmanProfile = () => (
  <Box className="paragraphContainer">
    <img src={dcBatman} alt="dcBatman" className="dcBatman" />
    <Box>
      <Typography variant="h2" sx={{ fontFamily: 'Impact, sans-serif' }}>BATMAN</Typography>
      <Typography variant="h4" sx={{ fontFamily: 'Impact, sans-serif' }}>OFFICIAL CHARACTER PROFILE</Typography>
      <Typography component="p" sx={{ fontSize: 17.5 }}>
        One of the most iconic fictional characters in the world, Batman has dedicated his life to an endless crusade, 
        a war on all criminals in the name of his murdered parents, who were taken from him when he was just a child. 
        Since that tragic night, he has trained his body and mind to near physical perfection to be a self-made Super Hero. 
        He's developed an arsenal of technology that would put most armies to shame. 
        And he's assembled teams of his fellow DC Super Heroes, like the Justice League, the Outsiders and Batman Incorporated.<br/><br/>
        A playboy billionaire by day, Bruce Wayne’s double life affords him the comfort of a life without financial worry, 
        a loyal butler-turned-guardian and the perfect base of operations in the ancient network of caves beneath his family’s sprawling estate. 
        By night, however, he sheds all pretense, dons his iconic scalloped cape and pointed cowl and takes to the shadowy streets, skies and rooftops of Gotham City. <br/><br/>
        He is vengeance. He is the night. He is Batman. <br/><br/>
      </Typography>
    </Box>
  </Box>
);
export default BatmanProfile;
