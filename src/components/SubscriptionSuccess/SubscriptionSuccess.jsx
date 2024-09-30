import css from './SubscriptionSuccess.module.css';

const SubscriptionSuccess = () => {
  return (
    <div className={css.textWrapper}>
      <h3>
        Thanks for subscribing for <span>new</span> products
      </h3>
      <p>
        We promise you organic and high-quality products that will meet your
        expectations. Please stay with us and we promise you many pleasant
        surprises.
      </p>
    </div>
  );
};

export default SubscriptionSuccess;
