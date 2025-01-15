import css from './ProductCard.module.css';

const ProductCard = ({ img, name, category, size, popularity, price, desc, Button, className }) => {
  const isInCart = false;

  return (
    <>
      <div className={`${css.imgWrapper} ${className}`}>
        <img src={img} alt={name} />
      </div>
      <div className={css.contentWrapper}>
        <h3>{name}</h3>
        <ul className={css.featuresList}>
          <li>
            <span>Category:</span>
            <span>{category}</span>
          </li>
          <li>
            <span>Size:</span>
            <span>{size}</span>
          </li>
          <li>
            <span>Popularity:</span>
            <span>{popularity}</span>
          </li>
        </ul>
        {desc && (
          <div className={css.descWrapper}>
            <p>{desc}</p>
          </div>
        )}
      </div>
      <div className={css.actionWrapper}>
        ${price.toFixed(2)}
        <button type="button">
          <Button isInCart={isInCart} />
        </button>
      </div>
    </>
  );
};

export default ProductCard;
