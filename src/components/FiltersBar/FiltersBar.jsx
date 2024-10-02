import { Container } from 'shared';
import FilterByCategory from '../FilterByCategory/FilterByCategory';
import SortByParameter from '../SortByParameter/SortByParameter';
import SearchByKeyword from '../SearchByKeyword/SearchByKeyword.jsx';
import css from './FiltersBar.module.css';

const FiltersBar = () => {
  return (
    <section>
      <Container>
        <p className={css.filtersBarTitle}>Filters:</p>
        <div className={css.filtersWrapper}>
          <SearchByKeyword />
          <FilterByCategory />
          <SortByParameter />
        </div>
      </Container>
    </section>
  );
};

export default FiltersBar;
