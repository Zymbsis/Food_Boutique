import css from './TextContent.module.css';

const TextContent = () => {
  return (
    <>
      <h1 className={css.title}>
        Welcome to the <span>Food</span> Boutique!
      </h1>
      <p className={css.text}>
        With Food Boutique, you`re not just subscribing to food, you`re signing
        up for a fresher, fitter, and happier you.
      </p>
    </>
  );
};

export default TextContent;
