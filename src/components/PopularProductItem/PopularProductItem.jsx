import { popular } from 'constants';
import ProductCartImage from '../ProductCardImage/ProductCardImage.jsx';
import ProductCardInfo from '../ProductCardInfo/ProductCardInfo.jsx';
import CartItemControl from '../CartItemControl/CartItemControl.jsx';
import css from './PopularProductItem.module.css';

const PopularProductItem = ({ product, handleOpenModal }) => {
  const { img, name, _id } = product;

  return (
    <>
      <ProductCartImage
        img={img}
        name={name}
        handleClick={handleOpenModal}
        className={css.imgWrapper}
        _id={_id}
      />
      <div>
        <ProductCardInfo product={product} renderLocation={popular} />
      </div>
      <CartItemControl product={product} renderLocation={popular} />
    </>
  );
};

export default PopularProductItem;
