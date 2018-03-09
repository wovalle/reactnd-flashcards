import { AsyncStorage } from 'react-native';
export const decksStorageKey = 'MobileFlashcards:Decks';
const notificationsStorageKey = 'MobileFlashcards:Notifications';

export const fetchDecks = () => {
  return AsyncStorage.getItem(decksStorageKey);
}

export const fetchDeck = async (deckId) => {
  return JSON.parse(await fetchDecks())[deckId];
}

export const saveDeck = (deck) => {
  return AsyncStorage.mergeItem(
    decksStorageKey,
    JSON.stringify({
      [deck.title]: deck
    })
  );
}

export const getNotifications = () => {
  return AsyncStorage.getItem(notificationsStorageKey)
    .then(JSON.parse);
}

export const setNotifications = (bool) => {
  return AsyncStorage.setItem(notificationsStorageKey, JSON.stringify(bool));
}