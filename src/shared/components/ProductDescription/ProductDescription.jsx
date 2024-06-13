import css from './ProductDescription.module.css';

const ProductDescription = ({ product }) => {
  return (
    <>
      <li className={css.descriptionItem}>
        <span>Category: </span>
        <span>{product.category.replace('_&_', ' & ').replace('_', ' ')}</span>
      </li>
      <li className={css.descriptionItem}>
        <span>Size: </span>
        <span>{product.size}</span>
      </li>
      <li className={css.descriptionItem}>
        <span>Popularity: </span>
        <span>{(product.popularity / 10000).toFixed(2)}</span>
      </li>
    </>
  );
};

export default ProductDescription;
