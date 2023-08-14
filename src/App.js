import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import { AppBar, Button, Paper, ThemeProvider, Toolbar, createTheme } from '@mui/material';
import { useState } from 'react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

function App() {

  const navigate = useNavigate();
  const [mode, setMode] = useState('dark')

  const themeCtx = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={themeCtx}>
    <Paper elevation={4}>
    <div className="App">
      <AppBar className='Appbar' position="static">
        <Toolbar className='nav-tools'>

          <Button color="inherit">TATA</Button>
          <Button color="inherit">Contact Us</Button>
          <Button
                sx={{
                  marginLeft: "auto",
                }}
                startIcon={mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                color="inherit" onClick={() => setMode(mode === "light" ? "dark" : "light")}>
                {mode === "light" ? "dark" : "light"} mode
              </Button>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
    </Paper>
    </ThemeProvider>
  );
}

export default App;
