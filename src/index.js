import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Main from './navbar/main';
import TopBar from './Topbar/Topbar.jsx';
import reportWebVitals from './reportWebVitals';
import Blocks from './mainblock/block';
import { Box, Grid } from '@mui/material';

// const back={
//   backgroundColor:'#F5F7FA',
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TopBar/>
    <Main />
    {/* <Box sx={{...back}}> */}
    <Grid container>
    <Grid item lg={12}>
      <Blocks/>
    </Grid>
    </Grid>
    {/* </Box> */}
  </React.StrictMode>
);
  
reportWebVitals();
