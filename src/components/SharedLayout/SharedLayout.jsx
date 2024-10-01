import { Suspense } from 'react';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import { OrganicFood } from '../../shared/index.js';
import css from './SharedLayout.module.css';

const SharedLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <Suspense
          fallback={
            <div className={css.fallback}>
              <OrganicFood />
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
