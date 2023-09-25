
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

import {Container,Grid ,Button} from '@mui/material';
import Table from '@mui/material/Table';

import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
  

const Sales=()=>
{
    return(
        <>
        <br/>
        <Box marginLeft={2} marginRight={6} boxSizing={"border-box"}>
            <Typography style={{fontWeight: "bold"}} gutterBottom>Sales:</Typography>
                <Grid container spacing={1} marginLeft={1}  marginTop={0.5} > 
                <Grid item md={5} xs={12} sm={5} marginBottom={1} ma >
            <Box sx={{height:150,border:"2px solid black"}}  paddingTop={1} borderRadius={2} marginRight={8}>
            <TableContainer >
       <Table  aria-label="simple table"> 
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            {/* <TableCell align="right">Calories</TableCell> */}
            
          </TableRow>
        </TableHead>
        {/* <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody> */}
      </Table> 
    </TableContainer>
                </Box>           
            </Grid>
            <Grid  item md={5} xs={6} sm={5} marginBottom={1}>
                {/* <Paper>helllo</Paper> */}
            <Box sx={{height:150,border:"2px dashed grey"}} paddingTop={1} borderRadius={2} >
                <Button type="file">
                <input type="file" multiple style={{border:"none",backgroundColor:"red"}} hidden/>
                    Drag files here or click to upload
                </Button>
                          </Box>         
            </Grid>
                </Grid>
    
        
        </Box>
        </>
    )
};
export default Sales;
