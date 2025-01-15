import { formatProductCategory, formatProductPopularity } from 'utils';

const ProductCardAttribute = ({ caption, value, className }) => {
  return (
    <li className={`mr-2 text-12 ${className}`}>
      <span className="mr-1 text-fontPrimary/30">{caption}</span>
      <span className="text-fontPrimary md:text-14">{value}</span>
    </li>
  );
};

const ProductCardAttributes = ({ className, category, size, popularity }) => {
  const formattedCategory = formatProductCategory(category);
  const formattedPopularity = formatProductPopularity(popularity);

  return (
    <ul className={className}>
      {category && <ProductCardAttribute caption="Category:" value={formattedCategory} />}
      {size && <ProductCardAttribute caption="Size:" value={size} className="inline" />}
      {popularity && (
        <ProductCardAttribute
          caption="Popularity:"
          value={formattedPopularity}
          className="inline"
        />
      )}
    </ul>
  );
};

export default ProductCardAttributes;
