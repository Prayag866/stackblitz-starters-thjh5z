import React from 'react';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { useState } from 'react';
import CurrencyFrancIcon from '@mui/icons-material/CurrencyFranc';
import {
  Button,
  CardActionArea,
  CardActions,
  Container,
  Grid,
} from '@mui/material';

const a = [
  {
    icon: <CurrencyFrancIcon />,
    name: 'Exchange',
  },
  {
    icon: <CurrencyFrancIcon />,
    name: 'No-Exchange',
  },
  {
    icon: <CurrencyFrancIcon />,
    name: 'Addtional Budget',
  },
  {
    icon: <CurrencyFrancIcon />,
    name: 'Addtional Budget',
  },
  {
    icon: <CurrencyFrancIcon />,
    name: 'Addtional Budget',
  },
];

const b = { border: '8px dotted grey' };

const Scenario = () => {
  const [select, setSelect] = useState({});
  const prayag = (e) => {
    console.log(e.target.id);
    setSelect({ ...select, [e.target.id]: !select[e.target.id] });
    console.log(select);
  };

  return (
    <>
      <br />
      <Box marginLeft={2} marginRight={6}>
        <Typography style={{ fontWeight: 'bold' }} gutterBottom>
          Scenario:
        </Typography>
        <br />
        <Grid container spacing={2} marginLeft={1}>
          {a.map((note) => {
            return (
              <Grid item md={2} xs={6} sm={3}>
                <Box
                  sx={select[note.name] ? b : null}
                  height={'100%'}
                  border={'1.5px solid grey'}
                  borderRadius={'4%'}
                  id={note.name}
                  onClick={prayag}
                >
                  <CurrencyFrancIcon
                    style={{
                      height: '80%',
                      width: '50%',
                      display: 'block',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                    }}
                    onClick={prayag}
                  />
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    paddingBottom={1.5}
                    align="center"
                    onClick={prayag}
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
export default Scenario;
