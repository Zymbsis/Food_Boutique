import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { SharedLayout } from 'components';

const HomePage = lazy(() => import('./pages/HomePage'));
const OrderPage = lazy(() => import('./pages/OrderPage'));

const App = () => {
  return (
    <SharedLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<OrderPage />} />
        <Route path="/privacy-policy" element={<p>Privacy Policy</p>} />
        <Route path="/terms-of-services" element={<p>TermsOfService</p>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </SharedLayout>
  );
};

export default App;
