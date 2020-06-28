import axios from 'axios';

function refreshPage() {
  window.location.reload(false);
}

const GET_SYMBOLS = 'GET_SYMBOLS';
const ADD_SYMBOL = 'ADDED_SYMBOL';

const gotAllSymbols = (symbols) => {
  return {
    type: GET_SYMBOLS,
    symbols,
  };
};

const addSymbol = (symbol) => {
  return {
    type: ADD_SYMBOL,
    symbol,
  };
};

export function addSymbolCall(symbol) {
  return async (dispatch) => {
    try {
      await axios.put(`URI call here`);
      dispatch(addSymbol(symbol));
      refreshPage();
    } catch (error) {
      dispatch(console.error(error));
    }
  };
}

export const fetchAllSymbols = () => {
  return async (dispatch) => {
    const symbols = await axios.get(
      'http://rename-reclaim.herokuapp.com/api/symbols/all/'
    );
    dispatch(gotAllSymbols(symbols));
    console.log('dispatch successful');
  };
};

export const fetchSymbolsByZip = (zip) => {
  return async (dispatch) => {
    const symbols = await axios.get(
      `http://rename-reclaim.herokuapp.com/api/symbols/zip/${zip}/`
    );
    dispatch(gotAllSymbols(symbols));
    console.log('dispatched for symbols in:', zip);
  };
};

export function removeSymbol(item) {
  return async (dispatch) => {
    try {
      await axios.delete(`URI here`);
      refreshPage();
    } catch (error) {
      dispatch(console.error(error));
    }
  };
}

const allSymbols = [];

export const symbolsReducer = (state = allSymbols, action) => {
  switch (action.type) {
    case ADD_SYMBOL:
      return [...state, action.symbol];
    case GET_SYMBOLS:
      return action.symbols;
    default:
      return state;
  }
};
