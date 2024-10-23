import { Title } from 'shared';
import css from './OrderSuccess.module.css';

const OrderSuccess = () => {
  return (
    <div className={css.wrapper}>
      <Title className={css.title}>Order success</Title>
      <p className={css.text}>
        Thank you for shopping at Food Boutique. Your order has been received
        and is now being freshly prepared just for you! Get ready to indulge in
        nourishing goodness, delivered right to your doorstep. We`re thrilled to
        be part of your journey to better health and happiness.
      </p>
    </div>
  );
};

export default OrderSuccess;
