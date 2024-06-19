import { useEffect } from 'react';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductCategories } from '@redux/productLists/operations';
import { selectProductCategories } from '@redux/productLists/slice';
import { changeCategory, selectCategory } from '@redux/requestParams/slice';
import { selectComponentStyles } from '../.helpers/selectComponentStyles';
import { createOption, createOptions } from '../.helpers/createCategoryOptions';
import css from './FilterByCategory.module.css';

const FilterByCategory = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectProductCategories);
  const selectedCategory = useSelector(selectCategory);
  const optionsList = createOptions(data);
  const selectedOption = createOption(selectedCategory);

  useEffect(() => {
    if (data.length > 0) return;
    dispatch(fetchProductCategories());
  }, [dispatch, data]);

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
