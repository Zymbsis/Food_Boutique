const ProductCardTitle = ({ children, className }) => {
  return (
    <h3 className={`text-18 md:text-20 mb-[10px] truncate font-medium ${className}`}>{children}</h3>
  );
};

export default ProductCardTitle;
