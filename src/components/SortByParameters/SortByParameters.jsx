import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { sortParamsOptionsList } from 'utils';
import { addSortParams } from '@redux/requestParams/slice';
import { selectDisplayedSortParams } from '@redux/requestParams/selectors.js';
import { selectComponentStyles } from 'styles/selectComponentStyles';
import css from './SortByParameters.module.css';

const SortByParameters = () => {
  const dispatch = useDispatch();
  const selectedOption = useSelector(selectDisplayedSortParams);

  const handleChange = option => dispatch(addSortParams(JSON.parse(option.value)));

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

export default SortByParameters;
