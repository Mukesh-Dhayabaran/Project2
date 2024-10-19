import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Blocks from './mainblock/block';
import { Box } from '@mui/material';

// const back={
//   backgroundColor:'#F5F7FA',
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Box sx={{...back}}> */}
      <Blocks/>
    {/* </Box> */}
  </React.StrictMode>
);
  
reportWebVitals();
