import actions from '../actions';
export default function decksReducer(state = {}, action) {
  switch (action.type) {
    case actions.decks.get:
      return {
        ...state,
        ...action.decks,
      }
  }
  return state;
}