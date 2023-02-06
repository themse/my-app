// ex. https://github.com/remix-run/react-router/blob/dev/examples/data-router/src/app.tsx

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import { BaseLayout } from 'app/components/layouts/base/BaseLayout';
import AboutPage from 'pages/AboutPage';
import HomePage from 'pages/HomePage';
import { Loader } from 'components/Loader';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<BaseLayout />}>
      <Route index loader={HomePage.homeLoader} element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
    </Route>
  )
);

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose()); // TODO check
}

export const AppRoutes = () => {
  return <RouterProvider router={router} fallbackElement={<Loader />} />;
};
