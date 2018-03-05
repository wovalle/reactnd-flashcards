import actions from '../actions';
export default function decksReducer(state = {}, action) {
  switch (action.type) {
    case actions.decks.getAll:
      return {
        ...state,
        ...action.decks,
      }
    case actions.decks.save:
      return {
        ...state,
        [action.deck.title]: action.deck
      }
    case actions.decks.save_question:
      return {
        ...state,
        [action.deckId]: {
          ...state[action.deckId],
          questions: [
            ...state[action.deckId].questions,
            { question: action.question, answer: action.answer }
          ]
        }
      }
  }
  return state;
}