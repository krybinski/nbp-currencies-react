export const showAll = currencies => {
  return {
    type: 'SHOW_CURRENCIES',
    payload: currencies
  };
};

export const addFavourite = currency => {
  return {
    type: 'ADD_CURRENCY',
    payload: currency
  };
};

export const removeFavourite = currency => {
  return {
    type: 'REMOVE_CURRENCY',
    payload: currency
  };
};

export const clearFavourites = () => {
  return {
    type: 'REMOVE_ALL'
  };
};
