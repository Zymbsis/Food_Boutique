import { useSubscribe } from 'hooks';
import css from './SubscriptionForm.module.css';

const SubscriptionForm = () => {
  const { email, invalidEmail, onFormSubmit, onInputChange } = useSubscribe();

  return (
    <form onSubmit={onFormSubmit} className={css.form}>
      <p>Subscribe and learn about new products!</p>
      <input
        type="text"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      {invalidEmail && <span className={css.invalidEmail}>{invalidEmail}</span>}
      <button type="submit" className={css.submitBtn}>
        Send
      </button>
    </form>
  );
};

export default SubscriptionForm;
