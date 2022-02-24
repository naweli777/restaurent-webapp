import * as React from 'react';
import {AppBar,Box,Toolbar,Typography,Button} from '@material-ui/core';


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Logo
          </Typography>
          <div className='nav_elements'>
          <Button color="inherit"className="nav_buttons">Home</Button>
          <Button color="inherit"className="nav_buttons">About</Button>
          <Button color="inherit"className="nav_buttons">Menu</Button>
          <Button color="inherit"className="nav_buttons">Gallery</Button>
          <Button color="inherit"className="nav_buttons">Address</Button>

          </div>

          

        </Toolbar>
      </AppBar>
    </Box>
  );
}
