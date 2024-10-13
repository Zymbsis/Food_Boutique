import { Container } from 'shared';
import {
  FilterByCategory,
  SortByParameters,
  SearchByKeyword,
} from 'components';
import css from './FiltersBar.module.css';

const FiltersBar = () => {
  return (
    <section>
      <Container>
        <fieldset className={css.filtersWrapper}>
          <legend className={css.filtersBarTitle}>Filters:</legend>
          <SearchByKeyword />
          <FilterByCategory />
          <SortByParameters />
        </fieldset>
      </Container>
    </section>
  );
};

export default FiltersBar;
