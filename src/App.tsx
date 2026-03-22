import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './i18n/index';
import { lightTheme, darkTheme } from './app/theme';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import SkillsSection from './sections/SkillsSection';
import FeaturedProjectSection from './sections/FeaturedProjectSection';
import OtherProjectsSection from './sections/OtherProjectsSection';
import ExpertiseSection from './sections/ExpertiseSection';
import ContactSection from './sections/ContactSection';
import Footer from './sections/Footer';

function App() {
  useTranslation();
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setIsDark(savedTheme === 'dark');
  }, []);

  // Listen for theme changes from localStorage
  useEffect(() => {
    const handleThemeChange = () => {
      const savedTheme = localStorage.getItem('theme') || 'dark';
      setIsDark(savedTheme === 'dark');
    };

    window.addEventListener('storage', handleThemeChange);
    return () => window.removeEventListener('storage', handleThemeChange);
  }, []);

  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <Box sx={{ flex: 1 }}>
          <HeroSection />
          <SkillsSection />
          <FeaturedProjectSection />
          <OtherProjectsSection />
          <ExpertiseSection />
          <ContactSection />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
