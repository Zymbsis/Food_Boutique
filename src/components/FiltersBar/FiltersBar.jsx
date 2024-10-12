import { Container } from 'shared';
import FilterByCategory from '../FilterByCategory/FilterByCategory';
import SortByParameter from '../SortByParameter/SortByParameter';
import SearchByKeyword from '../SearchByKeyword/SearchByKeyword.jsx';
import css from './FiltersBar.module.css';

const FiltersBar = () => {
  return (
    <section>
      <Container>
        <fieldset className={css.filtersWrapper}>
          <legend className={css.filtersBarTitle}>Filters:</legend>
          <SearchByKeyword />
          <FilterByCategory />
          <SortByParameter />
        </fieldset>
      </Container>
    </section>
  );
};

export default FiltersBar;
