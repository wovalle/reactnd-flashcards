import { AsyncStorage } from 'react-native';
import { storageKey } from './constants';

export const fetchDecks = () => {
  return AsyncStorage.getItem(storageKey);
}

export function saveDeck(deck) {
  return AsyncStorage.mergeItem(
    storageKey,
    JSON.stringify({
      [deck.title]: deck
    })
  );
}