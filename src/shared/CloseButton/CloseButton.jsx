import { Icon } from 'shared';

const CloseButton = ({ ...props }) => {
  return (
    <button type="button" {...props}>
      <Icon iconId="close" />
    </button>
  );
};

export default CloseButton;
