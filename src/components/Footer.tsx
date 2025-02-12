import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import TelegramIcon from '@mui/icons-material/Telegram';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import BackHandIcon from '@mui/icons-material/BackHand';
import SitemarkIcon from './SitemarkIcon.tsx';

function Copyright() {
  return (
    <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
      {'Copyright © '}
      <Link color="text.secondary" href="https://mui.com/">
        Sitemark
      </Link>
      &nbsp;
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Container
      id="footer"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: 'center', md: 'left' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            minWidth: { xs: '100%', sm: '60%' },
          }}
        >
          <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
            <SitemarkIcon />
            <Typography variant="body2" gutterBottom sx={{ fontWeight: 600, mt: 2 }}>
              Присоединяйтесь к нам
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
              Также подписывайте на нашу рассылку, чтобы узнавать первыми о наших новостях
            </Typography>
            <InputLabel htmlFor="email-newsletter">Email</InputLabel>
            <Stack direction="row" spacing={1} useFlexGap>
              <TextField
                id="email-newsletter"
                hiddenLabel
                size="small"
                variant="outlined"
                fullWidth
                aria-label="Enter your email address"
                placeholder="Ваш email"
                slotProps={{
                  htmlInput: {
                    autoComplete: 'off',
                    'aria-label': 'Enter your email address',
                  },
                }}
                sx={{ width: '250px' }}
              />
              <Button
                variant="contained"
                color="primary"
                size="small"
                sx={{ flexShrink: 0 }}
              >
                Подписаться
              </Button>
            </Stack>
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
            Навигация
          </Typography>
          <Link color="text.secondary" variant="body2" href="#" target="_blank" rel="noopener noreferrer">
            Преимущества
          </Link>
          <Link color="text.secondary" variant="body2" href="#" target="_blank" rel="noopener noreferrer">
            Отзывы
          </Link>
          <Link color="text.secondary" variant="body2" href="#" target="_blank" rel="noopener noreferrer">
            Наши стандарты
          </Link>
          <Link color="text.secondary" variant="body2" href="#" target="_blank" rel="noopener noreferrer">
            Цены
          </Link>
          <Link color="text.secondary" variant="body2" href="#" target="_blank" rel="noopener noreferrer">
            FAQs
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
            Компания
          </Typography>
          <Link color="text.secondary" variant="body2" href="https://www.geoscan.ru/ru/about" target="_blank" rel="noopener noreferrer">
            О нас
          </Link>
          <Link color="text.secondary" variant="body2" href="https://www.geoscan.ru/ru/vacancies" target="_blank" rel="noopener noreferrer">
            Карьера
          </Link>
          <Link color="text.secondary" variant="body2" href="https://www.geoscan.ru/ru/press-releases" target="_blank" rel="noopener noreferrer">
            Пресса
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
            Политика
          </Typography>
          <Link color="text.secondary" variant="body2" href="https://www.geoscan.ru/ru/about/privacy-policy" target="_blank" rel="noopener noreferrer">
            Условия
          </Link>
          <Link color="text.secondary" variant="body2" href="https://www.geoscan.ru/ru/about/privacy-policy" target="_blank" rel="noopener noreferrer">
            Конфиденциальности
          </Link>
          <Link color="text.secondary" variant="body2" href="https://www.geoscan.ru/ru/contacts" target="_blank" rel="noopener noreferrer">
            Контакты
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          pt: { xs: 4, sm: 8 },
          width: '100%',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <div>
          <Link color="text.secondary" variant="body2" href="https://www.geoscan.ru/ru/about/privacy-policy" target="_blank" rel="noopener noreferrer">
            Политика конфиденциальности
          </Link>
          <Typography sx={{ display: 'inline', mx: 0.5, opacity: 0.5 }}>
            &nbsp;•&nbsp;
          </Typography>
          <Link color="text.secondary" variant="body2" href="https://www.geoscan.ru/ru/about/privacy-policy" target="_blank" rel="noopener noreferrer">
            Условия использования
          </Link>
          <Copyright />
        </div>
        <Stack
          direction="row"
          spacing={1}
          useFlexGap
          sx={{ justifyContent: 'left', color: 'text.secondary' }}
        >
          <IconButton
            color="inherit"
            size="medium"
            href="https://t.me/geoscan"
            aria-label="Telegram"
            sx={{ alignSelf: 'center' }}
          >
            <TelegramIcon />
          </IconButton>
          <IconButton
            color="inherit"
            size="medium"
            href="https://dzen.ru/geoscan"
            aria-label="X"
            sx={{ alignSelf: 'center' }}
          >
            <BackHandIcon />
          </IconButton>
          <IconButton
            color="inherit"
            size="medium"
            href="https://vk.com/geoscan.aero"
            aria-label="LinkedIn"
            sx={{ alignSelf: 'center' }}
          >
            <ArrowCircleRightIcon />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}
