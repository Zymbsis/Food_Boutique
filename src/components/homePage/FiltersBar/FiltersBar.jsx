import { Container } from 'shared';
import FilterByCategory from './FilterByCategory/FilterByCategory';
import FilterByParameter from './FilterByParameter/FilterByParameter';
import FilterByQuery from './FilterByQuery/FilterByQuery';
import css from './FiltersBar.module.css';

const FiltersBar = () => {
  return (
    <section>
      <Container>
        <p className={css.filtersBarTitle}>Filters:</p>
        <div className={css.filtersWrapper}>
          <FilterByQuery />
          <FilterByCategory />
          <FilterByParameter />
        </div>
      </Container>
    </section>
  );
};

export default FiltersBar;
