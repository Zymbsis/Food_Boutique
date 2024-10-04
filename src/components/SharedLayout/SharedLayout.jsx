import { Suspense } from 'react';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import css from './SharedLayout.module.css';
import OrganicFoodBadge from '../OrganicFoodBadge/OrganicFoodBadge.jsx';

const SharedLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <Suspense
          fallback={
            <div className={css.fallback}>
              <OrganicFoodBadge />
            </div>
          }
        >
          {children}
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default SharedLayout;
