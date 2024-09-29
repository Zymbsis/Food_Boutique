import { Suspense } from 'react';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';

const SharedLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <Suspense>{children}</Suspense>
      </main>
      <Footer />
    </>
  );
};

export default SharedLayout;
