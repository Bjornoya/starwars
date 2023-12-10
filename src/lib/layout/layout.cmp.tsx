import React from 'react';
import { Container } from '@mui/material';

function Layout({ children }: { children: React.ReactNode }) {
  return <Container maxWidth="xl">{children}</Container>;
}

export default Layout;
