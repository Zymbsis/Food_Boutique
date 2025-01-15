import { useSelector } from 'react-redux';
import {
  selectIsAllProductsError,
  selectIsAllProductsLoading,
  selectTotalPages,
} from '@redux/productLists/selectors.js';
import { AllProductsList, Pagination, OrganicFoodBadge } from 'components';

const AllProductsSection = () => {
  const totalPages = useSelector(selectTotalPages);
  const loading = useSelector(selectIsAllProductsLoading);
  const error = useSelector(selectIsAllProductsError);

  return (
    <section className="flex flex-col gap-10 md:gap-[50px] xl:w-[925px] xl:gap-10 justify-between">
      <h2 className="visually-hidden">Organic Food</h2>
      <AllProductsList />
      {totalPages > 1 && !loading && !error && <Pagination />}
      {loading && (
        <div className="pt-[60px] pb-20 mx-auto md:pt-28 md:pb-52 xl:pt-36">
          <OrganicFoodBadge className="static size-40" />
        </div>
      )}
      {error && <p>Error</p>}
    </section>
  );
};

export default AllProductsSection;
