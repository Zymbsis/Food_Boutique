import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { changeCategory } from '@redux/requestParams/slice';
import { selectComponentStyles } from '../.helpers/selectComponentStyles';
import { createOption, createOptions } from '../.helpers/createCategoryOptions';
import css from './FilterByCategory.module.css';
import { selectProductCategoriesList } from '@redux/productLists/selectors.js';
import { selectCategory } from '@redux/requestParams/selectors.js';

const FilterByCategory = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectProductCategoriesList);

  const selectedCategory = useSelector(selectCategory);
  const optionsList = createOptions(data);
  const selectedOption = createOption(selectedCategory);

  const handleChange = option => {
    dispatch(changeCategory(option.value));
  };

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
