import { useState } from 'react';
import { useModalContext } from './useContext.js';
import SubscriptionSuccess from '../components/SubscriptionSuccess/SubscriptionSuccess.jsx';
import SubscriptionError from '../components/SubscriptionError/SubscriptionError.jsx';
import { sendSubscriptionRequest } from '../services/foodBoutiqueCustomersApi.js';
import { EMAIL_PATTERN } from '../constants/index.js';

export const useSubscribe = () => {
  const [email, setEmail] = useState('');
  const [invalidEmail, setInvalidEmail] = useState(null);
  const { openModal } = useModalContext();

  const onFormSubmit = async e => {
    e.preventDefault();
    const emailValue = e.target.email.value.trim();

    if (!emailValue) {
      setInvalidEmail('Can not be empty');
      return;
    }
    if (!EMAIL_PATTERN.test(emailValue)) {
      setInvalidEmail('Invalid email format');
      return;
    }
    try {
      await sendSubscriptionRequest(emailValue);
      openModal(SubscriptionSuccess);
      setEmail('');
    } catch ({ response: { status } }) {
      openModal(SubscriptionError, { status: status });
    }
  };

  const onInputChange = ({ target: { value } }) => {
    setEmail(value);
    if (invalidEmail) setInvalidEmail(null);
  };

  return { email, invalidEmail, onFormSubmit, onInputChange };
};
