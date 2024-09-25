import { Box, Flex } from '@mantine/core';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { Footer } from '../Footer';
import { Header } from '../Header';

const Layout = () => (
  <Flex mih="100vh" direction="column">
    <ScrollRestoration />
    <Header />
    <Box style={{ flexGrow: 1 }} />
    <Outlet />
    <Box style={{ flexGrow: 1 }} />
    <Footer />
  </Flex>
);

export default Layout;
