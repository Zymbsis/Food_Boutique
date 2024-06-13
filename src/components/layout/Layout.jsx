import { Suspense } from 'react';
import Header from './Header/Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<div>LOADING</div>}>{children}</Suspense>
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
