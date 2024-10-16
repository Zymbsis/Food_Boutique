import { useSelector } from 'react-redux';
import { useModalContext, useCustomersFetch } from 'hooks';
import { orderProducts } from 'services';
import { selectDataForOrdering } from '@redux/cart/selectors.js';
import { OrderSuccess, SubscriptionError } from 'components';
import css from './OrderForm.module.css';

const OrderForm = () => {
  const data = useSelector(selectDataForOrdering);
  const { openModal, removeCart } = useModalContext();

  const orderRequest = async email => {
    try {
      await orderProducts({ email: email, products: data });
      openModal(OrderSuccess);
      removeCart();
      setEmail('');
    } catch (error) {
      openModal(SubscriptionError);
    }
  };

  const { email, invalidEmail, handleFormSubmit, handleInputChange, setEmail } =
    useCustomersFetch(orderRequest);

  return (
    <form onSubmit={handleFormSubmit} className={css.form}>
      <label htmlFor="email">Mail:</label>
      <input
        type="text"
        value={email}
        onChange={handleInputChange}
        name="email"
        id="email"
        placeholder="Enter your email"
      />
      {invalidEmail && <span>{invalidEmail}</span>}
      <button type="submit">Checkout</button>
    </form>
  );
};

export default OrderForm;
