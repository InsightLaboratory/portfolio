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
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  useMediaQuery,
} from '@mui/material';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [isDark, setIsDark] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
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
    window.location.reload();
  };

  const navLinks = [
    { label: t('nav.featured'), href: '#featured' },
    { label: t('nav.projects'), href: '#projects' },
    { label: t('nav.expertise'), href: '#expertise' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  const drawer = (
    <Box sx={{ width: 260, pt: 2 }}>
      <Box sx={{ px: 2, pb: 2, fontWeight: 700, fontSize: '1.2rem' }}>
        Juan M. Torres
      </Box>
      <Divider />
      <List>
        {navLinks.map((link) => (
          <ListItem key={link.href} disablePadding>
            <ListItemButton
              component="a"
              href={link.href}
              onClick={() => setDrawerOpen(false)}
            >
              <ListItemText primary={link.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, py: 2 }}>
        <ToggleButtonGroup
          value={i18n.language}
          exclusive
          onChange={handleLanguageChange}
          size="small"
        >
          <ToggleButton value="es">ES</ToggleButton>
          <ToggleButton value="en">EN</ToggleButton>
        </ToggleButtonGroup>
        <Button variant="outlined" size="small" onClick={handleThemeToggle}>
          {isDark ? '☀️' : '🌙'}
        </Button>
      </Box>
    </Box>
  );

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
            minHeight: { xs: 56, md: 64 },
          }}
        >
          <Box sx={{ fontWeight: 700, fontSize: '1.3rem' }}>Juan M. Torres</Box>

          {/* Desktop nav */}
          {!isMobile && (
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

              {navLinks.map((link) => (
                <Button key={link.href} color="inherit" href={link.href}>
                  {link.label}
                </Button>
              ))}

              <Button variant="outlined" size="small" onClick={handleThemeToggle}>
                {isDark ? '☀️' : '🌙'}
              </Button>
            </Box>
          )}

          {/* Mobile hamburger */}
          {isMobile && (
            <IconButton
              color="inherit"
              edge="end"
              onClick={() => setDrawerOpen(true)}
              sx={{ fontSize: '1.5rem' }}
            >
              ☰
            </IconButton>
          )}
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
}
