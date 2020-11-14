import React, { useState } from 'react';
import Routes from './routes';
import {Switch,Paper, Button, createMuiTheme} from  '@material-ui/core';
import {ThemeProvider} from '@material-ui/core';
import ToggleOffIcon from '@material-ui/icons/ToggleOff';
import ToggleOnIcon from '@material-ui/icons/ToggleOn';


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createMuiTheme({
    palette:{
      type : darkMode ? 'dark':'light',
    }
  });

  return (
    <ThemeProvider theme={theme}>
  <Paper >
    
  <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)}></Switch>
    <Routes />
  
  </Paper>
  </ThemeProvider>
  );
}

export default App;
