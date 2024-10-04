import { useEffect, useState } from 'react';
import { EMAIL_PATTERN } from 'constants';
import { useModalContext } from 'hooks';
import { sendSubscriptionRequest } from 'services';
import SubscriptionSuccess from '../components/SubscriptionSuccess/SubscriptionSuccess.jsx';
import SubscriptionError from '../components/SubscriptionError/SubscriptionError.jsx';

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
  };

  useEffect(() => {
    if (!invalidEmail) return;
    const handleClearError = () => {
      setInvalidEmail(null);
    };
    document.addEventListener('click', handleClearError);
    return () => document.removeEventListener('click', handleClearError);
  }, [invalidEmail]);

  return { email, invalidEmail, onFormSubmit, onInputChange };
};
