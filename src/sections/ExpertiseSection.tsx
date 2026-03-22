import { useTranslation } from 'react-i18next';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
} from '@mui/material';

export default function ExpertiseSection() {
  const { t } = useTranslation();

  const expertiseData = [
    { key: 'geospatial', icon: '🗺️' },
    { key: 'mineral', icon: '💰' },
    { key: 'architecture', icon: '🏗️' },
    { key: 'database', icon: '💾' },
    { key: 'visualization', icon: '📊' },
    { key: 'devops', icon: '☁️' },
  ];

  return (
    <Box id="expertise" sx={{ py: 12 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ mb: 6, fontWeight: 700, textAlign: 'center' }}>
          {t('expertise.title')}
        </Typography>

        <Grid container spacing={3}>
          {expertiseData.map((exp) => (
            <Grid item xs={12} sm={6} md={4} key={exp.key}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Box sx={{ fontSize: '2rem', mb: 1 }}>{exp.icon}</Box>
                  <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>
                    {t(`expertise.${exp.key}.title`)}
                  </Typography>
                  <Typography color="textSecondary">
                    {t(`expertise.${exp.key}.desc`)}
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
