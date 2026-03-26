import { useTranslation } from 'react-i18next';
import {
  Container,
  Typography,
  Button,
  Box,
  Chip,
  useTheme,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function HeroSection() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Box
      sx={{
        background:
          theme.palette.mode === 'dark'
            ? '#121212'
            : '#ffffff',
        py: { xs: 6, md: 12 },
        minHeight: { xs: '60vh', md: '70vh' },
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <Chip label={t('hero.badge')} sx={{
            background: 'rgba(16, 185, 129, 0.06)',
            color: '#117a65',
            fontWeight: 500,
            mb: 3,
            fontSize: '0.85rem',
            letterSpacing: '0.3px',
            px: 2.5,
            py: 0.75,
            border: '1px solid rgba(16, 185, 129, 0.12)',
          }} />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mb: 2,
          }}
        >
          <Box
            sx={{
              width: { xs: 120, md: 160 },
              height: { xs: 120, md: 160 },
              borderRadius: '50%',
              overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(0,0,0,0.14), inset 0 0 0 1px rgba(16, 185, 129, 0.12)',
              border: '2px solid rgba(16, 185, 129, 0.08)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'scale(1.02)',
                boxShadow: '0 6px 16px rgba(0,0,0,0.18), inset 0 0 0 1px rgba(16, 185, 129, 0.15)',
              },
            }}
          >
            <img
              src={`${(import.meta as any).env.BASE_URL}images/profile.jpg`}
              alt="Juan Manuel Torres - Geospatial Developer"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </Box>
        </Box>

        <Typography variant="h1" sx={{ mb: 1.5, fontWeight: 800, textAlign: 'center' }}>
          {t('hero.title')}
        </Typography>
        <Typography variant="h2" sx={{
          mb: 3,
          textAlign: 'center',
          fontSize: { xs: 'clamp(1.1rem, 3vw, 1.6rem)', md: 'clamp(1.3rem, 3vw, 1.8rem)' },
          color: '#9ca3af',
          fontWeight: 500,
        }}>
          {t('hero.subtitle')}
        </Typography>
        <Typography
          variant="body1"
          sx={{ maxWidth: '700px', mx: 'auto', mb: 4, fontSize: { xs: '0.95rem', md: '1.1rem' }, px: { xs: 1, md: 0 }, textAlign: 'center', color: theme.palette.mode === 'dark' ? '#a0aec0' : '#71717a' }}
        >
          {t('hero.description')}
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button variant="contained" size="large" href="#featured">
            {t('hero.btnFeatured')}
          </Button>
          <Button
            variant="outlined"
            size="large"
            href="https://github.com/InsightLaboratory"
            target="_blank"
            startIcon={<GitHubIcon />}
          >
            {t('hero.btnGitHub')}
          </Button>
          <Button
            variant="text"
            size="large"
            href="https://www.linkedin.com/in/juanmtorres23/"
            target="_blank"
            startIcon={<LinkedInIcon />}
          >
            {t('hero.btnLinkedIn')}
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
