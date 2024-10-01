import { useDispatch, useSelector } from 'react-redux';
import { changeKeyword } from '@redux/requestParams/slice';
import { useState } from 'react';
import { selectKeyword } from '@redux/requestParams/selectors.js';

export const useQuery = () => {
  const dispatch = useDispatch();
  const keyword = useSelector(selectKeyword);
  const [validationError, setValidationError] = useState(false);

  const handleChange = e => {
    const { value } = e.target;
    if (!/^[A-Za-z\s]*$/.test(value)) {
      setValidationError(true);
    } else {
      dispatch(changeKeyword(value));
      setValidationError(false);
    }
  };

  const handleClick = () => {
    if (keyword === '') return;
    dispatch(changeKeyword(''));
  };

  return {
    handleChange,
    handleClick,
    keyword,
    validationError,
  };
};
