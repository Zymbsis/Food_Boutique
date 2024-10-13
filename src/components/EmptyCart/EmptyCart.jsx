import css from './EmptyCart.module.css';

const EmptyCart = () => {
  return (
    <div className={css.wrapper}>
      <p className={css.title}>
        Your basket is <span>empty...</span>
      </p>
      <p className={css.text}>
        Go to the main page to select your favorite products and add them to the
        cart.
      </p>
    </div>
  );
};

export default EmptyCart;
