import { useTranslation } from 'react-i18next';
import {
  Container,
  Typography,
  Grid,
  Box,
  TextField,
  Button,
  Card,
  CardContent,
  Link,
  List,
  ListItem,
  ListItemText,
  useTheme,
} from '@mui/material';
import { useState } from 'react';

export default function ContactSection() {
  const { t } = useTranslation();
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Box
      id="contact"
      sx={{
        py: 8,
        bgcolor: theme.palette.mode === 'dark' ? '#1a1a1a' : '#f9f9f9',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ mb: 2, fontWeight: 700, textAlign: 'center' }}>
          {t('contact.title')}
        </Typography>
        <Typography sx={{ mb: 6, textAlign: 'center' }}>
          {t('contact.intro')}
        </Typography>

        <Grid container spacing={4}>
          {/* Form */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                  {t('contact.formTitle')}
                </Typography>
                <form
                  action="https://formspree.io/f/mqazoeew"
                  method="POST"
                  style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
                >
                  <TextField
                    label={t('contact.name')}
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t('contact.namePlaceholder')}
                    fullWidth
                    required
                  />
                  <TextField
                    label={t('contact.email')}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t('contact.emailPlaceholder')}
                    fullWidth
                    required
                  />
                  <TextField
                    label={t('contact.subject')}
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={t('contact.subjectPlaceholder')}
                    fullWidth
                    required
                  />
                  <TextField
                    label={t('contact.message')}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t('contact.messagePlaceholder')}
                    fullWidth
                    multiline
                    rows={5}
                    required
                  />
                  <Button variant="contained" size="large" type="submit">
                    {t('contact.btnSend')}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                  {t('contact.infoTitle')}
                </Typography>

                <Box sx={{ mb: 4 }}>
                  <Typography sx={{ mb: 2 }}>
                    <Link
                      href="https://github.com/InsightLaboratory"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </Link>
                  </Typography>
                  <Typography sx={{ mb: 2 }}>
                    <Link
                      href="https://www.linkedin.com/in/juanmtorres23/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </Link>
                  </Typography>
                  <Typography>
                    <Link
                      href="https://insightlaboratory.github.io"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      InsightLab
                    </Link>
                  </Typography>
                </Box>

                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                  {t('contact.interestedIn')}
                </Typography>
                <List dense>
                  {(t('contact.interests', { returnObjects: true }) as string[]).map(
                    (interest: string, idx: number) => (
                      <ListItem key={idx}>
                        <ListItemText primary={interest} />
                      </ListItem>
                    )
                  )}
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
