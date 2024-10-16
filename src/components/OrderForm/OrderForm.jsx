import { useState } from 'react';
import { useSelector } from 'react-redux';
import { EMAIL_PATTERN } from 'constants';
import { selectDataForOrdering } from '@redux/cart/selectors.js';
import { orderProducts } from 'services';
import { useModalContext } from 'hooks';
import { SubscriptionError } from 'components';
import OrderSuccess from '../OrderSuccess/OrderSuccess.jsx';
import css from './OrderForm.module.css';

const OrderForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const { openModal, removeCart } = useModalContext();
  const data = useSelector(selectDataForOrdering);
  const handleChange = ({ target: { value } }) => {
    setEmail(value);
    if (error) setError('');
  };

  const handleSubmit = async e => {
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
    try {
      await orderProducts({ email, products: data });
      openModal(OrderSuccess);
      removeCart();
      setEmail('');
    } catch (error) {
      openModal(SubscriptionError);
    }
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
