import { combineReducers } from 'redux';
import CurrenciesReducer from './ReducerCurrencies';
import FavouritesCurrenciesReducer from './ReducerFavouritesCurrencies';

const rootReducer = combineReducers({
  currencies: CurrenciesReducer,
  favourites: FavouritesCurrenciesReducer
});

export default rootReducer;
