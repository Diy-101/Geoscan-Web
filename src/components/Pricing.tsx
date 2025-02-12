import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

interface Tier {
  type: string;
  buttonVariant: 'outlined' | 'contained';
  buttonColor: 'primary' | 'secondary';
  buttonText: string;
  title: string;
  price: string;
  description: string[];
  subheader?: string;
}

const tiers: Tier[] = [
  {
    title: 'Бесплатный',
    price: '0',
    description: ['Поддержка 24/7', '4 бесплатные фотографии'],
    buttonText: 'Начни бесплатно',
    buttonVariant: 'outlined',
    buttonColor: 'primary',
    type: 'home',
  },
  {
    title: 'Профессиональный',
    subheader: 'Recommended',
    price: '0 - Ω',
    description: [
      'Поддержка 24/7',
      'Хранение фотографий 30 дней',
      'Приоритетная поддержка',
      'Разные виды съемок',
    ],
    buttonText: 'Выбрать зоны',
    buttonVariant: 'contained',
    buttonColor: 'secondary',
    type: 'global',
  },
  {
    title: 'Особое сотрудничество',
    price: 'Договорная',
    description: [
      'Особые условия',
      'Скидки постоянным клиентам',
      'Высший уровень поддержки',
      'Поддержка по номеру телефона',
    ],
    buttonText: 'Связаться',
    buttonVariant: 'outlined',
    buttonColor: 'primary',
    type: 'education',
  },
];

const Pricing: React.FC = () => {

  const handleButtonClick = (tier: Tier) => {
    let url: string;
    if (tier.type === 'home') {
      url = '#';
    } else if (tier.type === 'global') {
      url = '/global-operations';
    } else if (tier.type === 'education') {
      url = '/education';
    } else {
      url = '/default';
    }

    window.location.href = url;
  };

  return (
    <Container
      id="pricing"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
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
      >
        <Typography
          component="h2"
          variant="h4"
          gutterBottom
          sx={{ color: 'text.primary' }}
        >
          Цены
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          У нас существует различное количество ценовых планов. <br />
          С некоторыми из них вы можете ознакомиться ниже
        </Typography>
      </Box>
      <Grid
        container
        spacing={3}
        sx={{ alignItems: 'center', justifyContent: 'center', width: '100%' }}
      >
        {tiers.map((tier) => (
          <Grid
            size={{ xs: 12, sm: tier.title === 'Enterprise' ? 12 : 6, md: 4 }}
            key={tier.title}
          >
            <Card
              sx={[
                {
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 4,
                },
                tier.title === 'Professional' &&
                ((theme) => ({
                  border: 'none',
                  background:
                    'radial-gradient(circle at 50% 0%, hsl(220, 20%, 35%), hsl(220, 30%, 6%))',
                  boxShadow: `0 8px 12px hsla(220, 20%, 42%, 0.2)`,
                  ...theme.applyStyles('dark', {
                    background:
                      'radial-gradient(circle at 50% 0%, hsl(220, 20%, 20%), hsl(220, 30%, 16%))',
                    boxShadow: `0 8px 12px hsla(0, 0%, 0%, 0.8)`,
                  }),
                })),
              ]}
            >
              <CardContent>
                <Box
                  sx={[
                    {
                      mb: 1,
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: 2,
                    },
                    tier.title === 'Professional'
                      ? { color: 'grey.100' }
                      : { color: '' },
                  ]}
                >
                  <Typography component="h3" variant="h6">
                    {tier.title}
                  </Typography>
                  {tier.title === 'Professional' && (
                    <Chip icon={<AutoAwesomeIcon />} label={tier.subheader} />
                  )}
                </Box>
                <Box
                  sx={[
                    {
                      display: 'flex',
                      alignItems: 'baseline',
                    },
                    tier.title === 'Professional'
                      ? { color: 'grey.50' }
                      : { color: null },
                  ]}
                >
                  <Typography component="h3" variant="h2">
                    ${tier.price}
                  </Typography>
                  <Typography component="h3" variant="h6">
                    &nbsp; в месяц
                  </Typography>
                </Box>
                <Divider sx={{ my: 2, opacity: 0.8, borderColor: 'divider' }} />
                {tier.description.map((line) => (
                  <Box
                    key={line}
                    sx={{ py: 1, display: 'flex', gap: 1.5, alignItems: 'center' }}
                  >
                    <CheckCircleRoundedIcon
                      sx={[
                        {
                          width: 20,
                        },
                        tier.title === 'Professional'
                          ? { color: 'primary.light' }
                          : { color: 'primary.main' },
                      ]}
                    />
                    <Typography
                      variant="subtitle2"
                      component={'span'}
                      sx={[
                        tier.title === 'Professional'
                          ? { color: 'grey.50' }
                          : { color: null },
                      ]}
                    >
                      {line}
                    </Typography>
                  </Box>
                ))}
              </CardContent>
              <CardActions>
                <Button
                  onClick={() => handleButtonClick(tier)}  // Передаем tier в обработчик
                  fullWidth
                  variant={tier.buttonVariant as 'outlined' | 'contained'}
                  color={tier.buttonColor as 'primary' | 'secondary'}
                >
                  {tier.buttonText}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Pricing;
