import * as React from 'react';
import SvgIcon from '@mui/material/SvgIcon';
import { useColorScheme } from '@mui/material/styles';

export default function SitemarkIcon() {
  const { mode } = useColorScheme();

  return (
    <SvgIcon >
      <svg width="126" height="140" viewBox="0 0 126 140" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginTop: '10px' }}>
        <path d="M62.8211 29.7433L23.7182 116.924C36.5388 111.795 50.0005 106.026 62.8211 100.898C75.6417 106.026 89.1034 111.795 101.924 116.924L62.8211 29.7433ZM62.8211 0.255859C83.9752 47.0512 104.488 93.2054 125.642 140.001C104.488 131.026 83.9752 122.693 62.8211 113.718C41.6671 122.693 21.154 131.026 0 140.001L62.8211 0.255859Z" fill="#FF3300" />
      </svg>
    </SvgIcon >
  );
}
