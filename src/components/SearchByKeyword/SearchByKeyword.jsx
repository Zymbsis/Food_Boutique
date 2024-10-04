import { Icon } from 'shared';
import { useFetchByKeyword } from 'hooks';
import css from './SearchByKeyword.module.css';

const SearchByKeyword = () => {
  const { handleChange, handleClick, keyword, validationError } =
    useFetchByKeyword();

  return (
    <div className={`${css.inputWrapper} ${keyword && css.activeInput}`}>
      <input
        type="text"
        placeholder="Search for anything"
        name="keyword"
        autoComplete="off"
        value={keyword}
        onChange={handleChange}
      />
      {validationError && (
        <span className={css.error}>May contain only letters and spaces</span>
      )}
      <button type="button" onClick={handleClick} className={css.clearButton}>
        <Icon iconId={keyword ? 'close' : 'search'} />
      </button>
    </div>
  );
};

export default SearchByKeyword;
