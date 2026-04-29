import { useTranslation } from 'react-i18next';
import {
  Container,
  Typography,
  Grid,
  Box,
  Card,
  CardContent,
  Button,
  Chip,
  List,
  ListItem,
  ListItemText,
  useTheme,
} from '@mui/material';

export default function FeaturedProjectSection() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Box
      id="featured"
      sx={{
        py: { xs: 6, md: 12 },
        position: 'relative',
        bgcolor: theme.palette.mode === 'dark' ? '#171c24' : '#f9f9f9',
        overflow: 'hidden',
        '::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          background:
            'radial-gradient(ellipse 70% 40% at 60% 0%, rgba(80,180,255,0.06) 0%, rgba(0,0,0,0.00) 80%), ' +
            'linear-gradient(120deg, rgba(80,0,255,0.035) 0%, rgba(0,255,255,0.02) 100%)',
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
        {/* Project Hero Block */}
        <Box sx={{ mb: { xs: 3, md: 4 }, textAlign: 'center' }}>
          <Typography variant="h2" sx={{ fontWeight: 700, mb: 0.5 }}>
            {t('featured.title')}
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', mb: 0.5 }}>
            <Chip label={t('featured.statusLive')} color="success" />
            <Chip label={t('featured.statusUpdated')} />
          </Box>
          <Typography variant="h5" sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto', fontWeight: 400, lineHeight: 1.3, mb: 0 }}>
            End-to-end platform for managing, analyzing, and visualizing mineral exploration data.
          </Typography>
        </Box>

        {/* Features as Product Cards (compressed) */}
        <Box sx={{ mb: { xs: 4, md: 7 } }}>
          <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: 2, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', height: '100%' }}>
                <CardContent sx={{ p: { xs: 3, md: 4 }, minHeight: 90, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Typography sx={{ fontWeight: 500, textAlign: 'center', fontSize: { xs: '1rem', md: '1.08rem' } }}>
                    Normalized drillhole database
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: 2, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', height: '100%' }}>
                <CardContent sx={{ p: { xs: 3, md: 4 }, minHeight: 90, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Typography sx={{ fontWeight: 500, textAlign: 'center', fontSize: { xs: '1rem', md: '1.08rem' } }}>
                    FastAPI backend for analytics
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: 2, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', height: '100%' }}>
                <CardContent sx={{ p: { xs: 3, md: 4 }, minHeight: 90, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Typography sx={{ fontWeight: 500, textAlign: 'center', fontSize: { xs: '1rem', md: '1.08rem' } }}>
                    Real-time GeoJSON map integration
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: 2, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', height: '100%' }}>
                <CardContent sx={{ p: { xs: 3, md: 4 }, minHeight: 90, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Typography sx={{ fontWeight: 500, textAlign: 'center', fontSize: { xs: '1rem', md: '1.08rem' } }}>
                    Interactive exploration (React + Leaflet)
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Visual Block: Map + Chart (balanced proportions) */}
        <Box sx={{
          maxWidth: 1100,
          mx: 'auto',
          mb: { xs: 4, md: 6 },
          mt: { xs: 4, md: 7 },
          pt: 0,
          pb: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <Box sx={{ width: { xs: '100%', sm: '85%' }, maxWidth: 900, mb: { xs: 2, md: 3 } }}>
            <img
              src={`${(import.meta as any).env.BASE_URL}images/map.png`}
              alt="Drillhole spatial visualization using PostGIS and Leaflet"
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: 340,
                borderRadius: 12,
                boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                display: 'block',
                margin: '0 auto',
                objectFit: 'cover',
              }}
            />
          </Box>
          <Box sx={{ width: { xs: '100%', sm: '68%' }, maxWidth: 720, mb: { xs: 1, md: 2 } }}>
            <img
              src={`${(import.meta as any).env.BASE_URL}images/chart.png`}
              alt="Assay analysis chart showing depth vs grade relationship"
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: 240,
                borderRadius: 12,
                boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                display: 'block',
                margin: '0 auto',
                objectFit: 'contain',
              }}
            />
          </Box>
          <Typography variant="body2" sx={{ color: 'text.secondary', fontStyle: 'italic', textAlign: 'center', mt: 0.5 }}>
            Drillhole and assay data visualized with PostGIS, Leaflet, and custom analytics.
          </Typography>
        </Box>

        {/* System Overview */}
        <Box sx={{ mb: { xs: 2, md: 3 } }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, textAlign: 'center' }}>
            {t('featured.stackTitle')}
          </Typography>
          <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
            {/* Backend */}
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: 2, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', height: '100%' }}>
                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    Backend
                  </Typography>
                  <List dense>
                    <ListItem disableGutters><ListItemText primary="FastAPI (Python 3.11)" /></ListItem>
                    <ListItem disableGutters><ListItemText primary="Connection pooling & CORS" /></ListItem>
                    <ListItem disableGutters><ListItemText primary="Logging & analytics" /></ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>
            {/* Frontend */}
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: 2, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', height: '100%' }}>
                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    Frontend
                  </Typography>
                  <List dense>
                    <ListItem disableGutters><ListItemText primary="React + TypeScript" /></ListItem>
                    <ListItem disableGutters><ListItemText primary="Vite build system" /></ListItem>
                    <ListItem disableGutters><ListItemText primary="Leaflet map UI" /></ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>
            {/* Data Layer */}
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: 2, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', height: '100%' }}>
                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    Data Layer
                  </Typography>
                  <List dense>
                    <ListItem disableGutters><ListItemText primary="PostgreSQL + PostGIS" /></ListItem>
                    <ListItem disableGutters><ListItemText primary="Spatial queries" /></ListItem>
                    <ListItem disableGutters><ListItemText primary="Normalized schema" /></ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>
            {/* Visualization */}
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: 2, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', height: '100%' }}>
                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    Visualization
                  </Typography>
                  <List dense>
                    <ListItem disableGutters><ListItemText primary="React-Leaflet map" /></ListItem>
                    <ListItem disableGutters><ListItemText primary="GeoJSON features" /></ListItem>
                    <ListItem disableGutters><ListItemText primary="Interactive popups & charts" /></ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Action Buttons */}
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mt: { xs: 2, md: 4 } }}>
          <Button
            variant="contained"
            href="https://sanjuangeo.vercel.app/"
            target="_blank"
            size="large"
            sx={{ fontWeight: 600 }}
          >
            {t('featured.btnLiveDemo')}
          </Button>
          <Button
            variant="outlined"
            href="https://geo-plataform.onrender.com"
            target="_blank"
            size="large"
          >
            {t('featured.btnAPI')}
          </Button>
          <Button
            variant="outlined"
            href="https://github.com/juanmanueltorres-creator/Geo_Platform"
            target="_blank"
            size="large"
          >
            {t('featured.btnCode')}
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
