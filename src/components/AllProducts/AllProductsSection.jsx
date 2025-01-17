import { useSelector } from 'react-redux';
import {
  selectAllProductsList,
  selectIsAllProductsError,
  selectIsAllProductsLoading,
  selectTotalPages,
} from '@redux/productLists/selectors.js';
import { Pagination, OrganicFoodBadge, NothingFound } from 'components';
import AllProductsList from './AllProductsList.jsx';

const AllProductsSection = () => {
  const allProducts = useSelector(selectAllProductsList);
  const totalPages = useSelector(selectTotalPages);
  const loading = useSelector(selectIsAllProductsLoading);
  const error = useSelector(selectIsAllProductsError);

  const hasPagination = totalPages > 1 && !loading && !error;
  const noContent = !loading && !error && !allProducts.length;

  return (
    <section className="relative flex flex-1 flex-col justify-between">
      <h2 className="visually-hidden">Organic Food</h2>
      {loading && (
        <div className="mx-auto pb-20 pt-[60px] md:pb-52 md:pt-28 xl:pt-36">
          <OrganicFoodBadge className="static size-40" />
        </div>
      )}
      {error && <p>Error</p>}
      {noContent && <NothingFound />}
      <AllProductsList />
      {hasPagination && <Pagination />}
    </section>
  );
};

export default AllProductsSection;
