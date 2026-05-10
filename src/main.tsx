import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { LocaleProvider } from './locale/LocaleProvider';
import { LocaleToggle } from './components/LocaleToggle';
import './styles/index.css';

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LocaleProvider>
      <LocaleToggle />
      <RouterProvider router={router} />
    </LocaleProvider>
  </StrictMode>,
);
