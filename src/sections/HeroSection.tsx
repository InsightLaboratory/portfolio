import { useTranslation } from 'react-i18next';
import {
  Container,
  Typography,
  Button,
  Box,
  Chip,
  useTheme,
} from '@mui/material';

export default function HeroSection() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Box
      sx={{
        background:
          theme.palette.mode === 'dark'
            ? 'linear-gradient(135deg, #1e1e1e 0%, #2a2a2a 100%)'
            : 'linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%)',
        py: 12,
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Chip label={t('hero.badge')} color="primary" sx={{ mb: 2 }} />
        </Box>
        <Typography variant="h1" sx={{ mb: 2, fontWeight: 800, textAlign: 'center' }}>
          {t('hero.title')}
        </Typography>
        <Typography variant="h2" color="primary" sx={{ mb: 3, textAlign: 'center' }}>
          {t('hero.subtitle')}
        </Typography>
        <Typography
          variant="body1"
          sx={{ maxWidth: '700px', mx: 'auto', mb: 4, fontSize: '1.1rem', textAlign: 'center' }}
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
          >
            {t('hero.btnGitHub')}
          </Button>
          <Button
            variant="outlined"
            size="large"
            href="https://www.linkedin.com/in/juanmtorres23/"
            target="_blank"
          >
            {t('hero.btnLinkedIn')}
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
