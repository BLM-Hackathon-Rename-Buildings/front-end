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
      console.log('the id passed:', id);
      const { data } = await axios.get(
        `http://rename-reclaim.herokuapp.com/api/symbols/${id}/`
      );
      dispatch(getSymbol(data));
      console.log('one user', data);
    } catch (error) {
      dispatch(console.error(error));
    }
  };
}

const symbol = {};

export default function (state = symbol, action) {
  switch (action.type) {
    case GET_SYMBOL:
      return action.symbol;
    default:
      return state;
  }
}
