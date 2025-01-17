import { FilterByCategory, SortByParameters, SearchByKeyword } from 'components';

const FiltersBar = () => {
  return (
    <section>
      <fieldset className="flex flex-col gap-3 md:flex-row md:gap-2">
        <legend className="mb-2 text-14 text-fontPrimary/30">Filters:</legend>
        <SearchByKeyword />
        <FilterByCategory />
        <SortByParameters />
      </fieldset>
    </section>
  );
};

export default FiltersBar;
