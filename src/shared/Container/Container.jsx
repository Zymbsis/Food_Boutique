import css from './Container.module.css';

const Container = ({ className, children }) => {
  return <div className={`${css.container} ${className}`}>{children}</div>;
};

export default Container;
