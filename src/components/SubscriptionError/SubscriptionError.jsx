import css from './SubscriptionError.module.css';

const SubscriptionError = ({ status }) => {
  return (
    <div className={css.textWrapper}>
      {status === 409 ? (
        <>
          <h3>
            This <span>email address</span> has already been entered
          </h3>
          <p>
            You have already subscribed to our new products. Watch for offers at
            the mailing address.
          </p>
        </>
      ) : (
        <>
          <h3>Unexpected error</h3>
          <p>Please reload the page and try again.</p>
        </>
      )}
    </div>
  );
};

export default SubscriptionError;
