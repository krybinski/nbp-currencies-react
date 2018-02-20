export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_CURRENCY':
      return state.concat(action.payload);
    case 'REMOVE_CURRENCY':
      return state.filter(element => element !== action.payload);
    case 'REMOVE_ALL':
      state = [];
      return state;
    default:
      return state;
  }
};
