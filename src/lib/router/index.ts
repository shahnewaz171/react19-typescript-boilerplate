import { createBrowserRouter } from 'react-router';
import lazyRoutes from '@/lib/router/lazy-routes';

const {
  layouts: { Private: PrivateLayout, Public: PublicLayout },
  pages: { Login, Register, Home, NotFound },
  core: { ErrorBoundary }
} = lazyRoutes;

const router = createBrowserRouter([
  {
    Component: PrivateLayout,
    ErrorBoundary: ErrorBoundary,
    children: [
      {
        index: true,
        Component: Home
      },
      { path: '*', Component: NotFound }
    ]
  },
  {
    Component: PublicLayout,
    ErrorBoundary: ErrorBoundary,
    children: [
      { path: 'login', Component: Login },
      { path: 'register', Component: Register },
      { path: '*', Component: NotFound }
    ]
  }
]);

export default router;
