export const selectComponentStyles = {
  control: (baseStyles, state) => {
    return {
      ...baseStyles,
      backgroundColor:
        state.selectProps.value.value === '' ? '#e8e8e2' : '#fff',
      width: '100%',
      height: 48,
      border:
        state.selectProps.value.value === ''
          ? '1px solid #0101014d'
          : '1px solid transparent',
      borderRadius: '30px',
      boxShadow: 'none',
      outline: 'none',
      paddingLeft: 20,
      paddingRight: 12,
      transition: 'all 200ms',
      '&:hover': {},
      '@media (min-width:768px)': { height: 52 },
    };
  },
  valueContainer: baseStyles => ({
    ...baseStyles,
    paddingLeft: 0,
  }),
  singleValue: baseStyles => ({
    ...baseStyles,
    paddingLeft: 0,
    marginLeft: 0,
    color: '#010101',
    fontSize: '14px',
    lineHeight: '1.28',
    '@media (min-width:768px)': { fontSize: '18px' },
  }),
  indicatorSeparator: () => ({ display: 'none' }),
  menu: baseStyles => ({
    ...baseStyles,
    borderRadius: 15,
    boxShadow:
      '0px 20px 69px 0px rgba(0, 0, 0, 0.07), 0px 4px 11.212px 0px rgba(0, 0, 0, 0.04)',
    paddingTop: 10,
    paddingBottom: 10,
  }),
  menuList: baseStyles => ({
    ...baseStyles,
    paddingTop: 0,
    paddingBottom: 0,
    maxHeight: '100%',
  }),
  option: (baseStyles, state) => {
    return {
      ...baseStyles,
      paddingTop: '4px',
      paddingBottom: '4px',
      paddingLeft: '20px',
      color: state.isSelected ? '#010101' : 'rgba(1, 1, 1, 0.5)',
      fontSize: '14px',
      lineHeight: '1.28',
      cursor: 'pointer',
      backgroundColor: state.isFocused ? '#fff' : '#fff',
      transition: 'all 100ms',
      '&:hover': { backgroundColor: '#6D8434', color: '#E8E8E2' },
      '@media (min-width:768px)': { fontSize: '18px' },
    };
  },
  indicatorsContainer: (baseStyles, state) => ({
    ...baseStyles,
    rotate: state.selectProps.menuIsOpen ? '180deg' : '0',
    transition: 'all 200ms',
  }),
};
