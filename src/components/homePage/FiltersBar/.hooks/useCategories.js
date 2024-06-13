import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { defaultOption } from '../.data/categoryOptions';
import { createOptions } from '../.helpers/createCategoryOptions';
import { selectCategory, changeCategory } from '@redux/requestParams/slice';
import { useSimpleFetch } from 'hooks';
import { fetchProductCategories } from 'services';

export const useCategories = () => {
  const dispatch = useDispatch();
  const category = useSelector(selectCategory);
  console.log(category);

  const [selectedOption, setSelectedOption] = useState(defaultOption);
  const { data } = useSimpleFetch(fetchProductCategories);

  const optionsList = createOptions(data);

  const handleChange = option => {
    dispatch(changeCategory(option.value));
    setSelectedOption(category === '' ? defaultOption : option);
  };

  return { optionsList, selectedOption, handleChange };
};
