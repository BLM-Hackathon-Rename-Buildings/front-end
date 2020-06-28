import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { symbolsReducer } from '../reducers/SymbolsReducer';
import { oneSymbolReducer } from '../reducers/OneSymbolReducer';
import { resultsReducer } from '../reducers/SearchResultsReducer';

const reducer = combineReducers({
  symbols: symbolsReducer,
  symbol: oneSymbolReducer,
  results: resultsReducer,
});

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);

const store = createStore(reducer, middleware);

export default store;
