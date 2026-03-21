import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material/styles';
import {
  AppBar,
  Container,
  Toolbar,
  Button,
  Box,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setIsDark(savedTheme === 'dark');
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const handleLanguageChange = (_: any, newLang: string) => {
    if (newLang) {
      i18n.changeLanguage(newLang);
    }
  };

  const handleThemeToggle = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    window.location.reload(); // Reload to apply theme
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        background:
          theme.palette.mode === 'dark'
            ? 'linear-gradient(135deg, #1e1e1e 0%, #2a2a2a 100%)'
            : 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)',
        color: theme.palette.text.primary,
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box sx={{ fontWeight: 700, fontSize: '1.3rem' }}>Juan M. Torres</Box>

          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <ToggleButtonGroup
              value={i18n.language}
              exclusive
              onChange={handleLanguageChange}
              size="small"
            >
              <ToggleButton value="es">ES</ToggleButton>
              <ToggleButton value="en">EN</ToggleButton>
            </ToggleButtonGroup>

            <Button color="inherit" href="#featured">
              {t('nav.featured')}
            </Button>
            <Button color="inherit" href="#projects">
              {t('nav.projects')}
            </Button>
            <Button color="inherit" href="#expertise">
              {t('nav.expertise')}
            </Button>
            <Button color="inherit" href="#contact">
              {t('nav.contact')}
            </Button>

            <Button
              variant="outlined"
              size="small"
              onClick={handleThemeToggle}
            >
              {isDark ? '☀️' : '🌙'}
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
