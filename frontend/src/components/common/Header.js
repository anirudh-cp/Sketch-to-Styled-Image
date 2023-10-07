import React, {  } from 'react'
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import './../../assets/styles/index.css'
import CustomTheme from '../../assets/themes/CustomTheme';


export default function ButtonAppBar() {

  return (

    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={CustomTheme}>
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, }}>
          <Toolbar >
            <Typography variant="h6" component="div">Sketch to Styled Image</Typography>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
      <Toolbar />
    </Box>
  );
}
