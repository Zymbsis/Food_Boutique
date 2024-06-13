import Select from 'react-select';
import { selectComponentStyles } from '../.helpers/selectComponentStyles';
import { useCategories } from '../.hooks/useCategories';
import css from './FilterByCategory.module.css';

const FilterByCategory = () => {
  const { optionsList, selectedOption, handleChange } = useCategories();

  return (
    <div className={css.categorySelectWrapper}>
      <Select
        styles={selectComponentStyles}
        options={optionsList}
        onChange={handleChange}
        value={selectedOption}
      />
    </div>
  );
};

export default FilterByCategory;
