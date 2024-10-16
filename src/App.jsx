import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { SharedLayout } from 'components';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const OrderPage = lazy(() => import('./pages/OrderPage/OrderPage'));

const App = () => {
  return (
    <SharedLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<OrderPage />} />
        <Route path="/privacyPolicy" element={<p>Privacy Policy</p>} />
        <Route path="/termsOfServices" element={<p>Terms Of Services</p>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </SharedLayout>
  );
};

export default App;
