import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/system';

const whiteLogos = [
  '/assets/TumGu.svg',
  '/assets/alrosa.svg',
  '/assets/RZD.svg',
  '/assets/Uter.svg',
  '/assets/RBK.svg',
  '/assets/Sk.svg',
];

const darkLogos = [
  '/assets/TumGu.svg',
  '/assets/alrosa.svg',
  '/assets/RZD.svg',
  '/assets/Uter.svg',
  '/assets/RBK.svg',
  '/assets/Sk.svg',
];

const logoStyle = {
  width: '100px',
  height: '80px',
  margin: '0 32px',
  opacity: 0.7,
};

export default function LogoCollection() {
  const theme = useTheme();
  const logos = theme.palette.mode === 'light' ? darkLogos : whiteLogos;

  return (
    <Box id="logoCollection" sx={{ py: 4 }}>
      <Typography
        component="p"
        variant="subtitle2"
        align="center"
        sx={{ color: 'text.secondary' }}
      >
        Компании и организации, доверяющие спутниковым данным Geoscan
      </Typography>
      <Grid container sx={{ justifyContent: 'center', mt: 0.5, opacity: 0.6 }}>
        {logos.map((logo, index) => (
          <Grid item key={index}>
            <img
              src={logo}
              alt={`Fake company number ${index + 1}`}
              style={logoStyle}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
