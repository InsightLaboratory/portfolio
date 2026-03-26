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
    <Box id="featured" sx={{ py: { xs: 6, md: 12 }, bgcolor: theme.palette.mode === 'dark' ? '#1a1a1a' : '#f9f9f9' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ mb: 2, textAlign: 'center' }}>
          {t('featured.title')}
        </Typography>

        <Box sx={{ display: 'flex', gap: 1, mb: 4, justifyContent: 'center' }}>
          <Chip label={t('featured.statusLive')} color="success" />
          <Chip label={t('featured.statusUpdated')} />
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              sx={{
                mb: 2,
                fontSize: { xs: '1.3rem', md: '1.5rem' },
                fontWeight: 500,
                opacity: 0.75,
              }}
            >
              {t('featured.projectTitle')}
            </Typography>
            <Typography sx={{ mb: 3 }}>
              {t('featured.description')}
            </Typography>

            <Box
              sx={{
                my: { xs: 6, md: 10 },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <img
                src={`${(import.meta as any).env.BASE_URL}images/map.png`}
                alt="Drillhole spatial visualization using PostGIS and Leaflet"
                style={{
                  width: '100%',
                  maxWidth: 1200,
                  height: 'auto',
                  borderRadius: 12,
                  boxShadow: '0 16px 40px rgba(0,0,0,0.45), 0 0 16px rgba(0,150,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLImageElement).style.transform = 'scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLImageElement).style.transform = 'scale(1)';
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  mt: 2,
                  color: 'text.secondary',
                  fontStyle: 'italic',
                  maxWidth: 900,
                  textAlign: 'center',
                }}
              >
                Interactive drillhole visualization powered by PostGIS and Leaflet.
              </Typography>
            </Box>

            <Typography variant="h5" sx={{ mb: 2 }}>
              {t('featured.features')}
            </Typography>
            <ul>
              {(t('featured.featureList', { returnObjects: true }) as string[]).map(
                (feature: string, idx: number) => (
                  <li key={idx}>
                    <Typography>{feature}</Typography>
                  </li>
                )
              )}
            </ul>

            <Box sx={{ display: 'flex', gap: 2, mt: 3, flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                href="https://geo-platform-axhipqo2p-juanmanueltorres-creators-projects.vercel.app"
                target="_blank"
              >
                {t('featured.btnLiveDemo')}
              </Button>
              <Button
                variant="outlined"
                href="https://geo-plataform.onrender.com"
                target="_blank"
              >
                {t('featured.btnAPI')}
              </Button>
              <Button
                variant="outlined"
                href="https://github.com/InsightLaboratory/Geo_Platform"
                target="_blank"
              >
                {t('featured.btnCode')}
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" sx={{ mb: 2 }}>
                  {t('featured.stackTitle')}
                </Typography>

                {/* Backend */}
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    {t('featured.backendInfra')}
                  </Typography>
                  <List dense>
                    {(t('featured.backendItems', { returnObjects: true }) as string[]).map(
                      (item: string, idx: number) => (
                        <ListItem key={idx}>
                          <ListItemText primary={item} />
                        </ListItem>
                      )
                    )}
                  </List>
                </Box>

                {/* Frontend */}
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    {t('featured.frontendFrame')}
                  </Typography>
                  <List dense>
                    {(t('featured.frontendItems', { returnObjects: true }) as string[]).map(
                      (item: string, idx: number) => (
                        <ListItem key={idx}>
                          <ListItemText primary={item} />
                        </ListItem>
                      )
                    )}
                  </List>
                </Box>

                {/* Geospatial */}
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    {t('featured.geospatialData')}
                  </Typography>
                  <List dense>
                    {(t('featured.geospatialItems', { returnObjects: true }) as string[]).map(
                      (item: string, idx: number) => (
                        <ListItem key={idx}>
                          <ListItemText primary={item} />
                        </ListItem>
                      )
                    )}
                  </List>
                </Box>

                {/* Visualization */}
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    {t('featured.visualization')}
                  </Typography>
                  <List dense>
                    {(t('featured.vizItems', { returnObjects: true }) as string[]).map(
                      (item: string, idx: number) => (
                        <ListItem key={idx}>
                          <ListItemText primary={item} />
                        </ListItem>
                      )
                    )}
                  </List>
                  <Box sx={{ mt: 2 }}>
                    <img
                      src={`${(import.meta as any).env.BASE_URL}images/chart.png`}
                      alt="Assay analysis chart showing depth vs grade relationship"
                      className="rounded-xl shadow-md w-full"
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </Box>
                  <Box sx={{ mt: 2 }}>
                    <img
                      src={`${(import.meta as any).env.BASE_URL}images/system.png`}
                      alt="Geospatial system architecture: FastAPI backend, PostGIS database, React frontend"
                      className="rounded-lg shadow-md w-full"
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Stats */}
        <Grid container spacing={2} sx={{ mt: 4 }}>
          <Grid item xs={6} sm={6} md={3}>
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: 'text.primary' }}>
                  {t('featured.datasetScale')}
                </Typography>
                <Typography color="textSecondary">{t('featured.drillholes')}</Typography>
                <Typography color="textSecondary">{t('featured.samples')}</Typography>
                <Typography color="textSecondary">{t('featured.assays')}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: 'text.primary' }}>
                  {t('featured.apiPerf')}
                </Typography>
                <Typography color="textSecondary">{t('featured.endpoints')}</Typography>
                <Typography color="textSecondary">{t('featured.pagination')}</Typography>
                <Typography color="textSecondary">{t('featured.realtime')}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: 'text.primary' }}>
                  {t('featured.dbModel')}
                </Typography>
                <Typography color="textSecondary">{t('featured.tables')}</Typography>
                <Typography color="textSecondary">{t('featured.postgis')}</Typography>
                <Typography color="textSecondary">{t('featured.normalized')}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: 'text.primary' }}>
                  {t('featured.frontendComp')}
                </Typography>
                <Typography color="textSecondary">{t('featured.hero')}</Typography>
                <Typography color="textSecondary">{t('featured.mapExp')}</Typography>
                <Typography color="textSecondary">{t('featured.dataAnal')}</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
