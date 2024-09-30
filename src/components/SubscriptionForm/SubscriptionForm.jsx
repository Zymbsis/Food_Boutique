import { useState } from 'react';
import css from './SubscriptionForm.module.css';

const SubscriptionForm = () => {
  const [email, setEmail] = useState('');
  const [invalidEmail, setInvalidEmail] = useState(null);

  const onSubmit = e => {
    const emailValue = e.target.email.value;
    if (email.trim() === '') {
      setInvalidEmail('Can not be empty');
    } else if (!/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(emailValue)) {
      setInvalidEmail('Invalid email format');
    } else {
      console.log(emailValue);
      setEmail('');
    }
    e.preventDefault();
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
        value={email}
        name="email"
        onChange={onChange}
      />
      {invalidEmail && <span className={css.invalidEmail}>{invalidEmail}</span>}
      <button type="submit">Send</button>
    </form>
  );
};

export default SubscriptionForm;
