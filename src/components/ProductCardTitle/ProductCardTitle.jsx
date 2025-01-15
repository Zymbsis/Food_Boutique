const ProductCardTitle = ({ children, className }) => {
  return (
    <h3
      className={`mb-[10px] truncate text-18 font-medium text-fontPrimary md:text-20 ${className}`}
    >
      {children}
    </h3>
  );
};

export default ProductCardTitle;
