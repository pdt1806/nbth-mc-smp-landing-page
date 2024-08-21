import '@mantine/carousel/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { Notifications } from '@mantine/notifications';
import '@mantine/notifications/styles.css';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';

import All from './pages/All';
import Error404 from './pages/Error/404';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <All />,
      },
      {
        path: '*',
        element: <Error404 />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default function App() {
  return (
    <MantineProvider
      defaultColorScheme="dark"
      theme={createTheme({
        fontFamily: 'Chakra Petch, sans-serif',
      })}
    >
      <Notifications limit={5} autoClose={5000} />
      <RouterProvider router={router} />
    </MantineProvider>
  );
}
