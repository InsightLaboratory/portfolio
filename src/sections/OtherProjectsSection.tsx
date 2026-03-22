import { useTranslation } from 'react-i18next';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Box,
  Chip,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';

export default function OtherProjectsSection() {
  const { t } = useTranslation();

  return (
    <Box id="projects" sx={{ py: 12 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ mb: 6, fontWeight: 700, textAlign: 'center' }}>
          {t('otherProjects.title')}
        </Typography>

        <Grid container spacing={4}>
          {/* Google Earth Engine */}
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Typography variant="h4" sx={{ flexGrow: 1 }}>
                    {t('otherProjects.geeApps.title')}
                  </Typography>
                </Box>
                <Chip label={t('otherProjects.geeApps.badge')} sx={{ mb: 2 }} />
                <Typography sx={{ mb: 2 }}>
                  {t('otherProjects.geeApps.description')}
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  {t('otherProjects.geeApps.featured')}
                </Typography>
                <ul>
                  <li>
                    <Typography>
                      {t('otherProjects.geeApps.app1')}
                    </Typography>
                  </li>
                  <li>
                    <Typography>
                      {t('otherProjects.geeApps.app2')}
                    </Typography>
                  </li>
                </ul>
                <Typography sx={{ mt: 2, fontStyle: 'italic' }}>
                  {t('otherProjects.geeApps.tech')}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  href="https://github.com/InsightLaboratory/MisAplicaciones"
                  target="_blank"
                >
                  View Repository →
                </Button>
              </CardActions>
            </Card>
          </Grid>

          {/* InsightLab Portfolio */}
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Typography variant="h4" sx={{ flexGrow: 1 }}>
                    {t('otherProjects.portfolio.title')}
                  </Typography>
                </Box>
                <Chip label={t('otherProjects.portfolio.badge')} sx={{ mb: 2 }} />
                <Typography sx={{ mb: 2 }}>
                  {t('otherProjects.portfolio.description')}
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  {t('otherProjects.portfolio.featured')}
                </Typography>
                <List dense>
                  {(t('otherProjects.portfolio.resources', {
                    returnObjects: true,
                  }) as string[]).map((resource: string, idx: number) => (
                    <ListItem key={idx}>
                      <ListItemText primary={resource} />
                    </ListItem>
                  ))}
                </List>
                <Typography sx={{ mt: 2, fontStyle: 'italic' }}>
                  {t('otherProjects.portfolio.tech')}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  href="https://insightlaboratory.github.io"
                  target="_blank"
                >
                  Visit Website →
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
