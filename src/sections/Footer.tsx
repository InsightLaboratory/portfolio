import { useTranslation } from 'react-i18next';
import { Container, Typography, Box, Link, useTheme } from '@mui/material';

export default function Footer() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        bgcolor: theme.palette.mode === 'dark' ? '#0a0a0a' : '#1a1a1a',
        color: '#ffffff',
        mt: 8,
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
        <Typography sx={{ mb: 1 }}>
          {t('footer.copyright')} •{' '}
          <Link
            href="https://github.com/InsightLaboratory"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: 'primary.light' }}
          >
            InsightLaboratory
          </Link>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {t('footer.updated')}
        </Typography>
      </Container>
    </Box>
  );
}
