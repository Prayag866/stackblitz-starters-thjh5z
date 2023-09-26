import React from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { useState } from 'react';
import {
  Button,
  CardActionArea,
  CardActions,
  Container,
  Grid,
} from '@mui/material';

const a = [
  {
    logo1: './images/map.jpg',
    name: 'North',
  },
  {
    logo1: './images/map.jpg',
    name: 'East',
  },
  {
    logo1: './images/map.jpg',
    name: 'West',
  },
  {
    logo1: './images/map.jpg',
    name: 'South',
  },
  {
    logo1: './images/map.jpg',
    name: 'NorthEast',
  },
  {
    logo1: './images/map.jpg',
    name: 'NorthWest',
  },
];
const b = { border: '2.5px solid black', boxShadow: '2px 4px grey' };
const Zone = () => {
  const [clicks, setClicks] = useState({});
  const pg = (e) => {
    setClicks({ ...clicks, [e.target.id]: !clicks[e.target.id] });
  };
  return (
    <>
      <br />
      <Box marginLeft={2} marginRight={6} boxSizing={'border-box'}>
        <Typography style={{ fontWeight: 'bold' }}>Zone:</Typography>
        <Grid
          container
          style={{ marginTop: '10px' }}
          spacing={1}
          marginLeft={1}
        >
          {a.map((note) => {
            return (
              <Grid item md={1.5} xs={6} sm={3}>
                <Box
                  sx={clicks[note.name] ? b : null}
                  height={'100px'}
                  id={note.name}
                  onClick={pg}
                  border={'1.5px solid grey'}
                  borderRadius={'10%'}
                >
                  <img
                    src="https://images.freeimages.com/images/large-previews/a67/india-outline-map-1158103.jpg"
                    // src={map}
                    alt="No Image"
                    style={{
                      height: '70%',
                      width: '40%',
                      display: 'block',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      marginTop: '4%',
                    }}
                    id={note.name}
                  />
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    padding={0.5}
                    align="center"
                    paddingBottom={4}
                    id={note.name}
                  >
                    {note.name}
                  </Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};
export default Zone;
