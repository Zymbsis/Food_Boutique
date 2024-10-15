import { useState } from 'react';
import { EMAIL_PATTERN } from '../../constants/index.js';
import css from './OrderForm.module.css';
import { useSelector } from 'react-redux';
import { selectDataForOrdering } from '../../redux/cart/selectors.js';

const OrderForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const data = useSelector(selectDataForOrdering);
  const handleChange = ({ target: { value } }) => {
    setEmail(value);
    if (error) setError('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    const value = e.target.email.value;
    if (!value.trim()) {
      setError('Please enter your email');
      return;
    }
    if (!EMAIL_PATTERN.test(value)) {
      setError('Invalid email format');
      return;
    }
    setEmail('');
    console.log(data);
    console.log(value);
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label htmlFor="email">Mail:</label>
      <input
        type="text"
        value={email}
        onChange={handleChange}
        name="email"
        id="email"
        placeholder="Enter your email"
      />
      {error && <span>{error}</span>}
      <button type="submit">Checkout</button>
    </form>
  );
};

export default OrderForm;
