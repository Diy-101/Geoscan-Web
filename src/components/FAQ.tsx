import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FAQ() {
  const [expanded, setExpanded] = React.useState<string[]>([]);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(
        isExpanded
          ? [...expanded, panel]
          : expanded.filter((item) => item !== panel),
      );
    };

  return (
    <Container
      id="faq"
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
      <Typography
        component="h2"
        variant="h4"
        sx={{
          color: 'text.primary',
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        Часто задаваемые вопросы
      </Typography>
      <Box sx={{ width: '100%' }}>
        <Accordion
          expanded={expanded.includes('panel1')}
          onChange={handleChange('panel1')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <Typography component="span" variant="subtitle2">
              Как мне связаться со службой поддержки, если у меня есть вопрос или проблема?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '70%' } }}
            >
              Вы можете связаться с нашей службой поддержки клиентов по электронной почте&nbsp;
              <Link href="mailto:support@email.com">support@email.com</Link>
              &nbsp;или позвонив по нашему бесплатному номеру. Наша служба поддержки готова
              помочь вам с любыми вопросами и проблемами.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded.includes('panel2')}
          onChange={handleChange('panel2')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2d-content"
            id="panel2d-header"
          >
            <Typography component="span" variant="subtitle2">
              Могут ли мне возместить средства за услугу, если она не соответствует моим ожиданиям или не удовлетворяет моим требованиям?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '70%' } }}
            >
              При полной аргументации и несоответствии с нашими требованиями, мы готовы вернуть
              денежные средства клиенту. Однако для этого должны быть вески причины.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded.includes('panel3')}
          onChange={handleChange('panel3')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3d-content"
            id="panel3d-header"
          >
            <Typography component="span" variant="subtitle2">
              Что отличает ваш продукт от других на рынке?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '70%' } }}
            >
              Наш продукт отличается своей адаптируемостью, долговечностью,
              и инновационными функциями. Мы уделяем приоритетное внимание удовлетворению пользователей и
              постоянно стремимся превзойти их ожидания во всех аспектах.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded.includes('panel4')}
          onChange={handleChange('panel4')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4d-content"
            id="panel4d-header"
          >
            <Typography component="span" variant="subtitle2">
              Есть ли гарантия на продукт и на что она распространяется?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '70%' } }}
            >
              Да, на наш продукт распространяется гарантия 10 дней. Если у вас возникнут какие-либо проблемы,
              на которые распространяется гарантия, пожалуйста, свяжитесь с нашей службой поддержки клиентов.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Container>
  );
}
