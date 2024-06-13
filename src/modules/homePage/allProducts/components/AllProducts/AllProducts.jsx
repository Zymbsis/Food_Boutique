import { useAllProduct } from '../../hooks/useAllProduct';
import { ProductListTitle, OrganicFood } from 'shared';
import Product from '../Product/Product';
import ProductsNavigation from '../ProductsNavigation/ProductsNavigation';
import NothingFound from '../NothingFound/NothingFound';
import clsx from 'clsx';
import css from './AllProducts.module.css';

const ProductList = () => {
  const {
    page,
    allProducts,
    totalPages,
    loading,
    error,
    sectionRef,
    setAllowScroll,
  } = useAllProduct();

  return (
    <section
      ref={sectionRef}
      className={clsx(css.section, {
        [css.optionalContainer]:
          totalPages === 1 ||
          totalPages === page ||
          allProducts.length === 0 ||
          error,
      })}
    >
      <ProductListTitle className="visually-hidden">
        Organic Food
      </ProductListTitle>
      {loading ? (
        <OrganicFood className={css.loader} />
      ) : allProducts.length > 0 ? (
        <ul className={css.productList}>
          {allProducts.map(item => (
            <li className={css.productItem} key={item._id}>
              <Product product={item} />
            </li>
          ))}
        </ul>
      ) : error ? (
        <p>Error</p>
      ) : (
        <NothingFound />
      )}

      {totalPages > 1 && (
        <ProductsNavigation setter={setAllowScroll} totalPages={totalPages} />
      )}
    </section>
  );
};

export default ProductList;
