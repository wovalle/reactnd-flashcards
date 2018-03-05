import { fetchDecks, fetchDeck, saveDeck } from '../api';
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
    saveDeck(deck);

    dispatch({
      type: actions.decks.save,
      deck
    });

    navigate('Deck', { deck });
  }
}

export const saveQuestion = (deckId, question, answer, cb) => {
  return async (dispatch, getState) => {
    const deck = await fetchDeck(deckId);
    deck.questions.push({ question, answer });
    saveDeck(deck);

    dispatch({
      type: actions.decks.save_question,
      deckId,
      question,
      answer
    });

    cb();
  }
}