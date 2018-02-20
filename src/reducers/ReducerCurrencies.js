export default (state = [], action) => {
  switch (action.type) {
    case 'SHOW_CURRENCIES':
      return state.concat(action.payload);
    default:
      return state;
  }
};
