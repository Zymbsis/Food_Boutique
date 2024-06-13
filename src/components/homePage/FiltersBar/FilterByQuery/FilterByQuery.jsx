import { useQuery } from '../.hooks/useQuery';
import { CloseButton } from 'shared';
import css from './FilterByQuery.module.css';

const FilterByQuery = () => {
  const { handleChange, handleClick, keyword, validationError } = useQuery();

  return (
    <div className={css.inputWrapper}>
      <input
        type="text"
        placeholder="Search for anything"
        name="keyword"
        autoComplete="off"
        value={keyword}
        onChange={handleChange}
      />
      {validationError && (
        <span className={css.error}>May contain only letters and spaces</span>
      )}
      <CloseButton handleClick={handleClick} className={css.clearButton} />
    </div>
  );
};

export default FilterByQuery;
