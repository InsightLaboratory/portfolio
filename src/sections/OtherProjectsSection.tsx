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
    <Box
      id="projects"
      sx={{
        py: { xs: 6, md: 12 },
        position: 'relative',
        bgcolor: theme => theme.palette.mode === 'dark' ? '#181c24' : '#f9f9f9',
        overflow: 'hidden',
        '::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          background:
            'radial-gradient(ellipse 60% 35% at 40% 0%, rgba(80,180,255,0.05) 0%, rgba(0,0,0,0.00) 80%), ' +
            'linear-gradient(120deg, rgba(80,0,255,0.025) 0%, rgba(0,255,255,0.012) 100%)',
          pointerEvents: 'none',
        },
        '::after': {
          content: '""',
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          backgroundImage: 'none',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Typography variant="h2" sx={{ mb: 5, fontWeight: 700, textAlign: 'center' }}>
          {t('otherProjects.title')}
        </Typography>
        <Grid container spacing={{ xs: 3, md: 5 }}>
          {/* Google Earth Engine */}
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 2, transition: 'transform 400ms cubic-bezier(0.2,0.8,0.2,1), box-shadow 400ms ease', '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)' } }}>
              <CardContent sx={{ p: { xs: 3, md: 5 }, flex: '1 1 auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                <Typography variant="h4" sx={{ color: 'primary.main', fontWeight: 700, mb: 1 }}>
                  {t('otherProjects.geeApps.title')}
                </Typography>
                <Typography color="text.secondary" sx={{ mb: 2, fontSize: '1.05rem', minHeight: 44 }}>
                  {t('otherProjects.geeApps.badge')}
                </Typography>
                <Typography sx={{ mb: 2, fontSize: '1rem', minHeight: 44 }}>
                  Geospatial analysis using satellite data.
                </Typography>
                <ul style={{ margin: 0, paddingLeft: 18, marginBottom: 12 }}>
                  <li><Typography>3D Andean peaks: glaciers, hydrology, geology</Typography></li>
                  <li><Typography>DEM-based topography & hydrography</Typography></li>
                </ul>
                <Typography color="text.secondary" sx={{ fontSize: '0.95rem', mt: 'auto' }}>
                  Tech: Google Earth Engine, Landsat/Sentinel, PostGIS
                </Typography>
              </CardContent>
              <CardActions sx={{ px: { xs: 3, md: 5 }, pb: 2 }}>
                <Button size="small" href="https://github.com/InsightLaboratory/MisAplicaciones" target="_blank">
                  View Repository →
                </Button>
              </CardActions>
            </Card>
          </Grid>
          {/* InsightLab Portfolio */}
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 2, transition: 'transform 400ms cubic-bezier(0.2,0.8,0.2,1), box-shadow 400ms ease', '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)' } }}>
              <CardContent sx={{ p: { xs: 3, md: 5 }, flex: '1 1 auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                <Typography variant="h4" sx={{ color: 'primary.main', fontWeight: 700, mb: 1 }}>
                  {t('otherProjects.portfolio.title')}
                </Typography>
                <Typography color="text.secondary" sx={{ mb: 2, fontSize: '1.05rem', minHeight: 44 }}>
                  {t('otherProjects.portfolio.badge')}
                </Typography>
                <Typography sx={{ mb: 2, fontSize: '1rem', minHeight: 44 }}>
                  Curated geospatial tools and scientific resources.
                </Typography>
                <ul style={{ margin: 0, paddingLeft: 18, marginBottom: 12 }}>
                  <li><Typography>OpenStreetMap: collaborative mapping</Typography></li>
                  <li><Typography>Gaia GPS: outdoor mapping & geosciences</Typography></li>
                  <li><Typography>Asterank: space data exploration</Typography></li>
                </ul>
                <Typography color="text.secondary" sx={{ fontSize: '0.95rem', mt: 'auto' }}>
                  Tech: Web dev, data curation, science communication
                </Typography>
              </CardContent>
              <CardActions sx={{ px: { xs: 3, md: 5 }, pb: 2 }}>
                <Button size="small" href="https://insightlaboratory.github.io" target="_blank">
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
