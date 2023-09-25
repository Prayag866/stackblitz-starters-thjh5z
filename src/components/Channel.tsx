import React from 'react';
import { Typography, Button, ButtonBase } from '@mui/material';

import Box from '@mui/material/Box';

import { Container, Grid } from '@mui/material';
const cd = { border: '4px dotted black' };
const Channel = () => {
  const [box1, setBox1] = React.useState(false);
  const [box2, setBox2] = React.useState(false);
  const pg = (e) => {
    setBox1(true);
    setBox2(false);
  };
  const pg1 = (e) => {
    setBox2(true);
    setBox1(false);
  };
  return (
    <>
      <br />
      <Box marginLeft={2} marginRight={6} boxSizing={'border-box'}>
        <Typography style={{ fontWeight: 'bold' }} gutterBottom>
          Channel:
        </Typography>
        <Grid container spacing={1} marginLeft={1} marginTop={1}>
          <Grid
            item
            md={3}
            xs={3}
            sm={3}
            marginBottom={1}
            marginRight={'20%'}
            id="Grid1"
            onClick={pg}
          >
            <Box
              style={box1 ? cd : null}
              border={'2px solid black'}
              height={'20vh'}
              paddingTop={1}
              borderRadius={4}
              click={pg}
            >
              <Typography
                variant="body2"
                color="textSecondary"
                align="center"
                marginTop={4}
              >
                Suzuki
              </Typography>
            </Box>
          </Grid>

          <Grid
            item
            md={3}
            xs={3}
            sm={3}
            marginBottom={1}
            id="Grid2"
            onClick={pg1}
          >
            <Box
              style={box2 ? cd : null}
              paddingTop={1}
              borderRadius={4}
              border={'2px solid black'}
              height={'20vh'}
            >
              <Typography
                variant="body2"
                color="textSecondary"
                align="center"
                marginTop={4}
              >
                Nexa
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Channel;
