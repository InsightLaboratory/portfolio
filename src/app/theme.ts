import { createTheme } from '@mui/material/styles';

const sharedTypography = {
  fontFamily: '"Inter", sans-serif',
  h1: {
    fontFamily: '"Space Grotesk", sans-serif',
    fontSize: 'clamp(2rem, 5vw, 4rem)',
    fontWeight: 700,
    lineHeight: 1.1,
    letterSpacing: '-1px',
  },
  h2: {
    fontFamily: '"Space Grotesk", sans-serif',
    fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
    fontWeight: 600,
    lineHeight: 1.3,
  },
  h3: {
    fontFamily: '"Space Grotesk", sans-serif',
    fontSize: 'clamp(1.25rem, 3vw, 1.875rem)',
    fontWeight: 600,
    lineHeight: 1.4,
  },
  h4: {
    fontFamily: '"Space Grotesk", sans-serif',
    fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
    fontWeight: 600,
    lineHeight: 1.4,
  },
  body1: {
    fontSize: '1rem',
    lineHeight: 1.6,
  },
  body2: {
    fontSize: '0.875rem',
    lineHeight: 1.6,
  },
};

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#10b981',
      light: '#6ee7b7',
      dark: '#059669',
    },
    secondary: {
      main: '#dc004e',
      light: '#f73378',
      dark: '#b2003b',
    },
    background: {
      default: '#ffffff',
      paper: '#f5f5f5',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
    },
  },
  typography: sharedTypography,
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          fontFamily: '"Inter", sans-serif',
          borderRadius: '12px',
          padding: '10px 28px',
          fontSize: '0.95rem',
          transition: 'all 0.25s ease',
          boxShadow: 'none',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
          },
        },
        contained: {
          background: '#15a373',
          color: '#ffffff',
          transition: 'all 0.25s ease',
          '&:hover': {
            background: '#117a65',
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 20px rgba(16, 185, 129, 0.25)',
          },
        },
        outlined: {
          borderWidth: '2px',
          borderColor: '#10b981',
          color: '#10b981',
          transition: 'all 0.25s ease',
          '&:hover': {
            borderColor: '#059669',
            color: '#059669',
            backgroundColor: 'rgba(16, 185, 129, 0.05)',
            boxShadow: '0 0 0 3px rgba(16, 185, 129, 0.1)',
          },
        },
        text: {
          color: '#10b981',
          transition: 'all 0.25s ease',
          '&:hover': {
            color: '#059669',
            backgroundColor: 'rgba(16, 185, 129, 0.05)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
            transform: 'translateY(-4px)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: 'rgba(16, 185, 129, 0.15)',
            color: '#10b981',
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          transition: 'color 0.3s ease',
          '&:hover': {
            color: '#10b981',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: 'color 0.3s ease',
          '&:hover': {
            color: '#10b981',
          },
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#10b981',
      light: '#6ee7b7',
      dark: '#059669',
    },
    secondary: {
      main: '#f73378',
      light: '#ff6ba6',
      dark: '#dc004e',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0bec5',
    },
  },
  typography: sharedTypography,
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          fontFamily: '"Inter", sans-serif',
          borderRadius: '12px',
          padding: '10px 28px',
          fontSize: '0.95rem',
          transition: 'all 0.25s ease',
          boxShadow: 'none',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 3px 10px rgba(66, 165, 245, 0.14)',
          },
        },
        contained: {
          background: '#15a373',
          color: '#ffffff',
          transition: 'all 0.25s ease',
          '&:hover': {
            background: '#117a65',
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 20px rgba(16, 185, 129, 0.3)',
          },
        },
        outlined: {
          borderWidth: '2px',
          borderColor: '#10b981',
          color: '#10b981',
          transition: 'all 0.25s ease',
          '&:hover': {
            borderWidth: '2px',
            borderColor: '#6ee7b7',
            color: '#6ee7b7',
            backgroundColor: 'rgba(16, 185, 129, 0.08)',
          },
        },
        text: {
          color: '#10b981',
          transition: 'all 0.25s ease',
          '&:hover': {
            color: '#6ee7b7',
            backgroundColor: 'rgba(16, 185, 129, 0.08)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0 6px 16px rgba(16, 185, 129, 0.08)',
              transform: 'translateY(-3px)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: 'rgba(16, 185, 129, 0.15)',
            color: '#10b981',
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          transition: 'color 0.3s ease',
          '&:hover': {
            color: '#10b981',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: 'color 0.3s ease',
          '&:hover': {
            color: '#10b981',
          },
        },
      },
    },
  },
});
