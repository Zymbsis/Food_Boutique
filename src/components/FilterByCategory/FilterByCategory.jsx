import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { changeCategory } from '@redux/requestParams/slice';
import { selectCategory } from '@redux/requestParams/selectors.js';
import { selectProductCategoriesList } from '@redux/productLists/selectors.js';
import { createOptionFromCategory, createOptionsList } from 'helpers';
import { selectComponentStyles } from 'styles/selectComponentStyles';
import css from './FilterByCategory.module.css';

const FilterByCategory = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectProductCategoriesList);
  const selectedCategory = useSelector(selectCategory);
  const optionsList = createOptionsList(data);
  const selectedOption = createOptionFromCategory(selectedCategory);

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
