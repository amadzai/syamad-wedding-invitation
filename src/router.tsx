import { createBrowserRouter } from 'react-router-dom';
import { Landing } from './pages/Landing';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/invitation',
    lazy: async () => {
      const { Invitation } = await import('./pages/Invitation');
      return { Component: Invitation };
    },
  },
]);
