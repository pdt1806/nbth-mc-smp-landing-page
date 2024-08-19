import { Outlet, ScrollRestoration } from 'react-router-dom';
import { Header } from '../Header';

const Layout = () => (
  <>
    <ScrollRestoration />
    <Header />
    <Outlet />
  </>
);

export default Layout;
