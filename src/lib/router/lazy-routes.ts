import { lazy } from 'react';

const lazyRoutes = {
  layouts: {
    Private: lazy(() => import('@/layouts/PrivateLayout.tsx')),
    Public: lazy(() => import('@/layouts/PublicLayout.tsx'))
  },
  pages: {
    Login: lazy(() => import('@/pages/Login.tsx')),
    Register: lazy(() => import('@/pages/Register.tsx')),
    Home: lazy(() => import('@/pages/Home.tsx')),
    NotFound: lazy(() => import('@/pages/NotFound.tsx'))
  },
  core: {
    ErrorBoundary: lazy(() => import('@/components/core/ErrorBoundary.tsx'))
  }
};

export default lazyRoutes;
