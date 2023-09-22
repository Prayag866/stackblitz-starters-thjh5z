import React from "react";
import { Typography,Button,ButtonBase} from '@mui/material';

import Box from '@mui/material/Box';

import { Container, Grid } from '@mui/material';
const Channel = () => {
    const [open, setOpen] = React.useState(false);
    const pg=()=>{
        console.log("heiii");
    }
    return (
        <>
            <br />
            
            <Box marginLeft={2} marginRight={6} boxSizing={"border-box"}>
                <Typography style={{ fontWeight: "bold" }} gutterBottom>Channel:</Typography>
                <Grid container spacing={1} marginLeft={1} marginTop={1}>

                    <Grid item md={3} xs={3} sm={3} marginBottom={1} marginRight={"20%"} id="Grid1">
                        
                        <Box style={{ height: "20vh", border: "2px solid black" }} paddingTop={1} borderRadius={4} click={pg}>
                            <Typography variant="body2" color="textSecondary" align="center" marginTop={4}>
                                Suzuki
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item md={3} xs={3} sm={3} marginBottom={1} id="Grid2">
                        <Box style={{ height: "20vh", border: "2px solid black" }} paddingTop={1} borderRadius={4}>
                            <Typography variant="body2" color="textSecondary" align="center" marginTop={4}>
                                Nexa
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
};
export default Channel;
