import React from 'react';
import { Container } from '@mui/material';

function Layout({ children }: { children: React.ReactNode }) {
  return <Container maxWidth="lg">{children}</Container>;
}

export default Layout;
