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
  useTheme,
} from '@mui/material';

export default function OtherProjectsSection() {
  const { t } = useTranslation();
  const theme = useTheme();

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
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 2,
                overflow: 'hidden',
                transition: 'transform 400ms cubic-bezier(0.2,0.8,0.2,1), box-shadow 400ms ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)',
                },
                '&:hover .insight-lab-image': {
                  transform: 'scale(1.04)',
                },
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  px: { xs: 3, md: 5 },
                  pt: { xs: 3, md: 4 },
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    minHeight: { xs: 190, sm: 220, md: 240 },
                    borderRadius: 3,
                    overflow: 'hidden',
                    border: theme.palette.mode === 'dark'
                      ? '1px solid rgba(148, 163, 184, 0.16)'
                      : '1px solid rgba(15, 23, 42, 0.08)',
                    background: theme.palette.mode === 'dark'
                      ? 'linear-gradient(180deg, rgba(18, 24, 38, 0.98), rgba(9, 13, 22, 0.98))'
                      : 'linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(241, 245, 249, 0.98))',
                    boxShadow: theme.palette.mode === 'dark'
                      ? '0 18px 40px rgba(0, 0, 0, 0.28)'
                      : '0 18px 36px rgba(15, 23, 42, 0.12)',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.04) 0%, rgba(15, 23, 42, 0.46) 100%)',
                      pointerEvents: 'none',
                    },
                  }}
                >
                  <Box
                    component="img"
                    className="insight-lab-image"
                    src={`${(import.meta as any).env.BASE_URL}images/lab.png`}
                    alt="Insight Laboratory preview"
                    sx={{
                      width: '100%',
                      height: '100%',
                      display: 'block',
                      objectFit: 'cover',
                      objectPosition: 'center top',
                      transition: 'transform 0.45s ease',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      left: 18,
                      right: 18,
                      bottom: 16,
                      zIndex: 1,
                    }}
                  >
                    <Typography
                      variant="overline"
                      sx={{
                        color: 'rgba(255,255,255,0.82)',
                        letterSpacing: '0.18em',
                        fontWeight: 700,
                      }}
                    >
                      INSIGHT LABORATORY
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#f8fafc',
                        maxWidth: 320,
                        textShadow: '0 2px 10px rgba(0,0,0,0.35)',
                      }}
                    >
                      Tools, maps, and scientific resources presented with a stronger visual identity.
                    </Typography>
                  </Box>
                </Box>
              </Box>
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
