import axios from 'axios';

export const getCurrenciesByTableType = tableType => {
  return axios.get(`https://api.nbp.pl/api/exchangerates/tables/${tableType}/`);
};

export const getAllCurrencies = () => {
  return axios.all([
    getCurrenciesByTableType('A'),
    getCurrenciesByTableType('B') ]);
};
