import { useEffect, useState } from 'react';
import { EMAIL_PATTERN } from 'constants';

export const useCustomersFetch = callback => {
  const [email, setEmail] = useState('');
  const [invalidEmail, setInvalidEmail] = useState('');

  const handleClearError = () => setInvalidEmail('');

  const handleCheckEmail = email => {
    if (!email) {
      setInvalidEmail('Please enter your email');
    } else if (!EMAIL_PATTERN.test(email)) {
      setInvalidEmail('Invalid email format');
    } else {
      return true;
    }
  };

  const handleInputChange = ({ target: { value } }) => {
    setEmail(value);
    if (invalidEmail) {
      handleClearError();
    }
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    const emailValue = e.target.email.value.trim();
    const isEmailValid = handleCheckEmail(emailValue);
    if (isEmailValid) {
      callback(emailValue);
    }
  };

  useEffect(() => {
    invalidEmail
      ? document.addEventListener('click', handleClearError)
      : document.removeEventListener('click', handleClearError);

    return () => document.removeEventListener('click', handleClearError);
  }, [invalidEmail]);

  return { email, invalidEmail, handleFormSubmit, handleInputChange, setEmail };
};
