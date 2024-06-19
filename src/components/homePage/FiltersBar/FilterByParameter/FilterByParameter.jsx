import { useState } from 'react';
import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { addSortParams } from '@redux/requestParams/slice';
import { selectComponentStyles } from '../.helpers/selectComponentStyles';
import { defaultOption, optionsList } from '../.data/parameterOptions';
import css from './FilterByParameter.module.css';

const FilterByParameter = () => {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState(defaultOption);

  const handleChange = option => {
    dispatch(addSortParams(JSON.parse(option.value)));
    setSelectedOption(option.value === '{}' ? defaultOption : option);
  };

  return (
    <div className={css.parametersSelectWrapper}>
      <Select
        styles={selectComponentStyles}
        options={optionsList}
        onChange={handleChange}
        value={selectedOption}
      />
    </div>
  );
};

export default FilterByParameter;
