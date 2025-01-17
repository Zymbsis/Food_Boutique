import { Icon } from 'shared';

const ProductCardImage = ({ className, name, img, is10PercentOff }) => {
  return (
    <div className={`relative rounded-[10px] bg-bgPrimary ${className}`}>
      <img src={img} alt={name} className={`h-full object-cover`} />
      {is10PercentOff && (
        <Icon
          iconId="discount"
          className="absolute right-[-5px] top-[-13px] size-[60px] animate-rotate"
        ></Icon>
      )}
    </div>
  );
};

export default ProductCardImage;
