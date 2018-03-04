import { combineReducers } from 'redux';
import decks from './decks.reducer';

const rootReducer = combineReducers({
  decks,
});

export default rootReducer;