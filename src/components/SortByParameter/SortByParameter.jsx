import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { addSortParams } from '@redux/requestParams/slice';
import { selectDisplayedSortParams } from '@redux/requestParams/selectors.js';
import { sortParamsOptionsList } from 'helpers';
import { selectComponentStyles } from 'styles/selectComponentStyles';
import css from './SortByParameter.module.css';

const SortByParameter = () => {
  const dispatch = useDispatch();
  const selectedOption = useSelector(selectDisplayedSortParams);

  const handleChange = option => {
    dispatch(addSortParams(JSON.parse(option.value)));
  };

  return (
    <div className={css.parametersSelectWrapper}>
      <Select
        styles={selectComponentStyles}
        options={sortParamsOptionsList}
        onChange={handleChange}
        value={selectedOption}
      />
    </div>
  );
};

export default SortByParameter;
