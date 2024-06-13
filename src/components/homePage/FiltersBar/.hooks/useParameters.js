import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSortParams } from '@redux/requestParams/slice';
import { defaultOption } from '../.data/parameterOptions';

export const useParameters = () => {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState(defaultOption);

  const handleChange = option => {
    dispatch(addSortParams(JSON.parse(option.value)));
    setSelectedOption(option.value === '{}' ? defaultOption : option);
  };

  return { selectedOption, handleChange };
};
