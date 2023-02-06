import { Outlet } from 'react-router-dom';

import { Header } from './Header';
import { Footer } from './Footer';
import { FetcherInProgress } from 'app/components/FetcherInProgress';

export const BaseLayout = () => {
  return (
    <>
      <div>
        <Header />

        <main>
          <Outlet />
        </main>

        <Footer />
      </div>

      <FetcherInProgress />
    </>
  );
};
