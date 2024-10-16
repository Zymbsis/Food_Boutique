import { useModalContext, useCustomersFetch } from 'hooks';
import { sendSubscription } from 'services';
import { SubscriptionError, SubscriptionSuccess } from 'components';
import css from './SubscriptionForm.module.css';

const SubscriptionForm = () => {
  const subscriptionRequest = async email => {
    try {
      await sendSubscription(email);
      setEmail('');
      openModal(SubscriptionSuccess);
    } catch ({ response: { status } }) {
      openModal(SubscriptionError, { status: status });
    }
  };

  const { email, invalidEmail, handleFormSubmit, handleInputChange, setEmail } =
    useCustomersFetch(subscriptionRequest);
  const { openModal } = useModalContext();

  return (
    <form onSubmit={handleFormSubmit} className={css.form}>
      <p>Subscribe and learn about new products!</p>
      <input
        type="text"
        placeholder="Email"
        name="email"
        value={email}
        onChange={handleInputChange}
      />
      {invalidEmail && <span className={css.invalidEmail}>{invalidEmail}</span>}
      <button type="submit" className={css.submitBtn}>
        Send
      </button>
    </form>
  );
};

export default SubscriptionForm;
