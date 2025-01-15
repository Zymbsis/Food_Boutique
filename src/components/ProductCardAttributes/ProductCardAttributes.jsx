import { formatProductCategory, formatProductPopularity } from 'utils';

const ProductCardAttribute = ({ caption, value, className }) => {
  return (
    <li className={`text-12 mr-2 ${className}`}>
      <span className="mr-1 text-fontPrimary/30">{caption}</span>
      <span className="md:text-14">{value}</span>
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
