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
    <Box sx={{ py: 12 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ mb: 6, fontWeight: 700, textAlign: 'center' }}>
          {t('skills.title')}
        </Typography>

        <Grid container spacing={3}>
          {skillsData.map((skill) => (
            <Grid item xs={12} sm={6} md={4} key={skill.key}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Box sx={{ fontSize: '2rem', mb: 1 }}>{skill.icon}</Box>
                  <Typography variant="h4" sx={{ mb: 1 }}>
                    {t(`skills.${skill.key}.title`)}
                  </Typography>
                  <Typography color="textSecondary">
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
