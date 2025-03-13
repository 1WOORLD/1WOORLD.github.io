import { useState, useEffect } from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import { useTranslation } from 'react-i18next';

const QuranSection = () => {
  const { t } = useTranslation();
    const [surahs, setSurahs] = useState([]);

      useEffect(() => {
          fetch('https://api.alquran.cloud/v1/quran/ar.alafasy')
                .then(res => res.json())
                      .then(data => setSurahs(data.data.surahs));
                        }, []);

                          return (
                              <Box sx={{ padding: 3 }}>
                                    <Typography variant="h4" gutterBottom>
                                            {t('header.quran')}
                                                  </Typography>
                                                        {surahs.map(surah => (
                                                                <Card key={surah.number} sx={{ marginBottom: 2 }}>
                                                                          <CardContent>
                                                                                      <Typography variant="h6">{surah.name} ({surah.englishName})</Typography>
                                                                                                  <Typography>عدد الآيات: {surah.numberOfAyahs}</Typography>
                                                                                                            </CardContent>
                                                                                                                    </Card>
                                                                                                                          ))}
                                                                                                                              </Box>
                                                                                                                                );
                                                                                                                                };

                                                                                                                                export default QuranSection;