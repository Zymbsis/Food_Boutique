const Form = ({ additionalComponent, buttonName, children, ...props }) => {
  return (
    <form {...props}>
      {additionalComponent}
      {children}
      <button type="submit">{buttonName}</button>
    </form>
  );
};

export default Form;
