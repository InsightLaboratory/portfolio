import { useTranslation } from 'react-i18next';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
} from '@mui/material';

export default function SkillsSection() {
  const { t } = useTranslation();

  const skillsData = [
    { key: 'backend', icon: '⚙️' },
    { key: 'frontend', icon: '🎨' },
    { key: 'geospatial', icon: '🗺️' },
    { key: 'database', icon: '💾' },
    { key: 'cloud', icon: '☁️' },
    { key: 'data', icon: '📊' },
  ];

  return (
    <Box sx={{ py: { xs: 6, md: 12 } }}>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ mb: 6, fontWeight: 700, textAlign: 'center' }}>
          {t('skills.title')}
        </Typography>

        <Grid container spacing={{ xs: 3, md: 5 }}>
          {skillsData.map((skill) => (
            <Grid item xs={12} sm={6} md={4} key={skill.key}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  borderRadius: 2,
                  transition: 'transform 400ms cubic-bezier(0.2,0.8,0.2,1), box-shadow 400ms ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)',
                  },
                  '&:hover .topAccent': {
                    opacity: 0.12,
                  },
                  '&:hover .skillIcon': {
                    filter: 'brightness(1.03)',
                  },
                }}
              >
                <Box className="topAccent" sx={{ height: 4, backgroundColor: 'primary.main', opacity: 0.045, borderTopLeftRadius: 8, borderTopRightRadius: 8 }} />
                <CardContent sx={{ p: { xs: 3, md: 5 }, flex: '1 1 auto' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <Box className="skillIcon" sx={{ fontSize: { xs: '1rem', md: '1.125rem' }, color: 'text.secondary', opacity: 0.92, transition: 'filter 200ms ease, transform 200ms ease' }}>
                      {skill.icon}
                    </Box>
                    <Typography
                      variant="h4"
                      sx={{
                        color: 'primary.main',
                        fontWeight: 700,
                        lineHeight: 1.1,
                        fontSize: { xs: '1rem', md: '1.125rem' },
                      }}
                    >
                      {t(`skills.${skill.key}.title`)}
                    </Typography>
                  </Box>

                  <Typography color="textSecondary" sx={{ mt: 1, fontSize: '0.95rem' }}>
                    {t(`skills.${skill.key}.desc`)}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
