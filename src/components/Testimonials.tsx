import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import { useTheme } from '@mui/system';
import Icon from './IconArrow.tsx';

const userTestimonials = [
  {
    avatar: <Avatar alt="Иemy Sharp" src="/static/images/avatar/1.jpg" />,
    name: 'Иван Петров',
    occupation: 'Инженер-геодезист',
    testimonial:
      "Сотрудничаем с ГК 'Геоскан' уже несколько лет. Каждая поставка данных с дронов выполняется на высочайшем уровне. Точные карты, высокое качество изображений и профессиональный подход — все, что нужно для эффективной работы в геодезии и картографии. Рекомендуем как надежного партнера!",
  },
  {
    avatar: <Avatar alt="Аravis Howard" src="/static/images/avatar/2.jpg" />,
    name: 'Алексей Смирнов',
    occupation: 'Менеджер по проектам',
    testimonial:
      "Компания Geoscan предоставила нам уникальные решения для мониторинга земельных участков. Их дроновые технологии позволили значительно повысить точность данных и ускорить процессы сбора информации. Очень довольны сотрудничеством!",
  },
  {
    avatar: <Avatar alt="Вindy Baker" src="/static/images/avatar/3.jpg" />,
    name: 'Василий Иванов',
    occupation: 'Специалист по АД',
    testimonial:
      'Наше взаимодействие с компанией Geoscan началось недавно, и мы уже заметили явные преимущества: все данные предоставляются быстро, с минимальными усилиями с нашей стороны. Система проста в использовании, а результаты — точные и информативные. Очень довольны!',
  },
  {
    avatar: <Avatar alt="Дemy Sharp" src="/static/images/avatar/4.jpg" />,
    name: 'Дмитрий Иванов',
    occupation: 'Директор по развитию',
    testimonial:
      "Компания Geoscan — это пример надежного партнера, на которого можно полагаться. Они всегда придерживаются сроков и качественно выполняют все задачи. Мы работаем с ними на долгосрочной основе и уверены в их профессионализме.",
  },
  {
    avatar: <Avatar alt="Еravis Howard" src="/static/images/avatar/5.jpg" />,
    name: 'Елена Кузнецова',
    occupation: 'Руководитель IT-отдела',
    testimonial:
      "Geoscan — это не просто компания, а настоящий лидер в области геопространственных технологий. Их инновационные разработки позволяют нам оптимизировать процессы на всех этапах работы. Удивительный уровень качества и поддержки!",
  },
  {
    avatar: <Avatar alt="Оindy Baker" src="/static/images/avatar/6.jpg" />,
    name: 'Олег Морозов',
    occupation: 'географ-аналитик',
    testimonial:
      "Мы использовали решения Geoscan для создания карт и анализа территорий. Данные всегда точные, а технологии — современные. Оборудование компании позволяет решать задачи с максимальной эффективностью, и мы уверены, что продолжим сотрудничество с ними в будущем.",
  },
];

const whiteLogos = [
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628e8573c43893fe0ace_Sydney-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d520d0517ae8e8ddf13_Bern-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f46794c159024c1af6d44_Montreal-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e891fa22f89efd7477a_TerraLight.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a09d1f6337b1dfed14ab_colorado-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5caa77bf7d69fb78792e_Ankara-white.svg',
];

const darkLogos = [
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628889c3bdf1129952dc_Sydney-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d4d8b829a89976a419c_Bern-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f467502f091ccb929529d_Montreal-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e911fa22f2203d7514c_TerraDark.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a0990f3717787fd49245_colorado-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5ca4e548b0deb1041c33_Ankara-black.svg',
];

const logoStyle = {
  width: '64px',
  opacity: 0.3,
};

export default function Testimonials() {
  const theme = useTheme();
  const logos = theme.palette.mode === 'light' ? darkLogos : whiteLogos;

  return (
    <Container
      id="testimonials"
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
          Отзывы
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          Отзывы - это наглядный пример нашей честной и надежной работы.
          Работая с Geoscan вы получаете не только надёжность, но и уверенность в своих результатах
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {userTestimonials.map((testimonial, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index} sx={{ display: 'flex' }}>
            <Card
              variant="outlined"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexGrow: 1,
              }}
            >
              <CardContent>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{ color: 'text.primary' }}
                >
                  {testimonial.testimonial}
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <CardHeader
                  avatar={testimonial.avatar}
                  title={testimonial.name}
                  subheader={testimonial.occupation}
                />
                <Icon />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
