import React from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import { Grid } from '@mui/material';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const MonthYear = ['Aug 2023', 'Sept 2023', 'Oct 2023'];
const Year = [2023, 2022, 2021];
const Months = ['January', 'Feburary', 'March'];

const Month = () => {
  return (
    <>
      <br />
      <Box marginLeft={2} marginRight={0} boxSizing={'border-box'}>
        <Typography style={{ fontWeight: 'bold' }} gutterBottom>
          Month:
        </Typography>
        <Grid container spacing={0} marginLeft={1} marginTop={0.5}>
          {/* 3 Months Part  */}
          <Grid item md={4} xs={12} sm={12} marginBottom={1}>
            <Box
              paddingTop={1}
              marginRight={0}
              display={'flex'}
              flexDirection={'row'}
            >
              {MonthYear.map((row) => {
                return (
                  <>
                    <Card
                      sx={{
                        minWidth: 110,
                        marginRight: 1,
                        marginLeft: { sm: '5%' },
                      }}
                    >
                      <CardMedia
                        sx={{ height: 25, backgroundColor: '#171D8F' }}
                      />
                      <CardContent>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          align="center"
                        >
                          {row}
                        </Typography>
                      </CardContent>
                    </Card>
                  </>
                );
              })}
            </Box>
          </Grid>

          {/* OR PART */}
          <Grid item md={4} xs={8} sm={7} marginBottom={1}>
            <Box
              sx={{ height: 80 }}
              paddingTop={5}
              borderRadius={2}
              marginLefht={2}
            >
              <Typography
                variant="h6"
                align="center"
                top={7}
                sx={{ fontWeight: 'bold' }}
              >
                OR
              </Typography>
            </Box>
          </Grid>

          {/* Month PART */}
          <Grid item md={4} xs={12} sm={12} marginBottom={1}>
            <Box
              sx={{ height: 40 }}
              paddingTop={3}
              display={'flex'}
              flexDirection={'row'}
              marginRight={0}
            >
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Year</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                  style={{ backgroundColor: '', width: '80%' }}
                >
                  {Year.map((row) => {
                    return <MenuItem value={row}>{row}</MenuItem>;
                  })}
                </Select>
              </FormControl>

              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Month</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                  style={{ backgroundColor: '', width: '90%' }}
                >
                  {Months.map((row) => {
                    return <MenuItem value={row}>{row}</MenuItem>;
                  })}
                </Select>
              </FormControl>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Month;
