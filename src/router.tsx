import { createBrowserRouter } from 'react-router-dom';
import { Landing } from './pages/Landing';
import { Invitation } from './pages/Invitation';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/invitation',
    element: <Invitation />,
  },
]);
