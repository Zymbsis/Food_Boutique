import '../src/shared/styles/base.css';
import 'modern-normalize';

import { Route, Routes } from 'react-router-dom';

import { HomePage, OrderPage } from 'pages';
import { Layout } from 'components';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<OrderPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
