import { fetchDecks } from '../api';
import actions from './index';

export const getDecks = () => {
  return async (dispatch) => {
    const decks = await fetchDecks();
    dispatch({
      type: actions.decks.get,
      decks
    });
  }
}