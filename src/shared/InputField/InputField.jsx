import { Fragment } from 'react';

const InputField = ({
  label,
  errorMessage,
  InputWrapper = Fragment,
  ...props
}) => {
  return (
    <InputWrapper>
      {label}
      <input {...props} />
      {errorMessage && <span>{errorMessage}</span>}
    </InputWrapper>
  );
};

export default InputField;
