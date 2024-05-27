import '../src/shared/styles/base.css';
import 'modern-normalize';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Test from './Test';
import Test2 from './Test2';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/cart" element={<Test2 />} />
      </Routes>
    </>
  );
};

export default App;
