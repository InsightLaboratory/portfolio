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
    <Box id="featured" sx={{ py: 8, bgcolor: theme.palette.mode === 'dark' ? '#1a1a1a' : '#f9f9f9' }}>
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
            <Typography variant="h3" sx={{ mb: 2 }}>
              {t('featured.projectTitle')}
            </Typography>
            <Typography sx={{ mb: 3 }}>
              {t('featured.description')}
            </Typography>

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
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Stats */}
        <Grid container spacing={2} sx={{ mt: 4 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography color="primary" sx={{ fontSize: '1.5rem', fontWeight: 700 }}>
                  {t('featured.datasetScale')}
                </Typography>
                <Typography>{t('featured.drillholes')}</Typography>
                <Typography>{t('featured.samples')}</Typography>
                <Typography>{t('featured.assays')}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography color="primary" sx={{ fontSize: '1.5rem', fontWeight: 700 }}>
                  {t('featured.apiPerf')}
                </Typography>
                <Typography>{t('featured.endpoints')}</Typography>
                <Typography>{t('featured.pagination')}</Typography>
                <Typography>{t('featured.realtime')}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography color="primary" sx={{ fontSize: '1.5rem', fontWeight: 700 }}>
                  {t('featured.dbModel')}
                </Typography>
                <Typography>{t('featured.tables')}</Typography>
                <Typography>{t('featured.postgis')}</Typography>
                <Typography>{t('featured.normalized')}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography color="primary" sx={{ fontSize: '1.5rem', fontWeight: 700 }}>
                  {t('featured.frontendComp')}
                </Typography>
                <Typography>{t('featured.hero')}</Typography>
                <Typography>{t('featured.mapExp')}</Typography>
                <Typography>{t('featured.dataAnal')}</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
