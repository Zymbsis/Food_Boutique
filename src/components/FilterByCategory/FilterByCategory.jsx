import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { changeCategory } from '@redux/requestParams/slice';
import { selectDisplayedCategory } from '@redux/requestParams/selectors.js';
import {
  selectOptionsListFromCategories,
  selectProductCategoriesList,
} from '@redux/productLists/selectors.js';
import { fetchProductCategories } from '@redux/productLists/operations.js';
import { createOptionsList } from 'helpers';
import { selectComponentStyles } from 'styles/selectComponentStyles';
import css from './FilterByCategory.module.css';

const FilterByCategory = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectProductCategoriesList);
  const optionsList = useSelector(selectOptionsListFromCategories);

  const displayedCategory = useSelector(selectDisplayedCategory);
  const handleChange = option => dispatch(changeCategory(option.value));

  useEffect(() => {
    if (data.length) return;
    dispatch(fetchProductCategories());
  }, [data, dispatch]);

  return (
    <div className={css.categorySelectWrapper}>
      <Select
        styles={selectComponentStyles}
        options={optionsList}
        onChange={handleChange}
        value={displayedCategory}
      />
    </div>
  );
};

export default FilterByCategory;
