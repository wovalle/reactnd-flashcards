import { combineReducers } from 'redux';
import cards from './cards.reducer';

const rootReducer = combineReducers({
  cards,
});

export default rootReducer;