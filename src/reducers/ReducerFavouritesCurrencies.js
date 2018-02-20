export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_CURRENCY':
      if (!state.includes(action.payload)) {
        return state.concat(action.payload).sort((a, b) => a.code.localeCompare(b.code));
      }
      return state;
    case 'REMOVE_CURRENCY':
      return state.filter(element => element !== action.payload);
    case 'REMOVE_ALL':
      state = [];
      return state;
    default:
      return state;
  }
};
