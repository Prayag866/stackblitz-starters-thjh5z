import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
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
    name: 'N-North',
  },
  {
    logo1: './images/map.jpg',
    name: 'N-North',
  },
  {
    logo1: './images/map.jpg',
    name: 'N-North',
  },
  {
    logo1: './images/map.jpg',
    name: 'N-North',
  },
  {
    logo1: './images/map.jpg',
    name: 'N-North',
  },
  {
    logo1: './images/map.jpg',
    name: 'N-North',
  },
];

const Zone = () => {
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
                <div
                  style={{
                    height: '100%',
                    border: '1.5px solid grey',
                    borderRadius: '10%',
                  }}
                >
                  <img
                    // src={require('./components/map.jpg')}
                    alt="Not Image"
                    style={{
                      height: '70%',
                      width: '40%',
                      display: 'block',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      marginTop: '4%',
                    }}
                  />
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    padding={0.5}
                    align="center"
                    paddingBottom={4}
                  >
                    {note.name}
                  </Typography>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};
export default Zone;
