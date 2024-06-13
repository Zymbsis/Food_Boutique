import css from './NothingFound.module.css';

const NothingFound = () => {
  return (
    <div className={css.nothingFoundWrapper}>
      <h3>
        Nothing was found for the selected <span>filters...</span>
      </h3>
      <p>
        Try adjusting your search parameters or browse our range by other
        criteria to find the perfect product for you.
      </p>
    </div>
  );
};

export default NothingFound;
