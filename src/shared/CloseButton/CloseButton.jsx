import { Icon } from 'shared';

const CloseButton = ({ handleClick, className }) => {
  return (
    <button type="button" onClick={handleClick} className={className}>
      <Icon iconId="close" />
    </button>
  );
};

export default CloseButton;
