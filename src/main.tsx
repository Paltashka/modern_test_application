import 'reflect-metadata';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { rootRoute, indexRoute, aboutRoute } from './__root';
import { AuthProvider } from './shared/context/AuthContext';
import './styles/index.css';
import { TYPES } from './core/types';
import { container } from './core/service/infversify.config';
import { AuthService } from './core/service/auth.service';
const authService = container.get<AuthService>(TYPES.AuthService);
const routeTree = rootRoute.addChildren([indexRoute, aboutRoute]);
const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
