// src/components/Quran/MemorizationTool.js
import { useState } from 'react';
import { Button, Typography, TextField } from '@mui/material';

const MemorizationTool = ({ ayah }) => {
  const [userInput, setUserInput] = useState('');
    
      return (
          <div>
                <Typography variant="h6">حاول كتابة الآية:</Typography>
                      <Typography paragraph>{ayah.text}</Typography>
                            <TextField 
                                    multiline
                                            fullWidth
                                                    value={userInput}
                                                            onChange={(e) => setUserInput(e.target.value)}
                                                                  />
                                                                        <Button 
                                                                                variant="contained" 
                                                                                        sx={{ mt: 2 }}
                                                                                                onClick={() => console.log('تم التحقق...')}
                                                                                                      >
                                                                                                              تحقق
                                                                                                                    </Button>
                                                                                                                        </div>
                                                                                                                          );
                                                                                                                          };