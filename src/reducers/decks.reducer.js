import actions from '../actions';
export default function decksReducer(state = {}, action) {
  switch (action.type) {
    case actions.decks.getAll:
      return {
        ...state,
        ...action.decks,
      }
    case actions.decks.save: {
      return {
        ...state,
        [action.deck.title]: action.deck
      }
    }
  }
  return state;
}