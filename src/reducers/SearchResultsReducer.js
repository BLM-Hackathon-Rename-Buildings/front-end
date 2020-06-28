import axios from 'axios';

const GET_RESULTS = 'GET_RESULTS';

const gotResults = (results) => {
  return {
    type: GET_RESULTS,
    results,
  };
};

export const fetchSymbolsByZip = (zip) => {
  return async (dispatch) => {
    const results = await axios.get(
      `http://rename-reclaim.herokuapp.com/api/symbols/zip/${zip}/`
    );
    dispatch(gotResults(results));
    console.log('dispatched for symbols in:', zip);
  };
};

const results = {};

export const resultsReducer = (state = results, action) => {
  switch (action.type) {
    case GET_RESULTS:
      return action.results;
    default:
      return state;
  }
};
