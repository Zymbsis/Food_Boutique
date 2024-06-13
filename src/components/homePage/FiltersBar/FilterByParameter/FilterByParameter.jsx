import Select from 'react-select';
import { useParameters } from '../.hooks/useParameters';
import { selectComponentStyles } from '../.helpers/selectComponentStyles';
import { optionsList } from '../.data/parameterOptions';
import css from './FilterByParameter.module.css';

const FilterByParameter = () => {
  const { selectedOption, handleChange } = useParameters();

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
