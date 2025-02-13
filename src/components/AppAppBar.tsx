import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ColorModeIconDropdown from '.././theme/ColorModeIconDropdown.tsx';
import Sitemark from './SitemarkIcon.tsx';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: (theme.vars || theme).shadows[1],
  padding: '10px 20px',
}));

export default function AppAppBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 'calc(var(--template-frame-height, 0px) + 10px)',
        width: '100%',
      }}
    >
      <Container maxWidth={false}>
        <StyledToolbar variant="dense" disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
            <Sitemark />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button component="a" href="#features" variant="text" color="info" sx={{ fontSize: '0.875rem', padding: '8px 12px' }}>
                Преимущества
              </Button>
              <Button component="a" href="#features" variant="text" color="info" sx={{ fontSize: '0.875rem', padding: '8px 12px' }}>
                Отзывы
              </Button>
              <Button component="a" href="#highlights" variant="text" color="info" sx={{ fontSize: '0.875rem', padding: '8px 12px' }}>
                Особенности
              </Button>
              <Button component="a" href="#pricing" variant="text" color="info" sx={{ fontSize: '0.875rem', padding: '8px 12px' }}>
                Тарифы
              </Button>
              <Button component="a" href="#faq" variant="text" color="info" sx={{ minWidth: 0, fontSize: '0.875rem', padding: '8px 12px' }}>
                FAQ
              </Button>
              <Button component="a" href="#footer" variant="text" color="info" sx={{ minWidth: 0, fontSize: '0.875rem', padding: '8px 12px' }}>
                Блог
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 2,
              alignItems: 'center',
            }}
          >
            <Button color="primary" variant="text" sx={{ fontSize: '0.875rem', padding: '8px 12px' }}>
              Войти
            </Button>
            <Button color="primary" variant="contained" sx={{ fontSize: '0.875rem', padding: '8px 12px' }}>
              Создать
            </Button>
            <ColorModeIconDropdown size="medium" />
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
            <ColorModeIconDropdown size="medium" />
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  top: 'var(--template-frame-height, 0px)',
                },
              }}
            >
              <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>

                <MenuItem component="a" href="#features" >Преимущества</MenuItem>
                <MenuItem component="a" href="#features" >Цены</MenuItem>
                <MenuItem component="a" href="#highlights" >Особенности</MenuItem>
                <MenuItem component="a" href="#pricing" >Цены</MenuItem>
                <MenuItem component="a" href="#faq" >FAQ</MenuItem>
                <MenuItem component="a" href="#footer">Блог</MenuItem>
                <Divider sx={{ my: 3 }} />
                <MenuItem>
                  <Button color="primary" variant="contained" fullWidth>
                    Создать
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button color="primary" variant="outlined" fullWidth>
                    Войти
                  </Button>
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
