import { createRoot } from 'react-dom/client';
import {
  ThemeProvider,
  createTheme,
  CssBaseline
} from '@mui/material';
import { useMemo, useState } from 'react';
import App from './App.jsx';

function Root() {
  const [mode, setMode] = useState('light');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: '#6C5CE7',
          },
          secondary: {
            main: '#00CEC9',
          },
          background: {
            default: mode === 'light' ? '#F4F6FB' : '#0F1220',
            paper: mode === 'light' ? '#FFFFFF' : '#1C1F33',
          },
          text: {
            primary: mode === 'light' ? '#000000' : '#FFFFFF',
            secondary: '#555',
          },
        },
        shape: {
          borderRadius: 14,
        },
        typography: {
          fontFamily: 'Inter, Roboto, Arial',
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                backgroundColor: mode === 'light' ? '#FFFFFF' : '#6C5CE7',
                color: mode === 'light' ? '#000000' : '#FFFFFF',
                '&:hover': {
                  backgroundColor: mode === 'light' ? '#F0F0F0' : '#5A4FCF',
                },
              },
            },
          },
        },
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App mode={mode} setMode={setMode} />
    </ThemeProvider>
  );
}

createRoot(document.getElementById('root')).render(<Root />);
