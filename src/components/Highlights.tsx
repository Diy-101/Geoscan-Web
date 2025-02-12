import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import SpeedIcon from '@mui/icons-material/Speed';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import Icon from './IconArrow.tsx';
import { useTheme } from '@mui/material/styles';

const items = [
  {
    icon: <SettingsSuggestRoundedIcon />,
    title: 'Комплексное производство',
    description:
      'Каждый продукт, сошедший с конвейера, удовлетворяет стандартам качества и всем требованиям клиентов',
  },
  {
    icon: <SpeedIcon />,
    title: 'Скорость доставки данных',
    description:
      'Вы можете быть уверенны,что в нужный момент ваши данные будут доставлены во время',
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: 'Работа с клиентами',
    description:
      'Каждый клиент для нас это отдельный случай, требующий индивидуального подхода',
  },
  {
    icon: <AutoFixHighRoundedIcon />,
    title: 'Инновационные технологии',
    description:
      'Все новые технологии, вводимые в производство, проходят тщательную проверку качества',
  },
  {
    icon: <SupportAgentRoundedIcon />,
    title: 'Служба поддержики',
    description:
      'Наша служба поддержки работает 24/7, чтобы помочь вам в любой ситуации',
  },
  {
    icon: <QueryStatsRoundedIcon />,
    title: 'Данные ДЗЗ',
    description:
      'Данные ДЗЗ, которые вы получаете со спутников, проходят тщательную проверку и валидацию',
  },
];

export default function Highlights() {
  const theme = useTheme();

  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: 'white',
        bgcolor: theme.palette.mode === 'dark' ? '#000000' : '#ffffff',
      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'center' },
          }}
        ><Icon />
          <Typography component="h2" variant="h4" gutterBottom sx={{ color: 'text.primary' }}>
            Наши стандарты
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Изучите наши стандарты, чтобы увидеть преимущества нашего продукта и сделайте правильный выбор.
            Надежность, скорость, интуитивность - лишь не многие аспекты, которыми мы дорожим
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {items.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Stack
                direction="column"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  color: 'inherit',
                  p: 3,
                  height: '100%',
                  borderColor: 'hsla(220, 25%, 25%, 0.3)',
                  backgroundColor: theme.palette.mode === 'dark' ? '#000000' : '#ffffff',
                }}
              >
                <Box sx={{ opacity: '50%', color: 'text.primary' }}>{item.icon}</Box>
                <div>
                  <Typography gutterBottom sx={{ fontWeight: 'medium', color: 'text.primary' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.primary' }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
