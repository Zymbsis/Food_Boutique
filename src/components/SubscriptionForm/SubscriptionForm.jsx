import { useCustomersFetch } from 'hooks';
import { sendSubscription } from 'services';
import { SubscriptionError, SubscriptionSuccess } from 'components';
import { InputField } from '../../shared/index.js';
import Form from '../../shared/Form/Form.jsx';
import css from './SubscriptionForm.module.css';
import { use } from 'react';
import { ModalContext } from '../Modal/ModalProvider.jsx';

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
  const { openModal } = use(ModalContext);

  return (
    <Form
      onSubmit={handleFormSubmit}
      className={css.form}
      additionalComponent={<p>Subscribe and learn about new products!</p>}
      buttonName="Send"
    >
      <InputField
        errorMessage={invalidEmail}
        type="text"
        placeholder="Email"
        name="email"
        value={email}
        onChange={handleInputChange}
      />
    </Form>
  );
};

export default SubscriptionForm;
