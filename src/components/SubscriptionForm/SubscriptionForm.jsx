import { useState } from 'react';
import css from './SubscriptionForm.module.css';
import axios from 'axios';
import { useModalContext } from '../../hooks/useContext.js';
import SubscriptionError from '../SubscriptionError/SubscriptionError.jsx';
import SubscriptionSuccess from '../SubscriptionSuccess/SubscriptionSuccess.jsx';

const SubscriptionForm = () => {
  const [email, setEmail] = useState('');
  const [invalidEmail, setInvalidEmail] = useState(null);
  const { openModal } = useModalContext();

  const onSubmit = async e => {
    e.preventDefault();
    const emailValue = e.target.email.value;
    if (emailValue.trim() === '') {
      setInvalidEmail('Can not be empty');
    } else if (!/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(emailValue)) {
      setInvalidEmail('Invalid email format');
    } else {
      try {
        await axios.post(
          'https://food-boutique.b.goit.study/api/subscription',
          { email: emailValue }
        );
        openModal(<SubscriptionSuccess />);
        setEmail('');
      } catch ({ response: { status } }) {
        openModal(<SubscriptionError status={status} />);
      }
    }
  };
  const onChange = ({ target: { value } }) => {
    if (invalidEmail) {
      setInvalidEmail(null);
    }
    setEmail(value);
  };

  return (
    <form onSubmit={onSubmit} className={css.form}>
      <p>Subscribe and learn about new products!</p>
      <input
        type="text"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onChange}
      />
      {invalidEmail && <span className={css.invalidEmail}>{invalidEmail}</span>}
      <button type="submit">Send</button>
    </form>
  );
};

export default SubscriptionForm;
