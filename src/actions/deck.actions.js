import { fetchDecks, saveDeck } from '../api';
import actions from './index';

export const getDecks = () => {
  return async (dispatch) => {
    try {
      const decks = await fetchDecks();
      dispatch({
        type: actions.decks.getAll,
        decks: JSON.parse(decks)
      });

    } catch (error) {
      console.log('Oopps...', error)
    }
  }
}

export const saveNewDeck = (title, navigate) => {
  return async (dispatch) => {
    const deck = { title, questions: [] };
    console.log(deck)
    saveDeck(deck);

    dispatch({
      type: actions.decks.save,
      deck
    });

    navigate('Deck', { deckId: deck.title });
  }
}