import axios from 'axios';

const GET_SYMBOL = 'GET_SYMBOL';

const getSymbol = (symbol) => {
  return {
    type: GET_SYMBOL,
    symbol,
  };
};

export function fetchSymbol(id) {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios.get(
        `https://rename-reclaim.herokuapp.com/api/symbols/${id}/`
      );
      dispatch(getSymbol(data));
      console.log('fetch symbol for', id, 'was successful');
    } catch (error) {
      dispatch(console.error(error));
    }
  };
}

const symbol = {};

export const oneSymbolReducer = (state = symbol, action) => {
  switch (action.type) {
    case GET_SYMBOL:
      return action.symbol;
    default:
      return state;
  }
};
