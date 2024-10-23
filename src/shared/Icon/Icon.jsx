import { icon } from 'images';

const Icon = ({ iconId, ...props }) => {
  return (
    <svg role="img" {...props}>
      <use xlinkHref={`${icon}#${iconId}`} />
    </svg>
  );
};

export default Icon;
