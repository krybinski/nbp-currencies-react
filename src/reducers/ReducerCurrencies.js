export default (state = [], action) => {
  switch (action.type) {
    case 'SHOW_CURRENCIES':
      return state.concat(action.payload).sort((a, b) => a.code.localeCompare(b.code));
    default:
      return state;
  }
};
